export default function Header() {
  return (
    <div className="w-[70%] mx-auto flex items-center justify-between py-5">
      <div className="flex items-center gap-2">
        <img className="w-[70px] h-[70px] rounded-full object-top object-cover" src="/assets/my-image.jpeg" alt="my-image" />
        <div>
          <p className="font-semibold ">Muhammadali</p>
          <p className="text-gray-600">Software Engineer</p>
        </div>
      </div>

      <ul className="flex gap-5">
        <li className="">
          <a href="">Work</a>
        </li>

        <li>
          <a href="">About</a>
        </li>

        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  )
}