import clsx from 'clsx';
import { m } from 'framer-motion';

const animation = {
  hide: { pathLength: 0 },
  show: (i) => {
    const delay = 0.6 + i * 0.1;
    return {
      pathLength: 1,
      transition: {
        pathLength: { delay, duration: 2 },
      },
    };
  },
};

interface HeaderImageAnimationProps {
  onAnimationComplete?: () => void;
}

function HeaderImageAnimation({
  onAnimationComplete = () => {},
}: HeaderImageAnimationProps) {
  return (
    <m.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 457 526" // Adjusted viewBox for 457x526 size
      fill="none"
      initial="hide"
      animate="show"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx(
        'stroke-accent-500 h-[526px] w-[457px] opacity-60', // Adjusted height and width classes
        'dark:opacity-40'
      )}
      onAnimationComplete={onAnimationComplete}
    >
      {/* Letter A */}
      <m.path
        variants={animation}
        custom={1}
        d="M 100,200 L 250,50 L 400,200 L 350,200 L 250,100 L 150,200 Z"
      />
    </m.svg>
  );
}

export default HeaderImageAnimation;
