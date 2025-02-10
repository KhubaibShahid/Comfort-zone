"use client";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import Image from "next/image";
import FILTER from "../../assests/filter.svg";
import VIEW from "../../assests/view.svg";
import SIZE from "../../assests/size.svg";
import Banner from "../../components/banner";
import Services from "../../components/service";
import { useEffect, useState } from "react";
import { SkeletonCard, SkeletonOption } from "../../components/skeleton";
import { useRouter, useSearchParams } from "next/navigation";
import PriceRangeSlider from "../../components/range";
import { TbError404Off as NotFound } from "react-icons/tb";
import { Suspense } from "react";

export default function ShopApp() {
  return (
    <Suspense>
      <ShopPage></ShopPage>
    </Suspense>
  );
}

function ShopPage() {
  // ---------------- params ----------------------

  const router = useRouter();
  const param = useSearchParams();
  const category = param?.get("category");
  const search = param?.get("search");

  // -------------- data handling state -----------------

  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<[] | [[]]>([]);
  const [tempArr, setTempArr] = useState<[] | [[]]>([]);
  const [error, setError] = useState("");

  // ------------- Tools state ---------------------

  const [filter, setFilter] = useState(false);
  // const [size, setSize] = useState();
  // const [view, setView] = useState<"">();
  const [show, setShow] = useState<number>(16);
  // const [sortBy, setSortBy] = useState<"default">();

  const [pagination, setPagination] = useState<number>(0);

  // -------------------- fetch products -----------------------

  async function getProducts() {
    let url;
    if (category) {
      url = `/api/allProduct/?category=${category}`;
    } else {
      url = "/api/allProduct";
    }
    const res: any = await fetch(url);
    let data = await res.json();
    if (search) {
      data = data.filter((v: any) =>
        v.name.toLowerCase().includes(search.toLowerCase())
      );
      if (!data.length) {
        data = { statusbar: 404, err: "not found" };
      }
    }
    console.log(data, "data");
    if (data.statusbar == 500) {
      setError("error");
    } else if (data.statusbar == 404) {
      setError("not found");
    } else {
      if (data.length) {
        setTempArr(data);
        setError("");
      }
    }
  }

  // ---------------------- useEffect for rendering product -------------------------

  useEffect(() => {
    if (tempArr.length) {
      const item = [...tempArr];
      const arr: any = [];
      for (let i = 0; i < item.length; i += show) {
        const subArr = item.slice(i, i + show);
        arr.push(subArr);
      }
      setProduct(arr);
      setIsLoading(false);
    }
  }, [tempArr]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [category, search]);

  return (
    <div className="main-shop mx-auto max-w-[1440px] font-[family-name:var(--mypoppins)]">
      <Navbar className=""></Navbar>
      <Banner location="Shop" heading="Shop"></Banner>

      <div className={`${search ? "inline-block" : "hidden"} my-10 ms-10 `}>
        <h2 className="text-2xl">Search for {search}</h2>
      </div>

      {/* ------------------- option ---------------------------- */}

      {error == "error" ? (
        <div className="flex justify-center gap-5 items-center max-h-[1000px] h-[100svh] w-full">
          <div className="bg-red-400 text-white text-7xl justify-center rounded-full items-center flex w-[100px] h-[100px]">
            !
          </div>
          <div className="text-2xl">Something went wrong</div>
        </div>
      ) : (
        <div className="">
          {error ? (
            <></>
          ) : isLoading ? (
            <SkeletonOption></SkeletonOption>
          ) : (
            <div className=" lg:h-[100px] bg-[#FAF4F4] w-full my-10">
              <div className="flex h-full lg:px-12 lg:items-center lg:justify-between lg:flex-row flex-col py-10 justify-center gap-5 items-center">
                <div className="flex flex-wrap gap-y-5 items-center justify-center">
                  <div className="flex justify-around w-[200px] me-5">
                    <div
                      onClick={() => {
                        filter ? setFilter(false) : setFilter(true);
                      }}
                      className="flex cursor-pointer gap-3 items-center text-xs md:text-sm lg:text-lg poppins-thin"
                    >
                      <Image src={FILTER} alt="filter"></Image>
                      Filter
                    </div>
                    <Image src={VIEW} alt="filter"></Image>
                    <Image src={SIZE} alt="filter"></Image>
                  </div>
                  <div className="border-l-[1.5px] border-black h-[33px] w-fit text-xs md:text-xs lg:text-lg poppins-thin flex items-center ps-6">
                    Showing 1&minus;{show} of {tempArr.length} results
                  </div>
                </div>

                <div className="flex gap-5 flex-wrap justify-center">
                  <div className="flex items-center gap-5 text-sm md:text-md lg:text-xl poppins-thin">
                    <div className="">Show</div>
                    <input
                      value={show}
                      type="number"
                      className="w-12 h-12 text-[#9f9f9f] text-sm md:text-md lg:text-xl ps-[15px]"
                    />
                  </div>
                  <div className="flex items-center gap-5 text-sm md:text-md lg:text-xl poppins-thin">
                    <div>Sort by</div>
                    <input
                      value={"Default"}
                      type="text"
                      className="w-40 h-12 text-[#9f9f9f] text-sm md:text-md lg:text-xl ps-[20px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* --------------------------- items ------------------------ */}

          <div className="items relative flex sm:flex-row flex-col">
            {error ? (
              <></>
            ) : (
              <div
                className={`bg-white ${
                  filter ? "inline-block" : "hidden"
                } w-full sm:w-[200px] md:w-[250px] h-full px-14`}
              >
                <div>
                  <div className="header">
                    <h2 className="text-lg">Category</h2>
                  </div>

                  <div className="items flex sm:flex-col items-start mt-5 gap-5">
                    <p
                      onClick={() => router.push("/Shop")}
                      className="text-center text-sm cursor-pointer"
                    >
                      All
                    </p>
                    <p
                      onClick={() => router.push(`/Shop?category=Sofa`)}
                      className="text-center text-sm cursor-pointer"
                    >
                      Sofa
                    </p>
                    <p
                      onClick={() => router.push(`/Shop?category=Chair`)}
                      className="text-center text-sm cursor-pointer"
                    >
                      Chair
                    </p>
                    <p
                      onClick={() => router.push(`/Shop?category=Table`)}
                      className="text-center text-sm cursor-pointer"
                    >
                      Table
                    </p>
                    <p
                      onClick={() => router.push(`/Shop?category=Bed`)}
                      className="text-center text-sm cursor-pointer"
                    >
                      Bed
                    </p>
                  </div>
                </div>

                <div className="my-10">
                  <div className="header">
                    <h2 className="text-lg">Price Range</h2>
                  </div>

                  <div className="items flex flex-col items-start mt-5 gap-5">
                    <PriceRangeSlider></PriceRangeSlider>
                  </div>
                </div>
              </div>
            )}

            <div className="flex px-5 justify-center flex-wrap min-h-[1352px] mx-auto gap-10">
              {error == "not found" ? (
                <div className="mt-20 w-full flex justify-center items-center">
                  <div className="flex flex-col items-center justify-center">
                    <NotFound size={120}></NotFound>
                    <h3 className="text-2xl">Not Found</h3>
                  </div>
                </div>
              ) : !isLoading ? (
                product[pagination]?.map((v: any) => (
                  <div
                    onClick={() => router.push(`/Product/${v._id}`)}
                    key={v._id}
                    className="card flex flex-col w-[250px] max-h-fit shadow-md pb-5 cursor-pointer"
                  >
                    <div className="h-[200px] self-center mb-6 flex items-center">
                      <Image
                        lazyBoundary=""
                        width={200}
                        height={200}
                        className="w-[350px] h-[200px] !object-cover"
                        src={v.imagePath}
                        alt=""
                      ></Image>
                    </div>
                    <div className="text-xl mb-4 px-3">
                      {v.name.length > 19
                        ? v.name.slice(0, 19) + "..."
                        : v.name}
                    </div>
                    <div className="text-sm inline-flex max-w-fit px-3">
                      Rs : {v.price}
                    </div>
                  </div>
                ))
              ) : (
                <div className=" flex flex-wrap justify-center gap-10">
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                </div>
              )}
            </div>
          </div>

          {isLoading ? (
            <></>
          ) : (
            <div className="flex justify-center my-20">
              <div className="flex w-[400px] justify-center gap-3">
                <button
                  disabled={pagination == 0 ? true : false}
                  onClick={() => {
                    let num = pagination;
                    setPagination(--num);
                  }}
                  className={`bg-[#FFF9E5] ${
                    pagination == 0
                      ? " cursor-not-allowed opacity-70"
                      : "inline-block cursor-pointer"
                  } rounded-lg px-4 py-4 sm:px-6`}
                >
                  Prev
                </button>
                {product.length ? (
                  product.map((v, i) => {
                    return (
                      <div
                        key={i}
                        onClick={() => setPagination(i)}
                        className={`${
                          pagination == i ? "bg-[#FBEBB5]" : "bg-[#FFF9E5]"
                        } rounded-lg px-4 py-4 sm:px-6 cursor-pointer`}
                      >
                        {i + 1}
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
                <button
                  disabled={pagination == product.length - 1 ? true : false}
                  onClick={() => {
                    let num = pagination;
                    setPagination(++num);
                  }}
                  className={`bg-[#FFF9E5] ${
                    pagination == product.length - 1
                      ? "opacity-70 cursor-not-allowed"
                      : "inline-block cursor-pointer"
                  } rounded-lg px-4 py-4 sm:px-6`}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <Services></Services>

      <Footer></Footer>
    </div>
  );
}
