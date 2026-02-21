'use client'
import { useTheme } from 'next-themes'

enum themeTypes {
  light = 'light',
  dark = 'dark',
}

const logoMap: Record<keyof typeof themeTypes, string> = {
  [themeTypes.light]: '/static/images/logo.png',
  [themeTypes.dark]: '/static/images/logo-dark.png',
}

export default function Logo() {
  const { resolvedTheme } = useTheme()

  const logo = logoMap[resolvedTheme!]

  return (
    <div className="mr-3 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo}
        alt="logo"
        width={80}
        height={80}
        className="mt-1 h-20 w-20 max-w-none object-cover object-center"
      />
    </div>
  )
}
