type LegalAcknowledgmentProps = {
  tone?: 'light' | 'dark';
  className?: string;
};

const TONE_CLASSES: Record<NonNullable<LegalAcknowledgmentProps['tone']>, { text: string; link: string }> = {
  light: { text: 'text-slate-500', link: 'text-slate-600 hover:text-brand-700' },
  dark: { text: 'text-brand-200', link: 'text-brand-100 hover:text-white' },
};

export default function LegalAcknowledgment({
  tone = 'light',
  className = '',
}: LegalAcknowledgmentProps) {
  const t = TONE_CLASSES[tone];
  const linkClass = `underline underline-offset-2 ${t.link}`;
  return (
    <p className={`text-xs ${t.text} ${className}`}>
      By subscribing, you agree to our{' '}
      <a href="/terms" className={linkClass}>
        Terms of Service
      </a>{' '}
      and{' '}
      <a href="/privacy" className={linkClass}>
        Privacy Policy
      </a>
      .
    </p>
  );
}
