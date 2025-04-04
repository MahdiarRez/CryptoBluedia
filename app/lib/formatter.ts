/**
 * Formats a number as currency
 * @param value The number to format
 * @param decimals Number of decimal places (default: 2)
 * @param compact Whether to use compact notation for large numbers (default: false)
 * @returns Formatted currency string
 */
export function formatCurrency(
  value: number,
  decimals = 2,
  compact = false
): string {
  if (value === undefined || value === null) return '$0.00';

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    notation: compact ? 'compact' : 'standard',
    compactDisplay: 'short',
  });

  return formatter.format(value);
}

/**
 * Formats a number as a percentage
 * @param value The number to format
 * @param decimals Number of decimal places (default: 2)
 * @returns Formatted percentage string
 */
export function formatPercentage(value: number, decimals = 2): string {
  if (value === undefined || value === null) return '0.00%';

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    signDisplay: 'exceptZero',
  });

  return formatter.format(value / 100);
}

export function formatMarketNumbers(num: number, maxInt: number): string {
  // Extract the integer part and limit it to a maximum of 2 digits
  let integerPart: string = Math.floor(num).toString().slice(0, maxInt);

  // Extract the decimal part, limit it to a maximum of 3 digits
  let decimalPart: string = (num - Math.floor(num)).toFixed(2).slice(2); // Get the decimal part

  // Return the formatted number
  return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
}
