import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"
import { CiLight, CiDark  } from "react-icons/ci";
import { NAVBAR_CONTENT } from "../constant/index"
import { useLight } from "../context/useLight"


const navLinks = [
  {icon: FaLinkedin, link:NAVBAR_CONTENT.links.linkedin},
  {icon: FaGithub, link:NAVBAR_CONTENT.links.github},
  {icon: FaInstagram, link:NAVBAR_CONTENT.links.instagram},
  {icon: FaTwitter, link:NAVBAR_CONTENT.links.twitter},
]


function Navbar() {

  const { lightMode, setLightMode } = useLight()

  return (
    <div className="flex flex-wrap justify-between text-2xl border-b border-neutral-800">
      <h2 className="font-thin tracking-tight">MC</h2>
      <div className="flex items-center">
      <button 
       onClick={()=>setLightMode(!lightMode)}> { lightMode ? <CiLight /> : <CiDark  />} 
       </button>
       <span className="text-sm">Modo {lightMode ? "noturno" : "diurno"} </span>
      </div>
      <div className="flex gap-4 items-center">
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