// components/ui/ThemeToggle.tsx
'use client'

import { useState, useEffect } from 'react'
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs'

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
            className={`
                relative p-3 rounded-full
                transition-all duration-500
                transform hover:scale-110
                active:scale-95
                
                /* Base styles */
                bg-white dark:bg-primary
                
                /* Border and shadow effects */
                ring-2 
                ${isDark
                    ? 'ring-primary shadow-[0_0_16px_rgba(96,165,250,0.5)]'
                    : 'ring-accent shadow-[0_0_16px_rgba(253,186,116,0.5)]'
                }
                
                /* Container */
                flex items-center justify-center
                w-10 h-10
                overflow-hidden
            `}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            {/* Light mode icon */}
            <BsSunFill
                className={`
                    absolute
                    transition-all duration-500
                    ${isDark
                        ? 'opacity-0 rotate-180 scale-0'
                        : 'opacity-100 rotate-0 scale-100'
                    }
                    w-5 h-5
                    text-accent
                    animate-[spin_8s_linear_infinite]
                    hover:animate-[spin_4s_linear_infinite]
                `}
            />

            {/* Dark mode icon */}
            <BsMoonStarsFill
                className={`
                    absolute
                    transition-all duration-500
                    ${isDark
                        ? 'opacity-100 rotate-0 scale-100'
                        : 'opacity-0 -rotate-180 scale-0'
                    }
                    w-4 h-4
                    text-blue-400
                    animate-pulse
                `}
            />
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