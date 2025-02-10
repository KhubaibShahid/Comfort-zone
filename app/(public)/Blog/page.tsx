"use client";

import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import Banner from "../../components/banner";
import Services from "../../components/service";
import Image, { StaticImageData } from "next/image";
import TN1 from "../../assests/thumbnail1.png";
import TN2 from "../../assests/thumbnail2.png";
import TN3 from "../../assests/thumbnail3.png";
import USER from "../../assests/User.svg";
import CALENDER from "../../assests/Calender2.svg";
import TAG from "../../assests/Tag.svg";
import SEARCH from "../../assests/Search.svg";
import TN4 from "../../assests/thumbnail4.png";
import TN5 from "../../assests/thumbnail5.png";
import TN6 from "../../assests/thumbnail6.png";
import TN7 from "../../assests/thumbnail7.png";
import TN8 from "../../assests/thumbnail8.png";
import { useState } from "react";

export default function BlogApp() {
  interface BlogType {
    title: string;
    image: StaticImageData;
  }

  const [searchValue, setSearchValue] = useState<string>("");
  const [searchBox, setSearchBox] = useState<boolean>(false);
  const [searchBlog, setSearchBlog] = useState<[] | BlogType[]>([]);

  const blog: BlogType[] = [
    {
      title: "Going all-in with millennial design",
      image: TN1,
    },
    {
      title: "Exploring new ways of decorating",
      image: TN2,
    },
  ];

  function changeHandler(e: any) {
    const arr: BlogType[] = [];
    setSearchValue(e.target.value);
    blog.forEach((v: BlogType, i: number) => {
      if (
        v.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      ) {
        v ? arr.push(v) : null;
      }
    });
    setSearchBlog(arr);
  }

  function focusHandler() {
    setSearchBox(true);
  }
  function blurHandler() {
    console.log(searchBlog);
    setSearchBox(false);
  }

  return (
    <div className="blog-main font-[family-name:var(--mypoppins)] max-w-[1440px] mx-auto">
      <Navbar className=""></Navbar>
      <Banner location="Blog" heading="Blog"></Banner>
      <div className="pt-20 xl:pe-20 lg:pe-0 lg:ps-20 md:ps-10 sm:ps-5">
        <div className="relative mb-10 w-fit sm:hidden block mx-auto">
          <input
            type="text"
            className="inp h-[50px]  w-[300px]  poppins-thin"
          />
          <Image
            src={SEARCH}
            className="absolute right-3 top-3.5"
            alt="search"
          ></Image>
        </div>
        <div className="flex sm:flex-row flex-col">
          <div className="blogs poppins-thin flex flex-col w-full sm:px-0 px-5">
            <div className="flex xl:w-[750px] flex-col gap-3 mb-10">
              <div>
                <Image className="w-full" src={TN1} alt="thumbnail"></Image>
              </div>
              <div className="flex text-[#9f9f9f] text-[15px] gap-5 ">
                <div className="flex gap-3">
                  <Image src={USER} alt="user"></Image>
                  <div>Admin</div>
                </div>
                <div className="flex gap-3">
                  <Image src={CALENDER} alt="user"></Image>
                  <div>14 Oct 2022</div>
                </div>
                <div className="flex gap-3">
                  <Image src={TAG} alt="user"></Image>
                  <div>Wood</div>
                </div>
              </div>
              <div className="">
                <h3 className="text-[28px] md:text-2xl text-xl poppins">
                  Going all-in with millennial design
                </h3>
              </div>
              <div className="">
                <p className=" text-sm text-[#9f9f9f]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
              </div>
              <div>
                <button className="underline-btn ">Read More</button>
              </div>
            </div>
            <div className="flex xl:w-[750px] flex-col gap-3 mb-10">
              <div>
                <Image className="w-full" src={TN2} alt="thumbnail"></Image>
              </div>
              <div className="flex text-[#9f9f9f] text-[15px] gap-5 ">
                <div className="flex gap-3">
                  <Image src={USER} alt="user"></Image>
                  <div>Admin</div>
                </div>
                <div className="flex gap-3">
                  <Image src={CALENDER} alt="user"></Image>
                  <div>14 Oct 2022</div>
                </div>
                <div className="flex gap-3">
                  <Image src={TAG} alt="user"></Image>
                  <div>Wood</div>
                </div>
              </div>
              <div className="">
                <h3 className="text-[28px] md:text-2xl text-xl poppins">
                  Exploring new ways of decorating
                </h3>
              </div>
              <div className="">
                <p className=" text-sm text-[#9f9f9f]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
              </div>
              <div>
                <button className="underline-btn ">Read More</button>
              </div>
            </div>
            <div className="flex xl:w-[750px] flex-col gap-3 mb-10">
              <div>
                <Image className="w-full" src={TN3} alt="thumbnail"></Image>
              </div>
              <div className="flex text-[#9f9f9f] text-[15px] gap-5 ">
                <div className="flex gap-3">
                  <Image src={USER} alt="user"></Image>
                  <div>Admin</div>
                </div>
                <div className="flex gap-3">
                  <Image src={CALENDER} alt="user"></Image>
                  <div>14 Oct 2022</div>
                </div>
                <div className="flex gap-3">
                  <Image src={TAG} alt="user"></Image>
                  <div>Wood</div>
                </div>
              </div>
              <div className="">
                <h3 className="text-[28px] md:text-2xl text-xl poppins">
                  Exploring new ways of decorating
                </h3>
              </div>
              <div className="">
                <p className=" text-sm text-[#9f9f9f]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
              </div>
              <div>
                <button className="underline-btn ">Read More</button>
              </div>
            </div>
          </div>
          <div className="side flex items-center xl:items-end sm:w-full flex-col">
            <div className="relative mb-10 sm:block hidden">
              <input
                onChange={(e) => changeHandler(e)}
                value={searchValue}
                onFocus={() => focusHandler()}
                onBlur={() => blurHandler()}
                type="text"
                className="inp sm:h-[50px]  md:w-[300px] poppins-thin"
              />
              <Image
                src={SEARCH}
                className="absolute right-3 top-3.5"
                alt="search"
              ></Image>
              {searchBox ? (
                <div className="absolute w-full bg-white py-5 px-2 rounded-lg border border-black">
                  {searchBlog.length ? (
                    <div className="flex flex-col gap-5">
                      {searchBlog.map((v: BlogType, i: number) => (
                        <div key={i} className="flex h-10 gap-3 items-center">
                          <Image
                            className="w-20"
                            src={v.image}
                            alt="image"
                          ></Image>
                          <h2 className="text-xs">
                            {v.title.length >= 14
                              ? v.title.slice(0, 14) + "..."
                              : v.title}
                          </h2>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="w-full h-20 flex justify-center items-center">
                      !No Items
                    </div>
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col lg:ps-20 lg:pe-10 w-full mb-20 sm:px-20 px-10">
              <h3 className="md:text-xl text-lg mb-2">Catogories</h3>
              <div className="flex poppins-thin text-sm text-[#9f9f9f] justify-between my-5">
                <div>Crafts</div>
                <div>2</div>
              </div>
              <div className="flex poppins-thin text-sm text-[#9f9f9f] justify-between my-5">
                <div>Design</div>
                <div>8</div>
              </div>
              <div className="flex poppins-thin text-sm text-[#9f9f9f] justify-between my-5">
                <div>Handmade</div>
                <div>7</div>
              </div>
              <div className="flex poppins-thin text-sm text-[#9f9f9f] justify-between my-5">
                <div>Interior</div>
                <div>1</div>
              </div>
              <div className="flex poppins-thin text-sm text-[#9f9f9f] justify-between my-5">
                <div>Wood</div>
                <div>6</div>
              </div>
            </div>
            <div className="flex flex-col sm:ps-20 sm:pe-10 items-center w-full">
              <h3 className="text-xl mb-2">Recent Posts</h3>
              <div className="flex sm:flex-col flex-row flex-wrap w-full justify-center sm:w-auto">
                <div className="flex poppins-thin text-sm gap-2 my-5 md:flex-row  ">
                  <div>
                    <Image src={TN4} alt="thumbnail"></Image>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="mb-1 text-[13px] w-[140px]">
                      Going all-in with millennial design
                    </div>
                    <div className="text-[11px] text-[#9f9f9f]">
                      03 Aug 2022
                    </div>
                  </div>
                </div>
                <div className="flex poppins-thin text-sm gap-2 my-5 md:flex-row sm:flex-col">
                  <div>
                    <Image src={TN5} alt="thumbnail"></Image>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="mb-1 text-[13px] w-[140px]">
                      Exploring new ways of decorating
                    </div>
                    <div className="text-[11px] text-[#9f9f9f]">
                      03 Aug 2022
                    </div>
                  </div>
                </div>
                <div className="flex poppins-thin text-sm gap-2 my-5 md:flex-row sm:flex-col">
                  <div>
                    <Image src={TN6} alt="thumbnail"></Image>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="mb-1 text-[13px] w-[140px]">
                      Handmade pieces that took time to make
                    </div>
                    <div className="text-[11px] text-[#9f9f9f]">
                      03 Aug 2022
                    </div>
                  </div>
                </div>
                <div className="flex poppins-thin text-sm gap-2 my-5 md:flex-row sm:flex-col">
                  <div>
                    <Image src={TN7} alt="thumbnail"></Image>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="mb-1 text-[13px] w-[140px]">
                      Modern home in Milan
                    </div>
                    <div className="text-[11px] text-[#9f9f9f]">
                      03 Aug 2022
                    </div>
                  </div>
                </div>
                <div className="flex poppins-thin text-sm gap-2 my-5 md:flex-row sm:flex-col">
                  <div>
                    <Image src={TN8} alt="thumbnail"></Image>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="mb-1 text-[13px] w-[140px]">
                      Colorful office redesign
                    </div>
                    <div className="text-[11px] text-[#9f9f9f]">
                      03 Aug 2022
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-10">
          <div className="flex w-[400px] justify-around">
            <div className="bg-[#FBEBB5] rounded-lg py-4 px-6 cursor-pointer">
              1
            </div>
            <div className="bg-[#FFF9E5] rounded-lg py-4 px-6 cursor-pointer">
              2
            </div>
            <div className="bg-[#FFF9E5] rounded-lg py-4 px-6 cursor-pointer">
              3
            </div>
            <div className="bg-[#FFF9E5] rounded-lg py-4 px-6 cursor-pointer">
              Next
            </div>
          </div>
        </div>
      </div>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}
