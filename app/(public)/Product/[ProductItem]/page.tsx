"use client";

import Navbar from "../../../components/nav";
import Footer from "../../../components/footer";
import Image from "next/image";
import Rating from "../../../components/rating";
import Link from "next/link";
import { RiLinkedinBoxFill as Li } from "react-icons/ri";
import { AiFillTwitterCircle as Tw } from "react-icons/ai";
import { RiFacebookCircleFill as Fb } from "react-icons/ri";
import { BsHeart as Heart } from "react-icons/bs";
import { BsHeartFill as HeartFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import SOFA1 from "../../../assests/big-sofa1.png";
import SOFA2 from "../../../assests/big-sofa2.png";
import { Skeleton } from "@/app/components/skeleton";
import client from "@/app/sanityClient";
import { useParams } from "next/navigation";
import { useContext } from "react";
import {UserCart} from "@/app/context/context";
import { TbError404Off as NotFound } from "react-icons/tb";

export default function ProductApp() {

  const {items, setItems} : any = useContext(UserCart);

  // ------------------------- product handlers

  const [product, setProduct] = useState<[] | [{name : string, imagePath: string, category: string, price: number, description : string, _id : string}]>([]);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [isRelatedProduct, setIsRelatedProduct] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // --------------------- assign param -----------------------

  const { ProductItem }: any = useParams();

  // ----------------------- state --------------------------------

  const [quantity, setQuantity] = useState<number>(1);

  const [description, setDescription] = useState<"des" | "info" | "rev">("des");

  const [favourite, setFavourite] = useState<boolean>(false);

  const [size, setSize] = useState<"XL" | "L" | "XS">("XL");

  const [cart, setCart] = useState<boolean>(false);

  const [color, setColor] = useState(0);

  // ----------------------  add to cart --------------------------


  function addToCart(val : {name : string | undefined, price : number | undefined, quantity: number | undefined, imagePath : string | undefined, id : string | undefined}) {
    const arr = [...items];
    arr.push(val);
    setItems(arr);
  }


  // ----------------------- fetching product --------------------------

  async function getProduct() {
    try {
      const res = await fetch(`/api/product/${ProductItem}`);
      const data = await res.json()
      if (data.length) {
        if (data.statusbar == 404) {
          setError("not found");
        } else {
          setProduct(data);
        }
      }
      console.log("data", data)
    } catch (err) {
      console.log(err);
      setError("connection error");
    }
  }

  async function getRelatedProduct() {
    try {
      const data = await client.fetch(
        `*[_type == "product" && category == "${product[0]?.category}"][0...4]`
      );
      if (data.length) {
        setRelatedProduct(data);
        setIsRelatedProduct(true);
      }
    } catch (err) {
      console.log(err);
      setError("connection error");
    }
  }

  // --------------------- function for customize product ----------------

  function addWishlist () {
    if (typeof window !== undefined) {
      const value = localStorage.setItem("item" , "hello")
    }
  }

  function changeFavourite() {
    if (favourite) {
      setFavourite(false);
    } else {
      setFavourite(true);
    }
  }

  function openCart() {
    if (!cart) {
      setCart(true);
    }
  }

  function changeSize(val: "XL" | "L" | "XS") {
    setSize(val);
  }

  function inc() {
    let num = quantity;

    setQuantity(++num);
  }

  function dec() {
    let num = quantity;
    if (num >= 2) {
      setQuantity(--num);
    }
  }

  useEffect(() => {
    if (product.length) {
      console.log(product)
      getRelatedProduct();
      setIsLoading(false);
      setError("");
    }
  }, [product]);

  useEffect(() => {
    getProduct();
  }, []);

  return error == "error" ? (
    <div className="flex justify-center gap-5 items-center max-h-[1000px] h-[100svh] w-full">
    <div className="bg-red-400 text-white text-7xl justify-center rounded-full items-center flex w-[100px] h-[100px]">
      !
    </div>
    <div className="text-2xl">Something went wrong</div>
  </div>
  ) : (
    <div className="product-main font-[family-name:var(--mypoppins)] relative max-w-[1440px] mx-auto">
      <Navbar className=""></Navbar>
      {
      error == "not found" ?
      <div className="h-[60svh] w-full flex justify-center items-center flex-col"><NotFound size={120}></NotFound><h2>Not found</h2></div> :
      <div className="">
        <div className="sm:mx-20 mx-2 my-10">
          <div className="flex items-center h-10 gap-5 text-xl">
            <div className="text-[#9f9f9f] text-sm">
              <Link href={"/"}>Home</Link>
            </div>{" "}
            &gt;{" "}
            <div className="text-[#9f9f9f] text-sm">
              <Link href={"/Shop"}>Shop</Link>
            </div>{" "}
            &gt;{" "}
            <div className="border-l ps-10 border-black h-full flex items-center text-sm">
              {isLoading ? "" : product[0]?.name}
            </div>
          </div>
        </div>

        <div className="flex gap-5 lg:gap-10 w-full md:flex-row flex-col ">
          <div className="flex xl:flex-row flex-col-reverse xl:ps-0 md:self-start xl:self-auto px-3">
            <div className="flex xl:flex-col flex-row ps-10 gap-10">
              {/* <div className="bg-[#FFF9E5] w-[70px] flex items-center max-h-[70px] rounded-lg">
             
                  <Image
                    src={ASGARD2}
                    alt="asgaard"
                    className="object-cover"
                  ></Image>
              </div>
              <div className="bg-[#FFF9E5] w-[70px] flex items-center max-h-[70x] rounded-lg">
                <Image
                  src={ASGARD3}
                  alt="asgaard"
                  className="object-cover"
                ></Image>
              </div>
              <div className="bg-[#FFF9E5] w-[70px] max-h-[70px] flex items-center rounded-lg">
                <Image
                  src={ASGARD4}
                  alt="asgaard"
                  className="object-cover w-[60px]"
                ></Image>
              </div>
              <div className="bg-[#FFF9E5] w-[70px] flex items-center max-h-[70px] rounded-lg">
                <Image
                  src={ASGARD5}
                  alt="asgaard"
                  className="object-cover"
                ></Image>
              </div> */}
            </div>
            {isLoading ? (
              <Skeleton className="md:w-[400px] w-full h-[300px] sm:h-[400px] rounded-xl flex" />
            ) : (
              <div
                style={{ background: `url(${product[0]?.imagePath})`, backgroundSize: "cover", backgroundPosition: "center" }}
                className="md:w-[400px] h-[400px] !flex !items-center !rounded-xl"
              >
                {/* <Image
                  className="!w-full !h-auto !object-cover"
                  src={product[0].imagePath}
                  width={200}
                  height={200}
                  alt="asgaard"
                ></Image> */}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3 w-full px-10">
            <div className="poppins-thin">
              {isLoading ? (
                <Skeleton className="w-40 h-10" />
              ) : (
                <h2 className="text-3xl w-fit xl:text-4xl">{product[0]?.name}</h2>
              )}
            </div>
            <div>
              {isLoading ? (
                <Skeleton className="w-36 h-8"></Skeleton>
              ) : (
                <h3 className="text-[#9f9f9f] text-xl">Rs. {product[0]?.price}.00</h3>
              )}
            </div>
            <div className="h-[30px] flex items-center">
              <div className="pe-5">
                {isLoading ? (
                  <Skeleton className="w-20 h-6" />
                ) : (
                  <Rating></Rating>
                )}
              </div>
              {isLoading ? (
                <Skeleton className="w-32 h-6" />
              ) : (
                <div className="border-l h-full border-l-black text-xs text-[#9f9f9f] poppins-thin flex items-center ps-5">
                  0 Customer Reviews
                </div>
              )}
            </div>
            <div>
              {isLoading ? (
                <Skeleton className="max-w-[400px] h-56" />
              ) : (
                <p className="text-[12px]  md:max-w-[400px]">
                 {product[0]?.description}
                </p>
              )}
            </div>

            {isLoading ? (
              <Skeleton className="w-full h-20"></Skeleton>
            ) : (
              <div className="mb-2">
                <div className="text-[13px] mb-2 text-[#9f9f9f]">Size</div>
                <div className="flex gap-3">
                  <div
                    onClick={() => {
                      changeSize("XL");
                    }}
                    className={`w-7 h-7 text-xs cursor-pointer flex justify-center items-center ${
                      size === "XL" ? `bg-[#FBEBB5]` : `bg-[#FAF4F4]`
                    } rounded-sm`}
                  >
                    XL
                  </div>
                  <div
                    onClick={() => {
                      changeSize("L");
                    }}
                    className={`w-7 h-7 text-xs flex cursor-pointer justify-center items-center ${
                      size === "L" ? `bg-[#FBEBB5]` : `bg-[#FAF4F4]`
                    } rounded-sm`}
                  >
                    L
                  </div>
                  <div
                    onClick={() => {
                      changeSize("XS");
                    }}
                    className={`w-7 h-7 text-xs flex cursor-pointer justify-center items-center ${
                      size === "XS" ? `bg-[#FBEBB5]` : `bg-[#FAF4F4]`
                    } bg-[#FAF4F4] rounded-sm`}
                  >
                    XS
                  </div>
                </div>
              </div>
            )}
            {isLoading ? (
              <Skeleton className="w-[200px] h-10"></Skeleton>
            ) : (
              <div className="mb-2">
                <div className="text-[13px] mb-2 text-[#9f9f9f]">Color</div>
                <div className="flex gap-3">
                  <div
                    onClick={() => setColor(0)}
                    className={`w-7 h-7 ${
                      color == 0
                        ? "outline outline-2 outline-offset-2 outline-blue-500"
                        : ""
                    } text-xs flex justify-center items-center bg-[#816DFA] rounded-full`}
                  ></div>
                  <div
                    onClick={() => setColor(1)}
                    className={`w-7 h-7 ${
                      color == 1
                        ? "outline outline-2 outline-offset-2 outline-blue-500"
                        : ""
                    } text-xs flex justify-center items-center bg-[#000000] rounded-full`}
                  ></div>
                  <div
                    onClick={() => setColor(2)}
                    className={`w-7 h-7 ${
                      color == 2
                        ? "outline outline-2 outline-offset-2 outline-blue-500"
                        : ""
                    } text-xs flex justify-center items-center bg-[#CDBA7B]  rounded-full`}
                  ></div>
                </div>
              </div>
            )}

            {isLoading ? (
              <Skeleton className="w-full h-10" />
            ) : (
              <div>
                <div className="flex gap-4">
                  <div className="flex border-[1.5px] border-[#9f9f9f] rounded-xl justify-between items-center px-2 w-[100px] max-w-[300px]">
                    <button
                      onClick={() => {
                        dec();
                      }}
                      className="outline-none"
                    >
                      -
                    </button>
                    <div className="text-lg">{quantity}</div>
                    <button
                      onClick={() => {
                        inc();
                      }}
                      className="outline-none"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      addToCart({
                        name : product[0]?.name,
                        price : product[0]?.price,
                        quantity : quantity,
                        imagePath: product[0]?.imagePath,
                        id : product[0]?._id
                      });
                      openCart();
                    }}
                    className="btn2 w-fit text-sm xl:text-lg xl:w-[200px]"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
            {isLoading ? (
              <Skeleton className="w-full h-10" />
            ) : (
              <div className="border-t max-w-[800px] mx-auto px-10 py-5 my-8 border-t-[#9f9f9f] w-full flex justify-between md:justify-normal">
                <div className="flex gap-3 text-sm w-full text-[#9f9f9f]">

                  <div className="flex flex-col gap-3">
                    <div>SKU</div>
                    <div>Category</div>
                    <div>Tags</div>
                    <div>Share</div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div>:</div>
                    <div>:</div>
                    <div>:</div>
                    <div>:</div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div>SS001</div>
                    <div>{product[0]?.category}</div>
                    <div>Sofa, Chair, Home, Shop</div>
                    <div className="flex gap-2 flex-wrap">
                    <Fb className="text-black text-2xl"></Fb>{" "}
                        <Li className="text-black text-2xl"></Li>{" "}
                        <Tw className="text-black text-2xl"></Tw>
                    </div>
                  </div>

                  
                </div>
                <div
                  onClick={() => {
                    addWishlist()
                    changeFavourite();
                  }}
                  className="self-end text-3xl pe-3 text-red-400 ms-20 cursor-pointer"
                >
                  {!favourite ? <Heart></Heart> : <HeartFill></HeartFill>}
                </div>
              </div>
            )}

        {isLoading ? (
          <Skeleton className="w-full mt-20 h-60" />
        ) : (
          <div className="description w-full border-t px-10 border-t-[#9f9f9f] mx-auto">
            <div className="flex justify-center md:justify-between gap-5 lg:gap-16 text-sm md:text-2xl my-10 flex-wrap">
              <h3
                onClick={() => setDescription("des")}
                className={`cursor-pointer min-w-fit ${
                  description == "des" ? "text-black" : "text-[#9f9f9f]"
                }`}
              >
                Description
              </h3>
              <h3
                onClick={() => setDescription("info")}
                className={`cursor-pointer min-w-fit ${
                  description == "info" ? "text-black" : "text-[#9f9f9f]"
                }`}
              >
                Additional Information
              </h3>
              <h3
                onClick={() => setDescription("rev")}
                className={`cursor-pointer min-w-fit ${
                  description == "rev" ? "text-black" : "text-[#9f9f9f]"
                }`}
              >
                Reviews [5]
              </h3>
            </div>

            <div>
              {description == "des" ? (
                <div>
                  <div className="lg:px-32 text-[#9f9f9f] text-sm lg:text-start text-center">
                    <div className="mb-5">
                      Embodying the raw, wayward spirit of rock &apos;n&apos;
                      roll, the Kilburn portable active stereo speaker takes the
                      unmistakable look and sound of Marshall, unplugs the
                      chords, and takes the show on the road.
                    </div>
                    <div>
                      Weighing in under 7 pounds, the Kilburn is a lightweight
                      piece of vintage styled engineering. Setting the bar as
                      one of the loudest speakers in its class, the Kilburn is a
                      compact, stout-hearted hero with a well-balanced audio
                      which boasts a clear midrange and extended highs for a
                      sound that is both articulate and pronounced. The analogue
                      knobs allow you to fine tune the controls to your personal
                      preferences while the guitar-influenced leather strap
                      enables easy and stylish travel.
                    </div>
                  </div>

                  <div className="flex justify-between xl:gap-0 gap-5 px-7 my-10 md:flex-row flex-col">
                    <div className="bg-[#FFF9E5] rounded-lg md:w-[550px] md:h-[300px] flex items-center">
                      <Image src={SOFA2} alt="sofa2"></Image>
                    </div>
                    <div className="bg-[#FFF9E5] rounded-lg md:w-[550px] md:h-[300px] flex items-center">
                      <Image src={SOFA1} alt="sofa1"></Image>
                    </div>
                  </div>
                </div>
              ) : description == "info" ? (
                <div className="lg:px-32 text-[#9f9f9f] text-sm lg:text-start text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus facere nam suscipit nesciunt doloribus. Suscipit
                  voluptatum labore maxime est, ea ipsam deserunt adipisci, ex
                  unde debitis distinctio, odio doloribus voluptatem! Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
                  repellendus eos molestias quod voluptatibus animi suscipit
                  quo, itaque fugiat dolor quos quae consequuntur nam ut
                  ducimus! Fugit, maxime itaque? Enim. Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit. Quis voluptatibus omnis
                  explicabo asperiores iusto aliquid, amet ducimus, natus,
                  voluptates esse debitis ipsam quos voluptate reprehenderit
                  deleniti? Nobis eos repellendus magnam. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Itaque ex aut laboriosam
                  sit sapiente id voluptatibus rerum perspiciatis. Ipsam eos
                  nesciunt voluptatum odit laudantium quod voluptatibus et
                  minima, atque ipsa?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Id nesciunt obcaecati alias fugit tempora
                  non error laboriosam nostrum eligendi, doloribus commodi
                  dignissimos in nihil deserunt consectetur excepturi deleniti
                  recusandae architecto!
                </div>
              ) : description == "rev" ? (
                <div className="flex flex-col items-center">
                  <div>
                    {/* <RatingStars maxStars={3} isFixed={true}></RatingStars> */}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>

            <div className="related-products pb-12 border-t mt-16 border-t-[#9f9f9f]">
              <div>
                <div>
                  <h2 className="text-4xl text-center mb-8 mt-12">
                    Related Products
                  </h2>
                </div>
                <div className="mt-20 mx-10">
                  <div className="flex justify-around flex-wrap">
                    {
                      isRelatedProduct ? 
                      relatedProduct.map((v : any) => (
                        <Link key={v._id} href={`/Product/${v._id}`}>
                        <div className="card flex flex-col w-[250px] cursor-pointer shadow-md">
                      <div className="h-[200px] self-center mb-6">
                        <Image
                          className="!w-[250px] !h-[200px] !object-cover"
                          width={200}
                          height={200}
                          src={v.imagePath}
                          alt=""
                        ></Image>
                      </div>
                      <div className="text-xs mb-4 px-5">{v.name}</div>
                      <div className="text-xl px-5 pb-5 inline-flex max-w-fit">
                        Rs. {v.price}.00
                      </div>
                    </div>
                    </Link>
                      )) : <div></div>
                    }
                  </div>
                  <div className="flex justify-center mt-20">
                    <Link href={"/Shop"}>
                      <div className="text-2xl underline-btn text-center inline-block cursor-pointer">
                        View More
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      }
      <Footer></Footer>
    </div>
  );
}
