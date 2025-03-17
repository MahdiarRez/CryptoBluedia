import { Card, type CardProps } from '@/app/components/ShadcnUi/card';
import { cn } from '@/app/lib/utils/framer';

interface GlassCardProps extends CardProps {
  colors?: {
    primary: string;
    secondary: string;
    background: string;
  };
}

export function GlassCard({ className, colors, ...props }: GlassCardProps) {
  const borderColor = colors ? colors?.primary : '#F5F4F6';

  return (
    <Card
      className={cn('backdrop-blur-xl', className)}
      style={{
        borderColor: borderColor,
        boxShadow: 'none',
      }}
      {...props}
    />
  );
}
