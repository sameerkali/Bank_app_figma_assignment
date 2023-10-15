import Footer from "./Footer";
import Header from "./Header";
import ImageCarousel from "./ImageCorousel";

export default function MainPage() {
  return (
    <>
      <div className="w-96 h-96 relative ">
        <div className="w-96 h-36 left-0 top-0 absolute">
          <div className="w-44 left-[16px] top-[91px] absolute text-white text-3xl font-bold font-['Poppins']  leading-10 tracking-tight">
            <div>
                <p>Bank</p> <p> Cards</p>
            </div>
          </div>
          <img
            className="w-9 h-9 left-[319px] top-[94px] absolute rounded-full"
            src="../../public/page01/profile.png"
          />
        </div>
        {/* Header */}
        <Header />
        <div className="left-[20px] top-[170px] absolute text-slate-400 text-base font-bold font-['Poppins'] leading-relaxed tracking-tight">
          Balance
        </div>
        <div className="left-[20px] top-[200px] absolute text-white text-2xl font-bold font-['Poppins'] leading-relaxed tracking-tight">
          $2,748.00
        </div>

        {/* Image corousel */}
        <ImageCarousel/>
        
        {/* footer */}
        <Footer/>
      </div>
    </>
  );
}


