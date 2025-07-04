# Supervisor & RunCloud: Troubleshooting Config File Conflicts

## Overview

On RunCloud-managed servers, Supervisor is often installed via `pip` (Python), not the system package manager (`apt`). This can cause confusion and errors because:

- The **pip version** of Supervisor defaults to `/etc/supervisord.conf`
- The **system (apt) version** uses `/etc/supervisor/supervisord.conf`
- If your config is in `/etc/supervisor/supervisord.conf`, but Supervisor is looking for `/etc/supervisord.conf`, you'll get errors like:
  ```
  unix:///tmp/supervisor.sock no such file
  error: <class 'FileNotFoundError'>, [Errno 2] No such file or directory: file: .../xmlrpc.py line: 557
  ```

---

## Symptoms

- `supervisorctl` commands fail unless you use the `-c` flag with the full config path.
- Errors about missing socket files or config files.
- `supervisorctl` and `supervisord` are located in `/usr/local/bin/` (pip), not `/usr/bin/` (apt).
- Your config file is at `/etc/supervisor/supervisord.conf`, but Supervisor is looking for `/etc/supervisord.conf`.

---

## Solution: Symlink the Config File

1. **Backup the existing `/etc/supervisord.conf` (if it exists):**
    ```bash
    sudo mv /etc/supervisord.conf /etc/supervisord.conf.bak
    ```

2. **Create a symlink from `/etc/supervisord.conf` to `/etc/supervisor/supervisord.conf`:**
    ```bash
    sudo ln -s /etc/supervisor/supervisord.conf /etc/supervisord.conf
    ```

3. **Restart Supervisor:**
    ```bash
    sudo systemctl restart supervisor
    ```

4. **Now you can use `supervisorctl` without specifying the config file:**
    ```bash
    sudo supervisorctl status
    sudo supervisorctl reread
    sudo supervisorctl update
    ```

---

## Additional Checks

- **Check which Supervisor is installed:**
    ```bash
    which supervisorctl
    which supervisord
    ```
    Should both be in `/usr/local/bin/` if installed by pip.

- **Check which config file is being used:**
    ```bash
    sudo strace -e openat supervisorctl status 2>&1 | grep supervisord.conf
    ```
    Should show `/etc/supervisord.conf`.

- **Check your socket path in `/etc/supervisor/supervisord.conf`:**
    ```ini
    [unix_http_server]
    file=/var/run/supervisor.sock
    ```

- **Check for the `[rpcinterface:supervisor]` section:**
    ```ini
    [rpcinterface:supervisor]
    supervisor.rpcinterface_factory = supervisor.rpcinterface:make_main_rpcinterface
    ```

---

## Why Not Uninstall pip Supervisor?

- RunCloud may manage Supervisor via pip, and uninstalling could break automation or future updates.
- Symlinking is safe and non-intrusive.

---

## Summary Table

| Symptom                                      | Solution                                      |
|-----------------------------------------------|-----------------------------------------------|
| `supervisorctl` fails unless using `-c` flag  | Symlink config to `/etc/supervisord.conf`     |
| Socket file errors                            | Ensure correct socket path in config           |
| Multiple Supervisor installations             | Prefer symlink; avoid uninstalling pip version |

---

## References

- [Supervisor Documentation](http://supervisord.org/configuration.html)
- [RunCloud Documentation](https://runcloud.io/docs/)
- [Supervisor-users mailing list](https://supervisor-users.supervisord.narkive.com/jMOjWnQd/unknown-method-error-in-supervisorctl)

---

**If you move or rename your config, update the symlink!** 