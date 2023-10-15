import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>

      <div  className=" h-28 rounded-tl-3xl rounded-tr-3xl  bg-slate-700 w-96  bottom-0  z-10 top-[780px] absolute">
        <div className="w-80 rounded-3xl bg-slate-700 h-14 left-[19px] top-[13px] absolute ">
          <Link to="/">
            <div className="w-14 h-14  left-[279px] top-0 absolute">
              <img className="bg-slate-700" src="../../public/page01/Menu.svg" />
            </div>
          </Link>
          <Link to="/history">
            <div className="w-14  h-14 left-[186px] top-0 absolute">
              <img className="bg-slate-700" src="../../public/page01/History.svg" />
            </div>
          </Link>
          <Link to="/catalague">
            <div className=" w-14 h-14 left-[93px] top-0 absolute">
              <img className="bg-slate-700"  src="../../public/page01/Scan.svg" />
            </div>
          </Link>
          <Link to="/">
            <div className="w-14 h-14 left-0 top-0 absolute">
              <img className="bg-slate-700" src="../../public/page01/Home.svg" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
