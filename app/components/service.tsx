export default function Services() {
    return (
        <div className="md:h-[300px] w-full flex justify-evenly items-center gap-y-10 gap-x-5 bg-[#FAF4F4] md:flex-row flex-col py-10 md:px-5 font-[family-name:var(--mypoppins)]">
        <div className="md:text-start text-center">
          <h2 className="text-[28px]">Free Delivery</h2>
          <div className="text-lg text-[#9f9f9f] poppins-thin max-w-[350px]">For all oders over $50, consectetur adipim scing elit.</div>
        </div>
        <div className="md:text-start text-center">
          <h2 className="text-[28px]">90 Days Return</h2>
          <div className="text-lg text-[#9f9f9f] poppins-thin max-w-[350px]">For all oders over $50, consectetur adipim scing elit.</div>
        </div>
        <div className="md:text-start text-center">
          <h2 className="text-[28px] min-w-[240px]">Secure Payment</h2>
          <div className="text-lg text-[#9f9f9f] poppins-thin max-w-[350px]">For all oders over $50, consectetur adipim scing elit.</div>
        </div>
      </div>
    )
}