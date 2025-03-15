interface ProgressBarProps {
  value: number
  maxValue: number
  color?: string
  height?: string
}

export function ProgressBar({
  value,
  maxValue,
  color = "from-pink-500 to-purple-600",
  height = "h-2",
}: ProgressBarProps) {
  const percentage = Math.min(Math.max(0, (value / maxValue) * 100), 100)

  return (
    <div className={`w-full rounded-full bg-white/10 ${height}`}>
      <div className={`rounded-full bg-gradient-to-r ${color} ${height}`} style={{ width: `${percentage}%` }} />
    </div>
  )
}

