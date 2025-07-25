"use client"

// lucide 
import { Github } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <div className="w-full py-3 bg-gray-50 border-b border-gray-200">
      <div className="w-[90%] max-w-[990px] mx-auto flex items-center justify-between">

      <div className="flex items-center gap-2">
        <Link href={"/"}>
          <img className="w-[60px] h-[60px] rounded-full object-top object-cover select-none" src="/assets/my-image.jpeg" alt="my-image" /> 
        </Link>
        <div>
          <p className="font-semibold ">Muhammadali</p>
          <p className="text-gray-600">Software Engineer</p>
        </div>
      </div>

      <ul className="flex items-center gap-5">
        <li className="hover:text-gray-500">
          <Link href={"/work"}>work</Link>
        </li>

        <li className="hover:text-gray-500">
          <Link href={"/work"}>about</Link>
        </li>

        <li className="hover:text-gray-500">
          <Link href={"/work"}>contact</Link>
        </li>

        <Link target="_blank" href={"https://github.com/Muhammadali-fr"} className="w-[40px] h-[40px] border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer flex items-center justify-center text-gray-700">
          <Github/>
        </Link>
      </ul>

    </div>
    </div>
  )
}