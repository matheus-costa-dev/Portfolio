import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"
import { NAVBAR_CONTENT } from "../constant/index"


const navLinks = [
  {icon: FaLinkedin, link:NAVBAR_CONTENT.links.linkedin},
  {icon: FaGithub, link:NAVBAR_CONTENT.links.github},
  {icon: FaInstagram, link:NAVBAR_CONTENT.links.instagram},
  {icon: FaTwitter, link:NAVBAR_CONTENT.links.twitter},
]


function Navbar() {
  return (
    <div className="flex justify-between text-2xl border-b border-neutral-800">
      <h2 className="font-thin tracking-tight">MC</h2>
      <div className="flex gap-4">
       {navLinks.map((item, index)=> {
        return (
          <a key={index} href={item.link}><item.icon/></a>

        )
      }) }
      </div>
    </div>
  )
}

export default Navbar