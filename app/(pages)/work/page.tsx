
// Link
import Link from "next/link";

// data 
import { myWork } from "../../../data/data";

// lucide 
import { Link2, Github } from 'lucide-react'

export default function Home() {

    return (
        <div className="w-full">

            {/* top  */}
            <div className="w-[90%] max-w-[990px] mx-auto flex items-center justify-between">
                <div className="max-w-[350px] flex flex-col gap-3">
                    <h1 className="text-7xl font-bold">Work.</h1>
                    <p className="text-xl text-gray-500">Here's a collection of projects I've build recently.</p>
                    <p className="text-[#414141]">I'm always experimenting with new tools and improving my code quality. I care about both design and performance.</p>
                </div>
                <div>
                    <img src="/assets/logo.png" alt="right-image" />
                </div>
            </div>

            <div className="border-y border-gray-300 py-20  bg-gray-100">
                {/* bottom works  */}
                <div className="w-[90%] max-w-[990px] mx-auto grid grid-cols-3 gap-5 my-5">
                    {
                        myWork.map((item, id) => (
                            <div key={id} className="w-full h-[335px] bg-white p-2 rounded-lg border border-gray-200">
                                <img className="w-full h-[200px] object-center object-cover rounded-lg border border-gray-300" src={item.image} alt={item.name} />

                                <div className="flex flex-col gap-1 py-2 h-[80px]">
                                    <p className="text-gray-700">{item.name}</p>
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                </div>

                                <div className="flex items-center justify-between ">
                                    {
                                        item.netlifyLink &&
                                        <Link href={`${item.netlifyLink}`} target="_blank">
                                            <button className="text-gray-700 py-1 w-[120px] rounded-lg bg-white border border-gray-300 flex items-center justify-center gap-1 cursor-pointer hover:bg-gray-200"> <Link2 size={23} className="text-gray-700" /> link</button>
                                        </Link>
                                    }
                                    {
                                        item.gitHubLink &&
                                        <Link target="_blank" href={`${item.gitHubLink}`}>
                                            <button className="text-gray-700 py-1 w-[120px] rounded-lg bg-white border border-gray-300 flex items-center justify-center gap-1 cursor-pointer hover:bg-gray-200"> <Github size={20} className="text-gray-700" /> code</button>
                                        </Link>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}