'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';



interface LogoProps {
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return(
    <div className=" relative py-7">
      <Image
          alt='Logo'
          height={height}
          width={width}
          objectFit='contain'
          src='/images/logo.png'
        />
    </div>
  )
}

export default Logo;