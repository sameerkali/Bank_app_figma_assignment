import { Link } from "react-router-dom";
import Header from "./components/Header";

const dataOfCards = [
  {
    name: "Mobile",
    data1: "Maria",
    data2: "+ $143.00",
    image: "../public/ccPage/arrowred.png"
  },
  {
    name: "Internet and TV",
    data1: "Online",
    data2: "- $467.00",
    image: "../public/ccPage/music.png"
  },
  {
    name: "Traffic fines",
    data1: "Service",
    data2: "- $469.00",
    image: "../public/ccPage/taxi.png"
  }
];

export default function CcPage2() {
  return (
    <>
      <Header />
      <div className="w-5 h-5 ml-5 mt-5 relative">
      <Link to="/">

        <img src="../public/ccPage/arrow.png" />
      </Link>
      </div>
      <div className="w-44 left-[16px] top-[91px] absolute text-white text-3xl font-bold font-['Poppins']  leading-10 tracking-tight">
        <div className="mt-4">
          <p>Salary</p> <p> Cards</p>
        </div>
      </div>
      <img className="mt-32 ml-5 w-80" src="../public/ccPage/card02.png" />
      <div className="flex flex-row space-x-40 ml-5 mt-9">
        <div>
          <div className="text-slate-400 text-base font-bold font-['Poppins'] leading-relaxed tracking-tight">
            Balance
          </div>
          <div className="text-white text-2xl font-bold font-['Poppins'] leading-relaxed tracking-tight">
            $2,748.00
          </div>
        </div>
        <div className="flex flex-row gap-3">
        <Link to="/history">

          <div className="w-14 h-14 rounded-lg border border-white border-opacity-20">
            <img  src="../public/page01/History.svg"/>
          </div>
        </Link>
          <div className="w-14 h-14 rounded-lg border border-white border-opacity-20">
          <img className="p-4" src="../public/page01/share.svg"/>

          </div>
        </div>
      </div>
      {dataOfCards.map((x) => (
        <CardSection key={x.data2} data={x} />
      ))}
    </>
  );
}

const CardSection = ({ data }) => {
  const { name, data1, data2, image } = data;
  return (
    <section className="m-4  mt-10 flex-shrink-0 relative">
      <div className="flex flex-row  space-x-14 items-start justify-start gap-1 overflow-y-auto scrollbar-hide whitespace-nowrap">
        <div className="text-white flex space-x-4">
          <div>
            <img src={image} />
          </div>
          <div>
            <div className="text-white text-base font-medium font-['Poppins'] leading-relaxed tracking-tight">
              {name}
            </div>

            <span className="text-slate-400 text-sm font-medium font-['Poppins'] leading-tight tracking-tight">
              {data1}
            </span>

            <div className="w-96 h-px left-[54px] top-[62px] absolute border border-slate-800"></div>
          </div>
        </div>
        <div className="left-[256px] top-[10px] absolute text-right text-white text-base font-bold font-['Poppins'] leading-relaxed tracking-tight  ">
          {data2}
        </div>
      </div>
    </section>
  );
};
