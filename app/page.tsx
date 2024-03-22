import Image from 'next/image';

export default function Home() {
  return (
    <div className="absolute flex h-full w-full justify-center items-center bg-black">
      <div className="flex flex-col items-center">
        <Image
          src='/images/logo.png'
          alt='PWR Racing Logo'
          width={300}
          height={50}
          className="mb-4"
        />
      </div>
    </div>
  );
}
