import DidYouKnow from "@/components/DidYouKnow";
import DownloadLinks from "@/components/DownloadLinks";
import FAQs from "@/components/FAQs";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Founders from "@/components/Founders";
import HowItWorks from "@/components/HowItWorks";
import Invests from "@/components/Invests";
import ReasonToInvest from "@/components/ReasonToInvest";
import Reviews from "@/components/Reviews";
import TopSection from "@/components/TopSection";
import WhoAreWe from "@/components/WhoAreWe";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className='mx-auto'>
      <TopSection />
      <WhoAreWe />
      <ReasonToInvest />
      <DidYouKnow />
      <Invests />
      <HowItWorks />
      <Reviews />
      <Founders />
      <Featured />

      <div className="text-center mt-16 bg-[#242552] md:px-16 xl:px-32 px-6 py-12">
        <h6 className="text-white text-3xl mt-0">Ready to Join the Top <span className="text-[#8686F5]">1% Investor&apos;s</span> Club?</h6>
        <p className="text-white/60 -mt-10 max-w-[739px] mx-auto">With Bizdateup you get a Strong Community of Top 1% Investors who live & Breathe Angel Investing! To top it up Signing up takes hardly 5 mins of your time. So, Join the Community Now!</p>
        <div>
          <Button type="primary" className="px-12 mt-4 sm:mx-8 sm:mt-0 w-[100%] sm:w-min bg-[#8686F5]">Login</Button>
          <Button type="primary" className="px-12 mt-4 sm:mt-0 w-[100%] sm:w-min bg-[#fff] text-[#8686F5]">Register</Button>
        </div>
      </div>

      <DownloadLinks />
      <FAQs />


      <div className="bg-[#272855] md:px-16 xl:px-52 px-6 mt-32 flex flex-col sm:flex-row items-center p-4 justify-center">
        <div className="flex">
          <Image
            src='/notice.png'
            height={50}
            width={70}
            alt="Notice"
          />
          <p className="text-white font-bold">
            Refer a start up and get ₹500
          </p>
        </div>
        <Button type="primary" className="my-4 sm:my-0 sm:mx-8 w-[100%] sm:w-min bg-[#8686F5]">Know More</Button>
      </div>

      <Footer />

    </main >
  );
}
