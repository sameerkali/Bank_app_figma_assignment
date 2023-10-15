export default function Header() {
  return (
    <>
      <div className="w-96 h-11 left-0 top-0 sticky  z-20">
        <div className="w-6 h-3 left-[336.33px] top-[17.33px] absolute">
          <div className="w-5 h-3 left-0 top-0 absolute opacity-30 rounded-sm border border-white" />
          <div className="w-4 h-2 left-[2px] top-[2px] absolute bg-white rounded-sm" />
        </div>
        <img
          className="w-4 h-2.5 left-[316px] top-[17.33px] absolute"
          src="../../public/page01/Wifi.png"
        />
        <img
          className="w-4 h-2.5 left-[294px] top-[17.67px] absolute"
          src="../../public/page01/Cellular Connection.png"
        />
        <div className="w-14 h-5 left-[21px] top-[7px] absolute">
          <div className="w-14 left-0 top-[7px] absolute text-center text-white text-base font-black font-['Poppins']">
            9:41
          </div>
        </div>
      </div>
    </>
  );
}
