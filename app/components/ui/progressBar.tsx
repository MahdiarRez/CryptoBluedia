'use client';
import { motion } from 'motion/react';

export function ProgressBar({
  value,
  delay,
  color,
}: {
  value: number;
  delay: number;
  color: string;
}) {
  return (
    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
      <motion.div
        className={`h-full `}
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, delay }}
      />
    </div>
  );
}
