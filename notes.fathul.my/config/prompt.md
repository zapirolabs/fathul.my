# 📘 notes.fathul.my – Note-Taking App with AI Chatbot Assistant

A full-stack, modular, self-hosted note-taking app with a built-in AI chatbot powered by Retrieval-Augmented Generation (RAG). This app is developed in clearly defined phases and subphases. It is **hosted natively on a VPS running Ubuntu 22.04**, without Docker or containers.

---

## ⚙️ Stack Overview

| Layer        | Tech                                         |
|--------------|----------------------------------------------|
| Frontend     | VueJS + InertiaJS (developed locally)        |
| Web App      | Laravel 11 (auth + UI delivery via FrankenPHP) |
| API Backend  | Laravel 11 (API-only: note CRUD + uploads)   |
| Web Server   | FrankenPHP (natively installed, port 80, real-time) |
| AI Service   | FastAPI (LangChain microservice, natively run via Python) |
| Embeddings   | Voyage-3-large, Voyage-code-3, Voyage-multimodal-3 |
| Chat Model   | GPT-4.1 mini                                 |
| Vector DB    | PostgreSQL (60GB storage) + pgvector         |
| Cache/Queue  | Redis (natively installed)                   |

---

## 📍 Hosting & Development Style

- **VPS OS**: Ubuntu 22.04  
- **Everything runs natively (no Docker)**  
- **Frontend is developed locally on your machine, thats the only thing local, everything else is on production server**  
- **All testing is done directly on production**  
- **No command is auto-run** — all commands must be shown for the user to run manually  
- **All services and dependencies must be installed manually via apt, pip, or source**
- **Always use the latest official documentation** for every tool and API  
  - Never assume based on outdated info or deprecated behavior  
  - Always search the web (e.g., Voyage AI docs, LangChain changelogs, FrankenPHP updates)

---

## 🧱 Phase-Based Development Discipline

This project is built in incremental **phases and subphases**. The key principles:

- Each subphase must be **fully implemented, tested, and working** before moving to the next
- **System services and environments are configured progressively**, not all at once
- All changes must be pushed to production, and **manually deployed/restarted**
- Every decision must align with the next phase
- No premature setup for features not in the current phase

---

## 📦 Phase 1 – Core Note-Taking System

Features:

- Full note CRUD: text, code blocks, image support
- File/image uploads linked to notes
- Tagging and filtering
- Markdown + code syntax highlighting
- Redis for cache and job queue
- PostgreSQL with pgvector ready
- Each note has a unique `note_id`
- Modal system in frontend to preview notes using chatbot response

### 📄 Schema Overview

- `users` – auth  
- `notes` – stores content  
- `note_tags` – tag mapping  
- `note_attachments` – files/images  
- `note_embeddings` – vector chunks + model used  
- `queries` – user questions  
- `query_embeddings` – embedded question vectors  

Always run these commands manually — never automate build/deploy.
Always test in production after every change.

---

## 🧠 Phase 2 – AI Chatbot Assistant (RAG)

After Phase 1 is fully working and tested:

- Add a FastAPI Python service to orchestrate RAG with LangChain
- Use different Voyage models depending on content type:
  - `voyage-3-large` → text  
  - `voyage-code-3` → code  
  - `voyage-multimodal-3` → images or screenshots with embedded text
- Store vectors in pgvector inside PostgreSQL
- Perform similarity search for retrieval
- Use GPT-4.1 mini to generate context-aware replies from retrieved notes
- Include `note_id` in results so frontend can trigger modal preview of the matching note

---

## 🎯 Goals

- Clean, modular **native installation**
- Realtime Laravel performance via **FrankenPHP**
- Multimodal grounded AI assistant for note queries
- Fully self-hosted at **[notes.fathul.my](https://notes.fathul.my)**
- Step-by-step infrastructure scaling without bloated setup
- Manual, production-safe deployments with command-by-command execution
