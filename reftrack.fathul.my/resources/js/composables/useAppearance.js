import { onMounted, ref, computed } from 'vue';

export function updateTheme(value) {
    if (typeof window === 'undefined') {
        return;
    }

    if (value === 'system') {
        const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
        const systemTheme = mediaQueryList.matches ? 'dark' : 'light';

        document.documentElement.classList.toggle('dark', systemTheme === 'dark');
    } else {
        document.documentElement.classList.toggle('dark', value === 'dark');
    }
}

const setCookie = (name, value, days = 365) => {
    if (typeof document === 'undefined') {
        return;
    }

    const maxAge = days * 24 * 60 * 60;

    document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};

const mediaQuery = () => {
    if (typeof window === 'undefined') {
        return null;
    }

    return window.matchMedia('(prefers-color-scheme: dark)');
};

const getStoredAppearance = () => {
    if (typeof window === 'undefined') {
        return null;
    }

    return localStorage.getItem('appearance');
};

const handleSystemThemeChange = () => {
    const currentAppearance = getStoredAppearance();

    updateTheme(currentAppearance || 'system');
};

export function initializeTheme() {
    if (typeof window === 'undefined') {
        return;
    }

    const savedAppearance = getStoredAppearance();
    updateTheme(savedAppearance || 'system');

    const mq = mediaQuery();
    if (mq) {
        mq.addEventListener('change', handleSystemThemeChange);
    }
}

export function useAppearance() {
    const appearance = ref('system');

    onMounted(() => {
        const savedAppearance = localStorage.getItem('appearance');

        if (savedAppearance) {
            appearance.value = savedAppearance;
        }
    });

    function updateAppearance(value) {
        appearance.value = value;

        localStorage.setItem('appearance', value);

        setCookie('appearance', value);

        updateTheme(value);
    }

    const awsLogoUrl = computed(() => {
        if (typeof window === 'undefined') {
            return 'https://cdn.fathul.my/assets/logo/aws-logo-fullcolor.svg';
        }
        
        const isDark = appearance.value === 'dark' || 
                      (appearance.value === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
        
        return isDark 
            ? 'https://cdn.fathul.my/assets/logo/aws-logo-whiteondark.svg'
            : 'https://cdn.fathul.my/assets/logo/aws-logo-fullcolor.svg';
    });

    return {
        appearance,
        updateAppearance,
        awsLogoUrl,
    };
} 