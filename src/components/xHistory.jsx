// import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function History() {
  return (
    <>
      <Header />
      {/* section upper */}
      <div className="mt-24 ">
        <div className="w-96 h-36 left-0 top-0  z-0">
          <div className="w-44 left-[16px] top-[91px] absolute text-white text-3xl font-bold font-['Poppins'] leading-10 tracking-tight">
            <div>
              <p>History</p>
            </div>
          </div>
          <img
            className="w-9 h-9 left-[319px] top-[94px] absolute rounded-full"
            src="../../public/page01/profile.png"
          />
        </div>
      </div>
      {/* section lower */}
      
      <Footer />
    </>
  );
}
