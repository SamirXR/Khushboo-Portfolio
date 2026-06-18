'use client'

/**
 * Theme toggle button — switches between light and dark mode.
 *
 * How it works:
 * - The FOUC-prevention script in layout.tsx sets the .dark class on <html>
 *   before first paint, based on localStorage or system preference.
 * - This button just toggles the .dark class and saves the choice.
 * - The sun/moon icons are swapped via CSS (dark:block / dark:hidden),
 *   so there's no React state and no hydration mismatch.
 */

export default function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle('dark')
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch (e) {
      // localStorage might be unavailable (private mode, etc.)
    }
  }

  return (
    <button
      onClick={toggle}
      className="theme-toggle fixed top-5 right-6 md:right-10 z-[60]"
      aria-label="Toggle dark mode"
    >
      {/* Sun icon — shown in dark mode (click to switch to light) */}
      <svg
        className="w-4 h-4 hidden dark:block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
      {/* Moon icon — shown in light mode (click to switch to dark) */}
      <svg
        className="w-4 h-4 block dark:hidden"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  )
}
