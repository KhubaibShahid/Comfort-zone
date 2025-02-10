
import Link from "next/link"

export default function Footer() {
    return (
        <div className="footer bg-white px-5 font-[family-name:var(--mypoppins)]">


            <div className="flex mb-10 mt-24 md:justify-evenly md:items-start md:flex-row flex-col md:gap-10 gap-y-20 items-center">

                <div className="text-[#9F9F9F] text-sm w-fit max-w-[280px] self-center">400 University Drive Suite 200 Coral Gables, <br />
                FL 33134 USA</div>

                <div className="flex w-[300px] justify-between">

                <div className="text-sm flex flex-col gap-y-10 md:me-0">
                    <div className="text-[#9f9f9f] ">Links</div>
                    <div className=""><Link href={"/"}>Home</Link></div>
                    <div className=""><Link href={"/Shop"}>Shop</Link></div>
                    <div className=""><Link href={"/About"}>About</Link></div>
                    <div className=""><Link href={"/Contact"}>Contact</Link></div>
                </div>

                <div className="text-sm flex flex-col gap-y-10">
                    <div className="text-[#9f9f9f]">Help</div>
                    <div className="cursor-pointer">Payment Options</div>
                    <div className="cursor-pointer">Returns</div>
                    <div className="cursor-pointer">Privacy Policies</div>
                </div>

                </div>

                <div className="text-sm flex flex-col">
                    <div className="text-[#9f9f9f] mb-12">Newsletter</div>
                    <div className="">
                        <input type="text" className="text-[12px] pb-1 outline-none poppins-thin border-b w-[170px] mb-2 border-black me-2" placeholder="Enter Your Email Address" />
                        <button className="bg-transparent text-[12px] border-b-[1.5px] pb-1 text-black border-b-black">SUBSCRIBE</button>
                    </div>
                </div>

            </div>


            <div className="px-20">
                <div className="border-t border-t-[#D9D9D9] text-sm poppins-thin py-10">
                2025 Meubel House. All rights reverved
                </div>
            </div>
        </div>
    )
}