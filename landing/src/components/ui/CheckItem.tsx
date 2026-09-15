import type { ReactNode } from 'react';
import { CheckCircle2 } from 'lucide-react';

type CheckItemProps = {
  children: ReactNode;
  tone?: 'light' | 'dark';
};

const TONE_CLASSES: Record<NonNullable<CheckItemProps['tone']>, { icon: string; text: string }> = {
  light: { icon: 'text-brand-600', text: 'text-slate-700' },
  dark: { icon: 'text-brand-400', text: 'text-brand-100' },
};

export default function CheckItem({ children, tone = 'light' }: CheckItemProps) {
  const t = TONE_CLASSES[tone];
  return (
    <li className={`flex items-start gap-3 ${t.text}`}>
      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${t.icon}`} />
      <span className="font-medium">{children}</span>
    </li>
  );
}
