
// assets 
import MyPic from "../assets/my-pic.png"

const Header = () => {
  return (
    <div className='w-[1024px] py-5 flex items-center justify-between'>
      {/* my image  */}
      <img className="w-[75px] h-[75px] rounded-full border border-gray-700" src={MyPic} alt="my pic" />

      {/* links  */}
      <ul className="flex items-center justify-center gap-1 bg-gray-700 p-1 rounded-2xl">
          <li className="py-3 cursor-pointer px-6 bg-[#0070ff] hover:bg-[#2b7fff] rounded-2xl flex items-center justify-center text-white font-bold">Home</li>
          <li className="py-3 cursor-pointer px-6 hover:bg-gray-600 rounded-2xl text-gray-white flex items-center justify-center font-bold">Skills</li>
          <li className="py-3 cursor-pointer px-6 hover:bg-gray-600 rounded-2xl text-white flex items-center justify-center font-bold">Projects</li>
          <li className="py-3 cursor-pointer px-6 hover:bg-gray-600 rounded-2xl text-white flex items-center justify-center font-bold">Contact</li>
      </ul>  
    </div>
  )
}

export default Header;