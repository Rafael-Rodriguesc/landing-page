type LogoProps = { compact?: boolean };

export function Logo({ compact = false }: LogoProps) {
  return (
    <a className="brand" href="#top" aria-label="Ferrari, inicio">
      {!compact && <span className="brand__word">FERRARI</span>}
    </a>
  );
}
