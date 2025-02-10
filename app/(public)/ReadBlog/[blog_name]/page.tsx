"use client";
import Navbar from "@/app/components/nav"
import Footer from "@/app/components/footer"
import { useParams } from "next/navigation"
import Image from "next/image";
import IMAGE from "../../../assests/Screenshot_20220819-223115.png"
import BLOGIMAGE from "../../../assests/blog-box1.jpeg"

export default function ReadBlog() {

    const param = useParams();
    console.log(param?.blog_name)
    return (
        <div className="readblog-main max-w-[1440px] mx-auto">
            <Navbar className=""></Navbar>
            <div className="main py-10 px-2 sm:px-10">
                <div className="profile-section w-full h-[80px] mb-10 flex justify-between">
                    <div className="flex gap-x-3">
                    <div className="profile-pic w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden">
                        <Image className="w-full h-full object-cover" src={IMAGE} alt="img"></Image>
                    </div>
                    <div className="profile-name ">
                    <h3 className="text-sm sm:text-lg">Khubaib Shahid</h3>
                    <p className="text-xs sm:text-sm text-gray-500">Admin</p>
                    </div>
                    </div>
                    <div className="date-section">
                        <p className="text-gray-500 text-sm sm:text-md">4 Oct 2022</p>
                    </div>
                </div>
                <div className="blog-section flex flex-col items-center ">
                    <div className="title mb-10 w-full">
                        <h1 className="text-3xl font-bold mb-10">Going all-in with millennial design
                        </h1>
                        <Image className="mx-auto" src={BLOGIMAGE} alt="titleimg"></Image>
                    </div>
                    <div className="blog px-5 sm:px-10 font-sans">
                        <div className="para-1 mb-10">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia qui mollitia, debitis perferendis, molestias alias provident reprehenderit possimus, esse consequuntur consectetur nihil praesentium quo rerum placeat quae recusandae? Soluta, blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, minus tenetur nesciunt voluptatum fugit unde at? Aperiam assumenda vitae quidem laborum aliquam vel minus, quia eligendi blanditiis, reiciendis corrupti quaerat!</p>
                        </div>
                        <div className="para-2 mb-10">
                            <h2 className="font-bold text-2xl mb-5">Is there any suggestion</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sapiente voluptas quisquam cumque, id, itaque pariatur tempora autem similique sit fugiat illum minima suscipit eos nulla corrupti nesciunt amet mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium harum veniam temporibus. Nulla fugiat, aliquid minus obcaecati commodi assumenda suscipit accusamus id nam neque itaque earum animi unde quia laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure, temporibus voluptatem quia aliquam libero aperiam, fugiat molestias quisquam optio similique eius mollitia. Nihil repudiandae cupiditate, eveniet eius corporis incidunt!
                            </p>
                        </div>
                        <div className="para-3 mb-10">
                            <h2 className="font-bold text-2xl mb-5">lets work on this</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sapiente voluptas quisquam cumque, id, itaque pariatur tempora autem similique sit fugiat illum minima suscipit eos nulla corrupti nesciunt amet mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium harum veniam temporibus. Nulla fugiat, aliquid minus obcaecati commodi assumenda suscipit accusamus
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}