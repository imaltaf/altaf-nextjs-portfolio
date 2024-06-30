import clsx from 'clsx';

interface LogoProps {
  active?: boolean;
}

function Logo({ active = false }: LogoProps) {
  return (
    <div className={clsx('flex items-center gap-1.5 font-[1000] leading-none')}>
      <div className={clsx('-mt-1 hidden text-xl', 'sm:block')}>
        <span className={clsx('text-slate-900', 'dark:text-slate-200')}>
          imaltaf
        </span>
        <span className={clsx('text-accent-600', 'dark:text-accent-500')}>
          .site
        </span>
      </div>
    </div>
  );
}

export default Logo;
