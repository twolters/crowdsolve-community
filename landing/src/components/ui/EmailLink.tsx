type EmailLinkProps = {
  email: string;
  bold?: boolean;
};

export default function EmailLink({ email, bold = false }: EmailLinkProps) {
  const link = (
    <a href={`mailto:${email}`} className="text-brand-600 underline hover:text-brand-700">
      {email}
    </a>
  );
  return bold ? <strong>{link}</strong> : link;
}
