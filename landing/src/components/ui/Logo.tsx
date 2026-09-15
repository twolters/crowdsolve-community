type LogoProps = {
  className?: string;
};

export default function Logo({ className = 'h-8' }: LogoProps) {
  return <img src="/images/crowdsolve-logo.png" alt="CrowdSolve" className={className} />;
}
