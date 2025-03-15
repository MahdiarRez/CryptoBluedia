// Helper functions to manipulate colors

// Convert hex to RGB
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  // Remove # if present
  hex = hex.replace(/^#/, "")

  // Parse hex values
  let r, g, b
  if (hex.length === 3) {
    r = Number.parseInt(hex[0] + hex[0], 16)
    g = Number.parseInt(hex[1] + hex[1], 16)
    b = Number.parseInt(hex[2] + hex[2], 16)
  } else {
    r = Number.parseInt(hex.substring(0, 2), 16)
    g = Number.parseInt(hex.substring(2, 4), 16)
    b = Number.parseInt(hex.substring(4, 6), 16)
  }

  return { r, g, b }
}

// Convert RGB to hex
export function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = Math.max(0, Math.min(255, Math.round(x))).toString(16)
        return hex.length === 1 ? "0" + hex : hex
      })
      .join("")
  )
}

// Create a darker version of a color
export function darken(color: string, amount = 0.2): string {
  const { r, g, b } = hexToRgb(color)
  const factor = 1 - amount

  return rgbToHex(Math.round(r * factor), Math.round(g * factor), Math.round(b * factor))
}

// Create a lighter version of a color
export function lighten(color: string, amount = 0.2): string {
  const { r, g, b } = hexToRgb(color)
  const factor = amount

  return rgbToHex(
    Math.round(r + (255 - r) * factor),
    Math.round(g + (255 - g) * factor),
    Math.round(b + (255 - b) * factor),
  )
}

// Create a transparent version of a color
export function withOpacity(color: string, opacity: number): string {
  const { r, g, b } = hexToRgb(color)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

// Generate a gradient CSS string
export function gradient(color1: string, color2: string, direction = "to right"): string {
  return `linear-gradient(${direction}, ${color1}, ${color2})`
}

// Generate a complementary color
export function getComplementary(color: string): string {
  const { r, g, b } = hexToRgb(color)
  return rgbToHex(255 - r, 255 - g, 255 - b)
}

// Get a contrasting text color (black or white) based on background
export function getContrastText(backgroundColor: string): string {
  const { r, g, b } = hexToRgb(backgroundColor)
  // Calculate luminance - a measure of the perceived brightness
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

  // Return black for bright backgrounds, white for dark ones
  return luminance > 0.5 ? "#000000" : "#FFFFFF"
}

// Generate a color palette from a base color
export function generatePalette(baseColor: string) {
  return {
    base: baseColor,
    light: lighten(baseColor, 0.2),
    lighter: lighten(baseColor, 0.4),
    dark: darken(baseColor, 0.2),
    darker: darken(baseColor, 0.4),
    contrast: getContrastText(baseColor),
    complementary: getComplementary(baseColor),
    withOpacity: (opacity: number) => withOpacity(baseColor, opacity),
  }
}

