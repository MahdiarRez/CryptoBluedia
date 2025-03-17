interface ProgressBarProps {
  value: number;
  maxValue: number;
  color?: string;
  height?: string;
  gradient?: boolean;
  absoluteColor?: string;
}

export function ProgressBar({
  value,
  maxValue,
  color,
  height = 'h-2',
  gradient = true,
  absoluteColor,
}: ProgressBarProps) {
  const percentage = Math.min(Math.max(0, (value / maxValue) * 100), 100);

  return (
    <div className={`w-full rounded-full bg-WHITE/100 ${height}`}>
      <div
        className={`rounded-full ${gradient ? `bg-gradient-to-r ${color}` : ''}  ${height}`}
        style={{
          width: `${percentage}%`,
          backgroundColor: !gradient ? absoluteColor : '',
        }}
      />
    </div>
  );
}
