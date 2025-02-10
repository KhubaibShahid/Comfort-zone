"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import USERIMG from "../assests/Vector (3).svg";
import HEART from "../assests/Vector (1).svg";
import MAGNIFIER from "../assests/Vector (2).svg";
import CART from "../assests/Vector.svg";
import { BsArrowBarRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import LOGO from "../assests/logo.svg";
import SideCart from "./sidecart";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { User } from "../context/context";
import { FaRegUser as LoginUser } from "react-icons/fa6";
import handleLogout from "@/actions/logoutAction";

const publicNavigation = [
  { name: "Home", href: "/", current: true },
  { name: "Shop", href: "/Shop", current: false },
  { name: "About", href: "/Blog", current: false },
  { name: "Contact", href: "/Contact", current: false },
];

const privateNavigation = [
  { name: "Dashboard", href: "/Admin/Dashboard", current: true },
  { name: "Products", href: "/Admin/Products", current: false },
  { name: "Orders", href: "/Admin/Orders", current: false },
  { name: "Inventory", href: "/Admin/Inventory", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({
  className = "",
  type = "public",
}: {
  className?: string;
  type?: "public" | "private";
}) {
  const navigation = type == "public" ? publicNavigation : privateNavigation;

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { user }: any = useContext(User);

  function searchHandler() {
    router.push(`/Shop?search=${search}`);
  }

  function handleClick() {
    if (isSearchOpen) {
      setIsSearchOpen(false);
    } else {
      setIsSearchOpen(true);
      setIsBoxOpen(false);
    }
  }

  function handleBox() {
    if (isBoxOpen) {
      setIsBoxOpen(false);
    } else {
      setIsSearchOpen(false)
      setIsBoxOpen(true);
    }
  }

  function logoutUser() {
    handleLogout();
    if (window) {
      window.location.reload();
    }
  }

  const [cart, setCart] = useState<boolean>(false);
  
  useEffect(() => {
    console.log(user, "user");
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`${className} font-[family-name:var(--mypoppins)] text-sm md:text-md`}
    >
      <SideCart val={{ cart, setCart }}></SideCart>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex items-center justify-between h-[100px]">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
          </div>
          <div className="flex flex-1 items-center justify-between sm:items-stretch ">
            <div className="flex shrink-0 items-center w-[50px] md:w-[80px]">
              <Image src={LOGO} alt="logo"></Image>
            </div>
            <div className="hidden sm:ml-6 items-center sm:flex">
              <div className="flex space-x-5 sm:space-x-10 lg:space-x-16">
                {navigation.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      "text-black md:text-[16px]",
                      "rounded-md font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center max-w-[247px] md:w-[247px] sm:w-[200px] w-[247px] justify-between pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {user ? (
                <div className="relative">
                  <LoginUser onClick={() => handleBox()} className="w-4 md:w-5 md: h-5 cursor-pointer"></LoginUser>
                  {isBoxOpen ? (
                    <div className="absolute w-[120px] py-4 shadow-md justify-between items-center z-10 flex flex-col gap-3 bg-white rounded-md">
                      <div onClick={() => router.push("/Account")} className="cursor-pointer">Account</div>
                      <div onClick={() => router.push("/My-Orders")} className="cursor-pointer">My Orders</div>
                      <div onClick={() => {logoutUser()}} className="cursor-pointer">Log out</div>
                    </div>
                  ) : <></>
                }
                </div>
              ) : (
                <Link href={"/My-Account"}>
                  <Image
                    alt="account"
                    className="w-5 md:w-6 md:h-6 cursor-pointer"
                    src={USERIMG}
                  ></Image>
                </Link>
              )}

              <Link href={"/Wishlist"}>
                <Image
                  alt="wishlist"
                  className="w-5 md:w-6 md:h-6 cursor-pointer"
                  src={HEART}
                ></Image>
              </Link>

              <div className="relative pe-2">
                <Image
                  onClick={handleClick}
                  alt="search"
                  className="w-5 md:w-6 md:h-6 cursor-pointer"
                  src={MAGNIFIER}
                ></Image>
                {
                  <div
                    className={`${
                      isSearchOpen ? "flex" : "hidden"
                    } w-[200px] h-[40px] bg-white absolute top-10 right-0 z-10 rounded-lg pe-1`}
                  >
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full px-2 h-full bg-transparent outline-none shadow-md"
                      type="text"
                      placeholder="Search..."
                    />
                    <button onClick={() => searchHandler()} className="">
                      <BsArrowBarRight size={30} />
                    </button>
                  </div>
                }
              </div>

              <Image
                onClick={() => setCart(true)}
                alt="cart"
                className="w-5 md:w-6 md:h-6 cursor-pointer"
                src={CART}
              ></Image>

              <DisclosureButton className="group relative inline-flex items-center justify-center sm:hidden rounded-md p-2 text-black">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <RiMenuFill
                  aria-hidden="true"
                  className="block size-6 group-data-[open]:hidden"
                />
                <RiCloseFill
                  aria-hidden="true"
                  className="hidden size-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item, i) => (
            <DisclosureButton
              key={i}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                "text-black xl:text-[16px]",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
