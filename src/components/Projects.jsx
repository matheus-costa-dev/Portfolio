import { SepareteContent, SectionTitle,slideXMotion } from "./Utility"
import { PROJECTS_CONTENT } from "../constant/index"
import { FaGithub } from "react-icons/fa"
import { LuExternalLink } from "react-icons/lu";
import {format} from "date-fns"
import {motion} from "motion/react"


function Projects() {
    return (
        <SepareteContent>
            <section className="my-10">
                <SectionTitle>Projetos</SectionTitle>
                <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10 my-10">
                    {PROJECTS_CONTENT.map((project, index) => {
                        return (
                            <div key={index} className="flex flex-col gap-2 w-full md:w-1/2 lg:w-1/4">
                                <motion.h3 
                                variants={slideXMotion(-100,.1)}
                                initial={"hidden"}
                                whileInView={"visible"}
                                className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">{project.name}</motion.h3>
                                <motion.p
                                variants={slideXMotion(100,.2)}
                                initial={"hidden"}
                                whileInView={"visible"}
                                >Criado: {format(new Date(project.created), "dd/MM/yyyy")} </motion.p>
                                <motion.p
                                variants={slideXMotion(-100,.3)}
                                initial={"hidden"}
                                whileInView={"visible"}
                                >Ultima atualização: {format(new Date(project.updated), "dd/MM/yyyy")} </motion.p>
                                <motion.span
                                variants={slideXMotion(100,.4)}
                                initial={"hidden"}
                                whileInView={"visible"}
                                >{project.description}</motion.span>
                                <motion.div 
                                variants={slideXMotion(-100,.5)}
                                initial={"hidden"}
                                whileInView={"visible"}
                                className="flex gap-4 text-2xl">
                                    <a href={project.url} target="_blank"><FaGithub /></a>
                                    <a href={project.homepage} target="_blank"><LuExternalLink /></a>
                                </motion.div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </SepareteContent>
    )
}

export default Projects