import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import Banner from "../../components/banner";
import Services from "../../components/service";
import Image from "next/image";
import LOCATION from "../../assests/location.svg";
import TIME from "../../assests/time.svg";
import PHONE from "../../assests/phone.svg";

export default function ContactApp() {
  return (
    <div className="contact-main font-[family-name:var(--mypoppins)] max-w-[1440px] mx-auto">
      <Navbar className=""></Navbar>
      <Banner heading="Contact" location="Contact"></Banner>
      <div className="conatiner">
        <div className="header h-[300px] w-full flex  gap-3 flex-col justify-center items-center">
          <h2 className="text-3xl text-center font-bold">
            Get In Touch With Us
          </h2>
          <div className="text-center poppins-thin text-[#9f9f9f] text-sm max-w-[570px]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </div>
        </div>

        <div className="flex md:flex-row flex-col">
          <div className="mx-auto flex flex-col items-center w-1/2 justify-center">
            <div className="flex gap-5 mb-10">
              <div className="">
                <Image src={LOCATION} alt="location"></Image>
              </div>
              <div>
                <h3 className="text-2xl">Address</h3>
                <div className="poppins-thin w-[200px] text-[15px]">
                  236 5th SE Avenue, New York NY10000, United States
                </div>
              </div>
            </div>
            <div className="flex gap-5 mb-10">
              <div className="">
                <Image src={PHONE} alt="phone"></Image>
              </div>
              <div>
                <h3 className="text-2xl">Phone</h3>
                <div className="poppins-thin w-[200px] text-[15px]">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </div>
              </div>
            </div>
            <div className="flex gap-5 mb-10">
              <div className="">
                <Image src={TIME} alt="time"></Image>
              </div>
              <div>
                <h3 className="text-2xl">Working Time</h3>
                <div className="poppins-thin w-[200px] text-[15px]">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 poppins-thin">
            <div className="md:block flex flex-wrap justify-around gap-x-5">
              <div className="flex flex-col w-[300px] md:max-w-[450px] gap-5 mb-5">
                <label htmlFor="yourname">Your Name</label>
                <input id="yourname" placeholder="Abc" className="inp w-full" type="text" />
              </div>
              <div className="flex flex-col w-[300px] md:max-w-[450px] gap-5 mb-5">
                <label htmlFor="yourname">Email Address</label>
                <input id="email" className="inp w-full" placeholder="Abc@def.com" type="text" />
              </div>
              <div className="flex flex-col w-[300px] md:max-w-[450px] gap-5 mb-5">
                <label htmlFor="subject">Subject</label>
                <input id="subject" placeholder="This is an optional" className="inp w-full" type="text" />
              </div>
              <div className="flex flex-col w-[300px] md:max-w-[450px] gap-5 mb-10">
                <label htmlFor="yourname">Message</label>
                <textarea cols={15} id="yourname" className="inp w-full resize-none" placeholder="Hi! i’d like to ask about" ></textarea>
              </div>
            </div>
              <div className="text-center md:text-start gap-5 mb-5">
                <button className="btn2 w-[200px]">Submit</button>
              </div>
          </div>
        </div>
      </div>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}
