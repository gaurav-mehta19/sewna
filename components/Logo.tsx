interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

export default function Logo({ size = 'medium' }: LogoProps) {
  const sizes = {
    small: {
      se: 'text-[1.7rem]',
      wn: 'text-[1.7rem]',
      a: 'text-[1.7rem]',
    },
    medium: {
      se: 'text-[2.5rem]',
      wn: 'text-[1.7rem]',
      a: 'text-[2rem]',
    },
    large: {
      se: 'text-[3rem]',
      wn: 'text-[2rem]',
      a: 'text-[2rem]',
    },
  };

  return (
    <div className="text-[#00b67f] flex items-baseline">
      <span className={`font-pacifico font-normal ${sizes[size].se}`}>se</span>
      <span className={`font-poppins font-semibold ${sizes[size].wn} tracking-[-0.2em]`}>
        W
        <i className={`${sizes[size].wn} font-poppins italic tracking-normal`}>N</i>
      </span>
      <span className={`font-poppins font-normal tracking-[-0.02em] ${sizes[size].a}`}>a.</span>
    </div>
  );
}
