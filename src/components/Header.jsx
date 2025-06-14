
// assets 
import MyPic from "../assets/my-pic.png"
import Tg from "../assets/tg.svg"

// react-router-dom 
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='w-[1024px] py-5 flex items-center justify-between'>
      {/* my image  */}
      <img className="w-[75px] h-[75px] rounded-full border border-gray-700" src={MyPic} alt="my pic" />

      <div className="flex gap-1">
        {/* links  */}
        <ul className="flex items-center justify-center gap-1 bg-gray-700 p-1 rounded-2xl">
          <Link to={"/"} className="select-none py-3 cursor-pointer px-6 bg-[#0070ff] hover:bg-[#2b7fff] rounded-2xl flex items-center justify-center text-white font-bold">Home</Link>
          <Link to={"/skills"} className="select-none py-3 cursor-pointer px-6 hover:bg-gray-600 rounded-2xl text-gray-white flex items-center justify-center font-bold">Skills</Link>
          <Link to={"/projects"} className="select-none py-3 cursor-pointer px-6 hover:bg-gray-600 rounded-2xl text-white flex items-center justify-center font-bold">Projects</Link>
          <Link to={"/contact"} className="select-none py-3 cursor-pointer px-6 hover:bg-gray-600 rounded-2xl text-white flex items-center justify-center font-bold">Contact</Link>
        </ul>

        {/* telegram */}
        <Link to={"https://t.me/jamolovmuhammadali"} className="w-[60px] select-none cursor-pointer bg-gray-700 hover:bg-gray-600 rounded-2xl text-white flex items-center justify-center font-bold">
          <img className="w-[40px] h-[40px]" src={Tg} alt="tg" />
        </Link>
      </div>

    </div>
  )
}

export default Header;