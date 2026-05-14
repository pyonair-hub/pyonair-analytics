import type { SVGProps } from 'react';

const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 40 40"
    fill="none"
    {...props}
  >
    <rect width={40} height={40} rx={8} fill="#E63946" />
    <path
      d="M12 28V12h5.5c1.8 0 3.2.5 4.2 1.4 1 .9 1.5 2.2 1.5 3.8 0 1.6-.5 2.9-1.5 3.8-1 .9-2.4 1.4-4.2 1.4H15.5V28H12z"
      fill="white"
    />
    <circle cx={28} cy={14} r={3} fill="white" opacity={0.8} />
  </svg>
);
export default SvgLogo;
