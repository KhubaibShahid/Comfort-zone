import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import Banner from "../../components/banner";
import Services from "../../components/service";

export default function CheckoutApp() {
  return (
    <div className="main font-[family-name:var(--mypoppins)]">
      <Navbar className=""></Navbar>
      <Banner location="Checkout" heading="Checkout"></Banner>
      <div className="flex my-20 justify-evenly md:flex-row flex-col-reverse md:items-start items-center gap-y-10">

        {/* section 1 */}

        <div className="md:max-w-[400px] w-[80%] flex items-center flex-col gap-10 px-3 md:border-none border-b border-b-black md:pb-0 pb-10">
          <h2 className="text-3xl text-start w-full font-bold">Billing details</h2>
          <div className="flex gap-10 md:flex-row flex-col w-full">
          <div className="flex flex-col w-full md:w-[180px] gap-5">
            <label htmlFor="firstname">First Name</label>
            <input id="firstname" className="inp" type="text" />
          </div>
          <div className="flex flex-col w-full md:w-[180px] gap-5 ">
            <label htmlFor="lastname">Last Name</label>
            <input id="lastname" className="inp " type="text" />
          </div>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <label htmlFor="company">Company Name Optional</label>
            <input id="company" className="inp " type="text" />
          </div>
          <div className="flex flex-col gap-5 w-full">
            <label htmlFor="country">Country / Region</label>
            <input id="country" className="inp " type="text" />
          </div>
          <div className="flex flex-col gap-5 w-full">
            <label htmlFor="address">Street Address</label>
            <input id="address" className="inp " type="text" />
          </div>
          <div className="flex flex-col gap-5 w-full">
            <label htmlFor="city">Town / City</label>
            <input id="city" className="inp " type="text" />
          </div>
          <div className="flex flex-col gap-5 w-full">
            <label htmlFor="province">Province</label>
            <input id="province" className="inp " type="text" />
          </div>
          <div className="flex flex-col gap-5 w-full">
            <label htmlFor="zip">Zip code</label>
            <input id="zip" className="inp " type="text" />
          </div>
          <div className="flex flex-col gap-5 w-full">
            <label htmlFor="ph">Phone</label>
            <input id="ph" className="inp " type="number" />
          </div>
          <div className="flex flex-col gap-5 w-full">
            <label htmlFor="email">Email</label>
            <input id="email" className="inp " type="number" />
          </div>
          <div className="flex flex-col gap-5 w-full">
            <input id="ph" className="inp " placeholder="Additional information" type="number" />
          </div>
          
        </div>

        {/* section 2 */}

        <div className="md:max-w-[500px] w-[80%] flex flex-col px-3 py-10 h-full">
          <div className="flex w-full flex-col h-full gap-6 border-b border-b-[#9f9f9f] pb-10">
            <div className="heading flex w-full justify-between">
                <h3 className="text-2xl">Product</h3>
                <h3 className="text-2xl">Subtotal</h3>
            </div>
            <div className="heading flex w-full justify-between poppins-thin text-[16px]">
                <h3 className=""><span className="text-[#9f9f9f]">Asgaard sofa</span> x 1</h3>
                <h3 className="">Rs. 250,000.00</h3>
            </div>
            <div className="heading flex w-full justify-between poppins-thin text-[16px]">
                <h3 className="">Subtotal</h3>
                <h3 className="">Rs. 250,000.00</h3>
            </div>
            <div className="heading flex w-full justify-between poppins-thin text-[16px] items-center">
                <h3 className="">Total</h3>
                <h3 className="text-[22px] font-bold poppins-bold text-yellow-600">Rs. 250,000.00</h3>
            </div>

          </div>
          <div className="flex flex-col gap-5 w-full text-sm mb-10">
            <div>
                <h3 className="text-[15px] mb-5"><span className="text-[80px]">.</span> Direct Bank Transfer</h3>
                <div style={{wordSpacing: "5px", lineHeight: "20px"}} className="text-[#9f9f9f] text-[15px] poppins-thin">
              Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </div>
            </div>
            <div className="text-[#9f9f9f]">
                <div className="flex items-center gap-3 mb-3">
                <input className="w-[14px] h-[14px]" type="radio" name="pay" id="pay1" />
                <label htmlFor="pay1">Direct Bank Transfer</label>
                </div>
                <div className="flex items-center gap-3">
                <input className="w-[14px] h-[14px]" type="radio" name="pay" id="pay2" />
                <label htmlFor="pay2">Cash On Delivery</label>
                </div>
            </div>
            <div style={{wordSpacing: "5px", lineHeight: "20px"}} className="text-[15px] poppins-thin">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our <strong>privacy policy</strong>.
            </div>
          </div>

          <div className=" w-full text-center">
            <button className="btn2 poppins-thin text-xl w-[300px]">Place Order</button>
          </div>
        </div>
      </div>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}
