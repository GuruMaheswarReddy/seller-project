import { useEffect, useState } from 'react'

const THEME_KEY = 'bc_theme'

// Small, self-contained dark / light theme toggle based on Tailwind's `dark` class.
const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return window.localStorage.getItem(THEME_KEY) || 'dark'
  })

  useEffect(() => {
    if (typeof document === 'undefined') return
    const root = document.documentElement

    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const toggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex items-center gap-2 rounded-full border border-yellow-500/40 bg-black/40 px-3 py-1 text-xs font-medium text-yellow-300 shadow-lg shadow-yellow-500/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-yellow-400 hover:bg-zinc-900/80"
    >
      <span
        className={[
          'flex h-4 w-4 items-center justify-center rounded-full text-[10px]',
          isDark
            ? 'bg-yellow-400 text-black shadow-yellow-400/60'
            : 'bg-zinc-800 text-yellow-300 shadow-zinc-900',
        ].join(' ')}
      >
        {isDark ? '☾' : '☀'}
      </span>
      <span>{isDark ? 'Dark' : 'Light'} mode</span>
    </button>
  )
}

export default ThemeToggle


