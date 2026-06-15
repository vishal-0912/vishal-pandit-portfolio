export type AccentColor = 'blue' | 'cyan' | 'violet' | 'emerald' | 'orange';

export const colorClasses: Record<AccentColor, { text: string; gradient: string; border: string; bg: string }> = {
  blue: { text: 'text-[#2563EB]', gradient: 'from-[#2563EB] to-[#60A5FA]', border: 'border-[#2563EB]/20', bg: 'bg-[#2563EB]/8' },
  cyan: { text: 'text-[#0891B2]', gradient: 'from-[#0891B2] to-[#22D3EE]', border: 'border-[#0891B2]/20', bg: 'bg-[#0891B2]/8' },
  violet: { text: 'text-[#7C3AED]', gradient: 'from-[#7C3AED] to-[#C4B5FD]', border: 'border-[#7C3AED]/20', bg: 'bg-[#7C3AED]/8' },
  emerald: { text: 'text-[#059669]', gradient: 'from-[#059669] to-[#6EE7B7]', border: 'border-[#059669]/20', bg: 'bg-[#059669]/8' },
  orange: { text: 'text-[#D97706]', gradient: 'from-[#D97706] to-[#FCD34D]', border: 'border-[#D97706]/20', bg: 'bg-[#D97706]/8' },
};
