"use State";
import { BsBagX } from "react-icons/bs";
import { IoMdCloseCircle as Close } from "react-icons/io";
import Image from "next/image";
import {
  Dispatch,
  useEffect,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from "react";
import {UserCart} from "../context/context";
import I from "../assests/bar-table.png";
import Link from "next/link";

export default function SideCart({
  val,
}: {
  val: { cart: boolean; setCart: Dispatch<SetStateAction<boolean>> };
}) {
  const { items, setItems }: any = useContext(UserCart);

  

  const [prices, setPrices] = useState<[] | number[]>([]);

  function removeItem(id: number) {
    const arr = [...items];
    arr.splice(id, 1);
    setItems(arr);
  }

  //  -------------------- cart ui handler ---------------------------

  const cartRef = useRef<null | HTMLDivElement>(null);

  const { cart, setCart } = val;

  function closeHandler() {
    if (cart) {
      cartRef.current
        ? (cartRef.current.style.animation = "sidepopend 0.3s linear")
        : "";
      cartRef.current ? (cartRef.current.style.right = "-417px") : "";
    }
  }
  useEffect(() => {
    if (cart) {
      cartRef.current
        ? (cartRef.current.style.animation = "sidepop 0.3s linear")
        : "";
      cartRef.current ? (cartRef.current.style.right = "0px") : "";
      console.log(cartRef.current?.style.right);
    } else {
      console.log(cartRef.current);
    }
  }, [cart]);

  useEffect(() => {
    const arr: number[] = [];
    items.map((v: { price: number; quantity: number }) => {
      arr.push(v.price * v.quantity);
    });
    setPrices(arr);
  }, [items]);
  return cart ? (
    <div
      onAnimationEnd={(e) =>
        e.animationName == "sidepopend" ? setCart(false) : null
      }
      ref={cartRef}
      className={`side-cart flex absolute min-h-fit max-w-[1440px] overflow-hidden w-full z-20 h-svh bg-opacity-20 justify-end items-start`}
    >
      <div className="shopCart  bg-white md:max-h-[746px] h-full w-[417px] border ">
        <div className="flex items-center justify-between px-10">
          <h3 className="text-2xl font-bold border-b border-b-[#9f9f9f] w-[80%] py-5">
            Shopping Cart
          </h3>
          <div>
            <BsBagX
              onClick={() => {
                closeHandler();
              }}
              className="text-[#9f9f9f] cursor-pointer"
            ></BsBagX>
          </div>
        </div>

        <div className="flex flex-col justify-between ">
          <div className="items border sm:max-h-[500px] h-[60svh] overflow-y-scroll min-h-[100px]">

            {
              items.map((v : any, i : number) => (
            <div key={v._id} className="flex items-center justify-between px-2 sm:px-10">
              <div className=" w-[80%] py-5 flex items-center gap-5">
                <div className="w-24 h-24 flex items-center rounded-lg bg-[#FBEBB5]">
                  <Image width={200} height={200} src={v.imagePath} alt="asgaard"></Image>
                </div>
                <div>
                  <h4 className="text-sm mb-1">{v.name}</h4>
                  <div className="flex items-center gap-3">
                    <div>{v.quantity}</div>
                    <div>x</div>{" "}
                    <div className="text-xs text-yellow-600">
                      Rs. {v.price}.00
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Close onClick={() => removeItem(i)} className="text-xl text-[#9f9f9f]"></Close>
              </div>
            </div>
              ))
            }
          </div>

          <div className="">
            <div className="flex my-5 px-10 py-5 justify-between border-b border-b-[#9f9f9f]">
              <div>Subtotal</div>
              <div className="text-yellow-600">
                Rs{" "}
                {prices.reduce((prev, next) => {
                  return prev + next;
                }, 0)}
                .00
              </div>
            </div>

            <div className="flex justify-evenly items-center">
              <button className="text-xs border border-black px-8 rounded-xl py-1">
                View Cart
              </button>
              <Link href={"/Checkout"}>
                <button className="text-xs border border-black px-8 rounded-xl py-1">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
