type TermsAcknowledgmentProps = {
  tone?: 'light' | 'dark';
  className?: string;
};

const TONE_CLASSES: Record<NonNullable<TermsAcknowledgmentProps['tone']>, { text: string; link: string }> = {
  light: { text: 'text-slate-500', link: 'text-slate-600 hover:text-brand-700' },
  dark: { text: 'text-brand-200', link: 'text-brand-100 hover:text-white' },
};

export default function TermsAcknowledgment({
  tone = 'light',
  className = '',
}: TermsAcknowledgmentProps) {
  const t = TONE_CLASSES[tone];
  return (
    <p className={`text-xs ${t.text} ${className}`}>
      By subscribing, you agree to our{' '}
      <a href="/terms" className={`underline underline-offset-2 ${t.link}`}>
        Terms of Service
      </a>
      .
    </p>
  );
}
