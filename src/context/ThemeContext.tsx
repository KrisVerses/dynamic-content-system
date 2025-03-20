'use client'

import { createContext, useContext, useState, useEffect } from 'react';

// Define the shape of our theme context data
type ThemeContextType = {
    isDark: boolean;      // Tracks the current theme state
    toggleTheme: () => void;  // Function to switch between themes
};

// Create a new context with undefined default value
// We use undefined instead of a default value to ensure components using this context are wrapped in the provider
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider Component
 * Manages theme state and provides it to all child components
 * 
 * @param children - React components that will have access to the theme context
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    // Initialize theme state
    const [isDark, setIsDark] = useState(false);

    /**
     * On component mount:
     * 1. Check localStorage for saved theme preference
     * 2. Default to 'light' if no preference is saved
     * 3. Update state and DOM attribute to match saved preference
     */
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setIsDark(savedTheme === 'dark');
        // Set data-theme attribute on root element for CSS variable switching
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []); // Empty dependency array means this runs once on mount

    /**
     * Toggle Theme Function
     * 1. Determines new theme based on current state
     * 2. Updates state with new theme
     * 3. Updates DOM attribute for CSS variables
     * 4. Saves preference to localStorage for persistence
     */
    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        setIsDark(!isDark);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    // Provide theme context to children components
    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

/**
 * Custom Hook: useTheme
 * Provides easy access to theme context in any component
 * 
 * @throws Error if used outside of ThemeProvider
 * @returns {ThemeContextType} Object containing isDark state and toggleTheme function
 * 
 * Usage:
 * const { isDark, toggleTheme } = useTheme();
 */
export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

/**
 * THEME SYSTEM OVERVIEW
 * ====================
 * 
 * Purpose:
 * - Provides a centralized way to manage theme state
 * - Persists user theme preference
 * - Enables consistent theme switching across the application
 * 
 * Key Features:
 * 1. Theme Persistence:
 *    - Saves theme preference to localStorage
 *    - Restores preference on page reload
 * 
 * 2. CSS Integration:
 *    - Uses data-theme attribute for CSS variable switching
 *    - Enables smooth transitions between themes
 * 
 * 3. Type Safety:
 *    - TypeScript ensures proper usage of theme context
 *    - Prevents runtime errors with proper type checking
 * 
 * 4. Error Prevention:
 *    - Ensures context is used within provider
 *    - Provides helpful error messages for debugging
 * 
 * Usage Example:
 * function MyComponent() {
 *   const { isDark, toggleTheme } = useTheme();
 *   return (
 *     <button onClick={toggleTheme}>
 *       Current theme: {isDark ? 'Dark' : 'Light'}
 *     </button>
 *   );
 * }
 */
