import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { COHORT_JOIN_URL } from '../../lib/cohortLink';

type JoinCohortButtonProps = {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'lg';
  className?: string;
  children?: ReactNode;
};

const SIZE_CLASSES: Record<NonNullable<JoinCohortButtonProps['size']>, string> = {
  sm: 'px-5 py-2.5 text-sm',
  lg: 'px-8 py-4 text-lg',
};

const VARIANT_CLASSES: Record<NonNullable<JoinCohortButtonProps['variant']>, string> = {
  dark: 'bg-brand-900 text-white hover:bg-brand-800 shadow-brand-900/20',
  light: 'bg-white text-brand-900 hover:bg-brand-50 shadow-black/20',
};

export default function JoinCohortButton({
  variant = 'dark',
  size = 'lg',
  className = '',
  children = 'Join the cohort',
}: JoinCohortButtonProps) {
  return (
    <a
      href={COHORT_JOIN_URL}
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-bold shadow-xl transition-all ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </a>
  );
}
