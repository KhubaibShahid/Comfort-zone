import Image from "next/image";
import Navbar from "../../components/nav";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import Services from "../../components/service";

export default function WishList() {

    const items : any = [];

  return (
    <div className="main-wishlist mx-auto max-w-[1440px] font-[family-name:var(--mypoppins)]">
      <Navbar className=""></Navbar>
      <Banner location="Wishlist" heading="Wishlist"></Banner>

      <div>

      </div>

      {/* items */}

      <div className="items px-5">
        <div className="flex justify-evenly flex-wrap max-w-[1200px] mx-auto">
          {items.length !== 0 ? items.map((v: any, i : any) => (
            <div key={i} className="card flex flex-col w-[250px] ">
              <div className="h-[200px] self-center mb-6 flex items-center">
                <Image className="w-[200px]" src={v.img} alt=""></Image>
              </div>
              <div className="text-xs mb-4">{v.name}</div>
              <div className="text-xl inline-flex max-w-fit">{v.price}</div>
            </div>
          )) : <div className="h-[80svh] w-full flex justify-center text-[#e5e5e5] text-5xl items-center">! No Items yet</div>}
        </div>
      </div>

{
    items.length < 20 ? null :
      <div className="flex justify-center my-20">
        <div className="flex w-[400px] justify-around">
          <div className="bg-[#FBEBB5] rounded-lg py-4 px-6">1</div>
          <div className="bg-[#FFF9E5] rounded-lg py-4 px-6">2</div>
          <div className="bg-[#FFF9E5] rounded-lg py-4 px-6">3</div>
          <div className="bg-[#FFF9E5] rounded-lg py-4 px-6">Next</div>
        </div>
      </div>
}

      {/* /items */}

      <Services></Services>

      <Footer></Footer>
    </div>
  );
}
