import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import Banner from "../../components/banner";
import Services from "../../components/service";
import Image from "next/image";
import ASGARDSOFA from "../../assests/asgard-sofa.png";
import DELETE from "../../assests/trash.svg";
import { RiDeleteBin7Fill as Delete } from "react-icons/ri";

export default function CartApp() {
  return (
    <div className="cart-main font-[family-name:var(--mypoppins)]">
      <Navbar className=""></Navbar>
      <Banner location="Cart" heading="Cart"></Banner>
      <div className="cart-section flex px-3 xl:px-20 py-20 justify-between xl:flex-row flex-col gap-10">

<div className="md:hidden">
  <h3 className="text-3xl text-center mb-10">Cart</h3>
  <div className="flex justify-center gap-10">
    <div className="flex gap-10 poppins-thin shadow-lg flex-col max-w-[400px]">
      <div className="bg-[#FFF9E5] w-full">
      <Image alt="sofa" className=" object-cover" src={ASGARDSOFA}></Image>
      </div>
      <div className="flex flex-col py-3 px-5 gap-3">
        <h3 className="text-xl">Asgard Sofa</h3>
        <div className="flex w-full justify-between my-3">
        <h3 className="text-[#9f9f9f]">Rs. 250,000.00 <span className="text-black">x 1</span></h3>
        <h3>Rs. 250,000.00</h3>
        </div>
        <button className="btn2 self-center w-[200px] flex justify-center bg-red-400 !border-none my-3"><Delete size={20} className="text-white" /></button>
      </div>
    </div>
  </div>
</div>

        <div className="xl:w-[68%] hidden md:block">
          <div className="flex justify-between bg-[#FFF9E5] h-[45px] items-center mb-10">
            <div className="w-[120px]"></div>
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Subtotal</h3>
            <div className=""></div>
          </div>
          <div className="flex relative w-full justify-between items-center text-sm poppins-thin mb-10">
            <div className="bg-[#FBEBB5] w-[80px] h-[80px] md:w-[106px] md:h-[100px] flex items-center rounded-lg p-1">
              <Image
                className="object-cover bg-center"
                src={ASGARDSOFA}
                alt="item1"
              ></Image>
            </div>
            <h3>Asgard Sofa</h3>
            <h3 className="text-[#9f9f9f]">Rs. 250,000.00</h3>
            <h3 className="border border-black w-7 h-7 flex justify-center items-center rounded-md">
              1
            </h3>
            <h3 className="border">Rs. 250,000.00</h3>
            <div className="flex">
              <Image alt="trash" src={DELETE}></Image>
            </div>
          </div>
        </div>
        <div className="xl:w-[350px]">
          <div className="bg-[#FFF9E5] w-full py-5 flex flex-col gap-y-10">
            <h2 className="text-center text-3xl">Cart Totals</h2>
            <div className="flex justify-between px-16">
              <div className="text-sm">Subtotal</div>
              <div className="text-sm text-[#9f9f9f]">Rs. 250,000.00</div>
            </div>
            <div className="flex justify-between px-16">
              <div className="text-sm">Total</div>
              <div className="text-sm text-yellow-600">Rs. 250,000.00</div>
            </div>
            <div className="flex justify-center px-16 pb-14">
              <button className="btn2 w-[200px]">Check Out</button>
            </div>
          </div>
        </div>
      </div>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}
