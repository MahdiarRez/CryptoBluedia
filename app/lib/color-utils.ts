export function hexToRgb(hex: string): [number, number, number] {
  // Remove the hash if it exists
  const cleanHex = hex.startsWith('#') ? hex.slice(1) : hex;

  // Validate the hex format
  if (!/^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(cleanHex)) {
    throw new Error('Invalid hex color format. Expected #RRGGBB or #RGB');
  }

  // Handle both 3-digit and 6-digit hex
  const normalizedHex =
    cleanHex.length === 3
      ? cleanHex
          .split('')
          .map((char) => char + char)
          .join('')
      : cleanHex;

  // Extract the RGB components
  const r = Number.parseInt(normalizedHex.substring(0, 2), 16);
  const g = Number.parseInt(normalizedHex.substring(2, 4), 16);
  const b = Number.parseInt(normalizedHex.substring(4, 6), 16);

  // Normalize to 0-1 range
  return [r / 255, g / 255, b / 255];
}
