import type { ReactNode } from 'react';

type TodoProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Visible, dev-only marker for copy the brief left as a [SQUARE BRACKET] placeholder.
 * Renders intentionally visible in every environment so the team can find it by sight or
 * by grepping "TODO:" in the rendered DOM — never replace this with an invented value.
 */
export default function Todo({ children, className = '' }: TodoProps) {
  return (
    <span
      className={`inline-flex flex-wrap items-center gap-1 rounded px-1.5 py-0.5 font-mono text-[0.7em] font-bold uppercase tracking-wide bg-yellow-200 text-yellow-900 border border-dashed border-yellow-600 ${className}`}
    >
      TODO: {children}
    </span>
  );
}
