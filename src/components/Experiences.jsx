import { SepareteContent, SectionTitle, slideXMotion } from "./Utility"
import { EXPERIENCES_CONTENT } from "../constant/index"
import {motion} from "motion/react"


function Experiences() {
    return (
        <SepareteContent>
            <section className="my-10">
                <SectionTitle>Experiências</SectionTitle>
                <div className="flex flex-col gap-10 my-10">
                    {EXPERIENCES_CONTENT.map((exp, index) => {
                        return (
                            <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
                                <motion.div 
                                variants={slideXMotion(-100,.25)}
                                initial={"hidden"}
                                whileInView={"visible"}
                                className="w-full md:w-1/3 md:text-center">
                                    <span className="">{exp.year}</span>
                                </motion.div>
                                <motion.div 
                                variants={slideXMotion(100,.25)}
                                initial={"hidden"}
                                whileInView={"visible"}
                                className="w-full md:w-1/2 flex flex-col gap-2">
                                    <h3 className="text-2xl font-semibold tracking-wide">{exp.company}</h3>
                                    <h4 className="font-thin tracking-tight">{exp.role}</h4>
                                    <span className="font-light tracking-wide">{exp.description}</span>
                                </motion.div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </SepareteContent>
    )
}

export default Experiences