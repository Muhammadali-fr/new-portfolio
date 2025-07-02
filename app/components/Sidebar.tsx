// icons
import { Home, User2, Code, Mail } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="min-w-[260px] w-[260px] h-screen bg-[#1C2333] p-6 space-y-6 text-gray-200">
      
      {/* Profile */}
      <div className="flex items-center gap-3">
        <img
          className="w-14 h-14 rounded-full object-top object-cover"
          src="/assets/my-image.jpeg"
          alt="my-image"
        />
        <div>
          <p className="font-semibold text-lg">Muhammadali</p>
          <p className="text-sm text-gray-400">Software Engineer</p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#2F2944]"></div>

      {/* Menu */}
      <ul className="flex flex-col gap-2">
        <li>
          <a
            href="#home"
            className="flex items-center gap-3 px-5 py-3 bg-blue-700 border border-blue-700 rounded-xl hover:bg-blue-600 transition-all"
          >
            <Home size={20} />
            <span>Home</span>
          </a>
        </li>

        <li>
          <a
            href="#about"
            className="flex items-center gap-3 px-5 py-3 border border-gray-500 rounded-xl hover:bg-gray-900 transition-all"
          >
            <User2 size={20} />
            <span>About</span>
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className="flex items-center gap-3 px-5 py-3 border border-gray-500 rounded-xl hover:bg-gray-900 transition-all"
          >
            <Code size={20} />
            <span>Skills</span>
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="flex items-center gap-3 px-5 py-3 border border-gray-500 rounded-xl hover:bg-gray-900 transition-all"
          >
            <Mail size={20} />
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
