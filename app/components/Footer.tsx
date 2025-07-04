
// link 
import Link from "next/link"

export default function Footer() {
    return (
        <div className="max-w-[990px] w-[90%] mx-auto flex items-center justify-between text-gray-500 py-5">
            <p>@2025 Jamolov Muhammadali</p>

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
            </ul>
        </div>
    )
}