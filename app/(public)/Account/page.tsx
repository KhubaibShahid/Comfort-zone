"use client"

import Navbar from "../../components/nav";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import Services from "../../components/service";

export default function Account() {

    

  return (
    <div className="main-wishlist mx-auto max-w-[1440px] font-[family-name:var(--mypoppins)]">
      <Navbar className=""></Navbar>
      <Banner location="Account" heading="Account"></Banner>

      <div>

      </div>

      <Services></Services>

      <Footer></Footer>
    </div>
  );
}
