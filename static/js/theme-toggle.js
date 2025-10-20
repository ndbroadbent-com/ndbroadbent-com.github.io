/**
 * Theme Toggle - Cycles between system, dark, and light modes
 */
(function() {
  'use strict';

  const THEME_KEY = 'theme-preference';
  const THEMES = ['system', 'dark', 'light'];

  // Get current theme from localStorage or default to 'system'
  function getStoredTheme() {
    return localStorage.getItem(THEME_KEY) || 'system';
  }

  // Get the actual theme to apply (resolve 'system' to dark/light)
  function getAppliedTheme(theme) {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme;
  }

  // Apply theme to document
  function applyTheme(theme) {
    const appliedTheme = getAppliedTheme(theme);

    if (appliedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    updateThemeIcon(theme);
  }

  // Update the theme toggle icon
  function updateThemeIcon(theme) {
    const icons = document.querySelectorAll('.theme-icon');
    icons.forEach(icon => {
      icon.classList.remove('active');
      if (icon.dataset.theme === theme) {
        icon.classList.add('active');
      }
    });
  }

  // Cycle to next theme
  function cycleTheme() {
    const currentTheme = getStoredTheme();
    const currentIndex = THEMES.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    const nextTheme = THEMES[nextIndex];

    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
  }

  // Initialize theme on page load
  function init() {
    const storedTheme = getStoredTheme();
    applyTheme(storedTheme);

    // Add click handler to toggle button
    const toggleButton = document.querySelector('.theme-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', cycleTheme);
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const currentTheme = getStoredTheme();
      if (currentTheme === 'system') {
        applyTheme('system');
      }
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
