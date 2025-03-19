import { SepareteContent, SectionTitle } from "./Utility"
import { FaPython, FaRProject, FaNodeJs, FaReact, FaHtml5, FaCss3 } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { motion } from "motion/react"

const Techs = [
    { icon: FaPython, color: "text-yellow-500" },
    { icon: FaRProject, color: "text-blue-500" },
    { icon: FaNodeJs, color: "text-green-500" },
    { icon: FaReact, color: "text-blue-500" },
    { icon: FaHtml5, color: "text-orange-500" },
    { icon: FaCss3, color: "text-blue-700" },
    { icon: BiLogoPostgresql, color: "text-blue-500" },
    { icon: DiMysql, color: "text-blue-400" },
]

function Technologies() {


    return (
        <SepareteContent>
            <section className="flex flex-col gap-10 my-10">
                <SectionTitle>Tecnologias</SectionTitle>
                <div className="flex flex-wrap text-5xl gap-5 justify-center">
                    {Techs.map((tech, index) => {
                        const delay = index * .1
                        return (
                            <motion.div
                                whileInView={{
                                    scale: [1,.75,1],
                                    borderRadius:[100,50,25],
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 4,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatType:"mirror",
                                    repeatDelay: 5,
                                }}
                                key={index} className="rounded-2xl p-4 border-1 border-neutral-700">
                                <tech.icon className={tech.color} />
                            </motion.div>
                        )
                    })}
                </div>

            </section>
        </SepareteContent>

    )
}

export default Technologies