export type AccentColor = 'blue' | 'cyan' | 'violet' | 'emerald' | 'orange';

export const colorClasses: Record<AccentColor, { text: string; gradient: string; border: string; bg: string }> = {
  blue: { text: 'text-blue-400', gradient: 'from-blue-500 to-blue-400', border: 'border-blue-500/20', bg: 'bg-blue-500/8' },
  cyan: { text: 'text-cyan-400', gradient: 'from-cyan-500 to-cyan-400', border: 'border-cyan-500/20', bg: 'bg-cyan-500/8' },
  violet: { text: 'text-violet-400', gradient: 'from-violet-500 to-violet-400', border: 'border-violet-500/20', bg: 'bg-violet-500/8' },
  emerald: { text: 'text-emerald-400', gradient: 'from-emerald-500 to-emerald-400', border: 'border-emerald-500/20', bg: 'bg-emerald-500/8' },
  orange: { text: 'text-orange-400', gradient: 'from-orange-500 to-amber-400', border: 'border-orange-500/20', bg: 'bg-orange-500/8' },
};
