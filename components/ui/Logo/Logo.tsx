import Image from "next/image";
import Link from "next/link";

// Shared
import { LogoProps } from "@/shared/interfaces/logo.interface";

const Logo: React.FC<LogoProps> = ({ width, height, light }) => {
  return (
    <Link href="/">

        <Image
          src="/assets/Orangelogo.png"
          alt="logo"
          width={width}
          height={height}
          className="lg:flex lg:h-14 lg:w-12"
        />
    </Link>
  );
};

export default Logo;

