import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import ChevronDown from '@components/icons/ChevronDown'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  // Prevent mounting on server, needs to be mounted on the client
  if (!mounted) return null

  return (
    <label>
      <div className="relative w-max mx-auto my-2 ">
        {/* eslint-disable-next-line jsx-a11y/no-onchange */}
        <select
          className="select-primary bg-primary"
          id="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          aria-label="Change theme color"
        >
          <option value="system">System</option>
          <option value="dark">Dark Mode</option>
          <option value="light">Light Mode</option>
        </select>
        <span className="absolute right-2 top-2">
          <ChevronDown />
        </span>
      </div>
    </label>
  )
}

export default ThemeSwitch
