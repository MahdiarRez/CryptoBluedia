import { Card, type CardProps } from '@/app/components/ShadcnUi/card';
import { cn } from '@/app/lib/utils/framer';

interface GlassCardProps extends CardProps {
  colors?: {
    primary: string;
    secondary: string;
    background: string;
    primaryWithOpacity: (opacity: number) => string;
  };
}

export function GlassCard({ className, colors, ...props }: GlassCardProps) {
  const borderColor = colors
    ? colors.primaryWithOpacity(0.1)
    : 'border-white/10';

  return (
    <Card
      className={cn('backdrop-blur-xl bg-DarkBlue', className)}
      style={{
        borderColor: borderColor,
      }}
      {...props}
    />
  );
}
