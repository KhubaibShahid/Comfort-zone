import Image from "next/image";
import Link from "next/link";
import LOGO from "../assests/logo.svg";

export default function Banner({heading, className = "", location, type = "horizontal"}:{heading:string, location:string, className?: string, type?:"vertical" |"horizontal"}) {
    return (
        <div className={`shop-herosection ${type == "horizontal" ? "h-[316px]" : "h-auto px-10 w-[500px]"} font-[family-name:var(--mypoppins)] ${className}`}>
        <div className="flex justify-center items-center h-full">
          <div className=" flex flex-col items-center">
            <Image width={70} src={LOGO} alt="logo"></Image>

            <h1 className="text-[45px] mb-2">{heading}</h1>

            <div className="flex items-center gap-1">
              <Link href={"./"}>Home </Link>
              <span className="text-2xl">&gt;</span>
              <span className="poppins-thin">{location}</span>
            </div>
          </div>
        </div>
      </div>
    )
}