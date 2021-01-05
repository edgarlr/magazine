import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  // Prevent mounting on server, needs to be mounted on the client
  if (!mounted) return null

  return (
    // eslint-disable-next-line jsx-a11y/no-onchange
    <select
      className="input-primary bg-primary-2 border-tertiary block my-2 mx-auto"
      id="theme"
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
    >
      <option value="system">System</option>
      <option value="dark">Dark Mode</option>
      <option value="light">Light Mode</option>
    </select>
  )
}

export default ThemeSwitch
