"use client";
import Image from "next/image";
import Link from "next/link";

// components
import Logo from "./ui/Logo/Logo";
import { ApplyButton } from "./ui/Buttons/ApplyButton/ApplyButton";
import { Text } from "./ui/Texts/Text/Text";
import { TextButton } from "./ui/Texts/TextButton/TextButton";

// shared data
import {
  description1,
  description2,
  note,
  footeraboutdata,
  footerservicesdata,
  localisation1,
  localisation2,
  phone,
} from "../shared";

const Footer = () => {


  return (
    <footer className="flex h-full w-full flex-col items-center justify-center">
      {/* footer desktop/mobile */}
      <div className="my-auto h-fit w-full items-start justify-center bg-black-color-900 pb-14 pt-2 text-white-color backdrop-blur-2xl lg:flex  lg:gap-x-14 lg:pt-0 xl:gap-x-20 2xl:gap-x-36">
        <div className="flex h-full w-full flex-col items-center justify-start pt-10 lg:w-fit lg:pl-4">
          <div className="relative">
            <Logo width={202} height={44} light={true} />
          </div>
          <div className="flex h-fit w-full items-center justify-center py-4">
            <Text className="h-full w-full text-center text-gray-color-400">
              {description1}
              <br /> {description2}
            </Text>
          </div>
          <div className="hidden items-center justify-center gap-14 lg:flex">
            <Link href="https://www.linkedin.com/company/orange-tunisie/">
              <Image
                src="/assets/linkedin.png"
                alt="logo"
                width={18}
                height={18}
              />
            </Link>
            <Link href="https://x.com/orangetn">
              <Image
                src="/assets/x.svg"
                alt="logo"
                width={18}
                height={18}
              />
            </Link>
          </div>
        </div>
        <div className="flex h-fit w-fit items-center justify-start px-5 text-xs font-bold lg:px-0 lg:pt-10">
          <div className="grid w-full grid-rows-subgrid items-center gap-2.5 rounded-[30px] px-5 pt-2.5 text-black-color-200 lg:items-start lg:justify-start lg:gap-3 lg:px-0 lg:pt-4">
            <TextButton size="medium">
              <Link href={`/apropos`}>A propos</Link>
              <div className="h-[0px] w-7 border border-primary-color-500 lg:hidden"></div>
            </TextButton>
            {footeraboutdata.map((item, index) => (
              <TextButton
                key={index}
                size="medium"
                className="font-normal text-black-color-200"
              >
                <Link href={`/apropos`}>{(item)}</Link>
              </TextButton>
            ))}
          </div>
        </div>
        <div className="flex h-fit w-fit items-center justify-start px-5 text-xs  font-bold lg:px-0 lg:pt-10">
          <div className="grid w-full grid-rows-subgrid items-center gap-2.5 rounded-[30px] px-5  py-2 text-black-color-200 lg:items-center lg:justify-start lg:gap-3 lg:px-0 lg:pt-4">
            <TextButton size="medium">
              <Link href={`/offer`}>offer</Link>
              <div className=" h-[0px] w-7 border border-primary-color-500  lg:hidden"></div>
            </TextButton>
            {footerservicesdata.map((item, index) => (
              <TextButton
                key={index}
                size="medium"
                className="font-normal text-black-color-200"
              >
                <Link href={`/offer`}>{(item)}</Link>
              </TextButton>
            ))}
          </div>
        </div>
        <div className="flex h-fit w-fit items-center justify-start px-5 text-xs  font-bold lg:px-0 lg:pt-10">
          <div className="flex w-full flex-col items-center gap-2.5 rounded-[30px] px-5 py-2 text-black-color-200  lg:items-center lg:justify-start lg:gap-3 lg:px-0 lg:pt-4">
            <div className="flex h-full w-full items-center justify-start pb-2">
              <TextButton size="medium">
                <Link href={`/contrat`}>Contrat</Link>
                <div className="h-[0px] w-7 border border-primary-color-500 lg:hidden"></div>
              </TextButton>
            </div>
            <TextButton size="medium">
              <Link href={`/contrat`}>
                <ApplyButton>apply</ApplyButton>
              </Link>
            </TextButton>
          </div>
        </div>
        <div className="flex h-fit w-fit items-center justify-start px-5 text-xs  font-bold lg:px-0 lg:pr-4 lg:pt-10">
          <div className="grid w-full grid-rows-subgrid items-center gap-2.5 rounded-[30px] px-5 py-2 text-black-color-200 lg:items-start lg:justify-start lg:gap-2 lg:px-0 lg:pt-4">
            <div className="h-full w-full pb-2">
              <TextButton size="medium">
                <Link href={`/reclamation`}>Reclamation</Link>
                <div className="h-[0px] w-7 border border-primary-color-500 lg:hidden"></div>
              </TextButton>
            </div>
            <div className="flex flex-col items-start justify-between gap-4 py-2 lg:gap-3 lg:gap-y-6 lg:px-0">
              <div className="flex items-center justify-center gap-2 lg:items-start">
                <Image
                  src="/assets/local.png"
                  alt="logo"
                  width={18}
                  height={18}
                />
                <TextButton
                  size="medium"
                  className="h-fit w-fit flex-col justify-center text-start font-normal text-black-color-200"
                >
                  <p>
                    {localisation1} <br />
                    {localisation2}
                  </p>
                </TextButton>
              </div>
              <div className="grid grid-flow-col gap-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/Phone.png"
                    alt="logo"
                    width={18}
                    height={18}
                  />
                  <TextButton
                    size="medium"
                    className="h-fit w-fit  text-start font-normal text-black-color-200"
                  >
                    <p>{phone}</p>
                  </TextButton>
                </div>
              </div>
              <div className="grid grid-flow-col gap-4">
                <div className="flex items-center gap-2">
                  <TextButton
                    size="medium"
                    className="h-fit w-fit  text-start font-normal text-black-color-200"
                  >
                    <p> {note}</p>
                  </TextButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-10 lg:hidden">
          <div>
          <Link href="https://www.linkedin.com/company/orange-tunisie/">
              <Image
                src="/assets/linkedin.png"
                alt="logolinkedin"
                width={18}
                height={18}
              />
            </Link>
          </div>
          <div>
            <Link href="https://x.com/orangetn">
              <Image
                src="/assets/x.svg"
                alt="logoX"
                width={18}
                height={18}
              />
            </Link>
          </div>
        </div>
      </div>
      {/* desktop/mobile copyright  */}
      <div className="w-full lg:hidden">
        <div className="flex h-full w-full flex-col items-center justify-center bg-black py-4">
        <Text className="text-center lg:text-xl text-white">
        © Orange 2024
        </Text>
        </div>
      </div>
      <div className="hidden z-50 h-full flex-col items-center justify-center bg-black py-4 lg:flex lg:w-full">
        <Text className="text-center lg:text-xl text-white">
        © Orange 2024
        </Text>
      </div>
    </footer>
  );
};
export default Footer;

