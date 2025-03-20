// components/ui/ThemeToggle.tsx
'use client'

import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs'
import { useTheme } from '@/context/ThemeContext'

function ThemeToggle() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`
                relative flex items-center justify-center
                w-10 h-10 rounded-full
                transition-all duration-300
                transform hover:scale-110
                active:scale-95
                shadow-md hover:shadow-lg
                overflow-hidden
                ${isDark
                    ? 'bg-gray-800 hover:bg-gray-700'
                    : 'bg-white hover:bg-gray-50'}
                border-2
                ${isDark
                    ? 'border-gray-700'
                    : 'border-gray-200'}
            `}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            <div className="relative w-5 h-5 flex items-center justify-center">
                {/* Light mode icon */}
                <BsSunFill
                    className={`
                        absolute
                        transition-all duration-300
                        ${isDark
                            ? 'opacity-0 rotate-90 scale-0'
                            : 'opacity-100 rotate-0 scale-100'
                        }
                        w-4 h-4
                        text-amber-500
                        transform-gpu
                        hover:rotate-90
                        motion-safe:transition-transform
                    `}
                />

                {/* Dark mode icon */}
                <BsMoonStarsFill
                    className={`
                        absolute
                        transition-all duration-300
                        ${isDark
                            ? 'opacity-100 rotate-0 scale-100'
                            : 'opacity-0 -rotate-90 scale-0'
                        }
                        w-4 h-4
                        text-blue-300
                        transform-gpu
                    `}
                />
            </div>
        </button>
    )
}

export default ThemeToggle

/*
COMPONENT STYLING BREAKDOWN:

1. Button Container:
   - Fixed dimensions (w-10 h-10)
   - Centered content with flex
   - overflow-hidden to contain animations
   - Hardware-accelerated transforms
   - Reduced transition duration for snappier feedback

2. Icon Container:
   - Centered with flex
   - Fixed dimensions
   - Relative positioning for absolute children

3. Icons:
   - Consistent sizing (w-4 h-4)
   - Simplified animations
   - GPU-accelerated transforms
   - Smooth opacity transitions
   - Hover rotation for sun icon

4. Performance:
   - transform-gpu for hardware acceleration
   - Optimized animation properties
   - Reduced transition durations
   - motion-safe animations
*/