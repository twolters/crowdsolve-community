import { useEffect, type ReactNode } from 'react';
import Logo from '../ui/Logo';

type LegalPageLayoutProps = {
  title: string;
  pageTitle: string;
  description: string;
  effectiveDate: string;
  children: ReactNode;
};

export default function LegalPageLayout({
  title,
  pageTitle,
  description,
  effectiveDate,
  children,
}: LegalPageLayoutProps) {
  useEffect(() => {
    document.title = pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [pageTitle, description]);

  return (
    <div className="min-h-screen bg-cream">
      <header className="pt-10 pb-6 px-6">
        <a href="/" className="inline-flex items-center">
          <Logo className="h-10" />
        </a>
      </header>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-brand-900 mb-3">{title}</h1>
          <p className="text-sm font-bold text-brand-600 uppercase tracking-wide mb-12">
            Effective Date: {effectiveDate}
          </p>
          {children}
        </div>
      </article>
    </div>
  );
}
