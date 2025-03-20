// components/ThemeToggle.tsx
'use client'

import { useState, useEffect } from 'react'

function ThemeToggle() {
    // Track theme state
    const [isDark, setIsDark] = useState(false)

    // Initialize theme from localStorage or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light'
        setIsDark(savedTheme === 'dark')
        document.documentElement.setAttribute('data-theme', savedTheme)
    }, [])

    // Toggle theme function
    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark'
        setIsDark(!isDark)
        document.documentElement.setAttribute('data-theme', newTheme)
        localStorage.setItem('theme', newTheme)
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 
                     transition-colors duration-200 ease-in-out
                     hover:bg-gray-300 dark:hover:bg-gray-700"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            {isDark ? '🌞' : '🌙'}
        </button>
    )
}

export default ThemeToggle

/*
COMPONENT BEST PRACTICES:

1. State Management:
   - Use localStorage for persistence
   - Handle initial state in useEffect
   - Clean state updates

2. Accessibility:
   - aria-label for screen readers
   - Semantic HTML (button)
   - Clear visual indicators

3. Styling:
   - Transition effects for smoothness
   - Dark mode variants
   - Interactive states (hover)

4. Performance:
   - Minimal re-renders
   - Client-side only code
   - Efficient DOM updates
*/