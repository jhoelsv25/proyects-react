import { IconMap, IconQuestion, IconUser } from '../icons/Icons'

export const Footer = () => {
  return (
    <div className=" w-full flex justify-between  h-10 border-b">
      <div className="flex items-center justify-center">
        <h3 className="text-gray-500 font-ligth text-sm">Jhoel silvestre</h3>
      </div>
      <ul className="flex items-center gap-5 text-gray-500 font-normal text-sm">
        <li className="flex gap-3 "><a href="">USD</a></li>
        <li className=" flex gap-3 after:content-['|'] "><a href="">ES</a></li>
        <li className="flex items-center gap-1 text-gray-500 max-lg:hidden"><IconMap /> <a href="">  Contact</a></li>
        <li className=" flex items-center gap-1 text-gray-500 max-lg:hidden"><IconQuestion /><a href="">Need Help</a></li>
        <li className=" flex items-center gap-1 text-gray-500"><IconUser /><a href="">Sign in</a>/ <a href=""> Register</a></li>
      </ul>
    </div>
  )
}
