import Footer from "./Footer";
import Header from "./Header";

const dataOfCards = [
  {
    name: "Mobile",
    data1: "The debt is",
    data2: "$34.00",
    image: "/catalogue/call.png"
  },
  {
    name: "Internet and TV",
    data1: "The debt is",
    data2: "$21.00",
    image: "/catalogue/wifi.png"
  },
  {
    name: "Traffic fines",
    data1: "The debt is",
    data2: "$1221.00",
    image: "/catalogue/car.png"
  },
  {
    name: "Housing and services",
    data1: "The debt is",
    data2: "$0.00",
    image: "/catalogue/home.png"
  },
  {
    name: "Utility payment",
    data1: "The debt is",
    data2: "$442.00",
    image: "/catalogue/electricity.png"
  },
  
];

export default function Catalague() {
  return (
    <>
      <Header className="sticky top-0" />
      <Upperpart />
      <div className="flex flex-col">
        {dataOfCards.map((x) => (
          <CardSection key={x.data2} data={x} />
        ))}
      </div>
      <Footer className="sticky bottom-0" />
    </>
  );
}

const CardSection = ({ data }) => {
  const { name, data1, data2, image } = data;
  return (
    <section className="m-4 top-[20px] flex-shrink-0 relative">
      <div className="flex flex-col space-x-14 items-start justify-start gap-1 overflow-y-auto scrollbar-hide whitespace-nowrap">
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
            <span className="text-slate-400 text-sm font-bold font-['Poppins'] leading-tight tracking-tight">
              {" "}
              {data2}
            </span>
            <div className="w-96 h-px left-[54px] top-[62px] absolute border border-slate-800"></div>
          </div>
        </div>
        <div className="w-16 h-9 rounded-lg border border-indigo-400 border-opacity-40 absolute bottom-0 left-56 ">
          {/* Modified className */}
          <div className="text-indigo-400 p-1 ml-3 text-base font-medium font-['Poppins'] leading-relaxed">
            Pay
          </div>
        </div>
      </div>
    </section>
  );
};



const Upperpart = () => {
  return (
    <div className="w-96 h-36 left-0 top-0 ">
      <div className="w-44 left-[16px] top-[91px] absolute text-white text-5xl font-bold font-['Poppins'] leading-10 tracking-tight">
        Catalague
      </div>
      <img
        className="w-9 h-9 left-[319px] top-[94px] absolute rounded-full"
        src="/page01/profile.png"
      />
    </div>
  );
};
