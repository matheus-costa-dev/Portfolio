import { SepareteContent, SectionTitle, slideXMotion } from "./Utility"
import { ABOUT_ME } from "../constant"
import imgSecundary from "../assets/profile.jpeg"
import { motion } from "motion/react"

function About() {
    return (

        <SepareteContent>
            <section className="flex flex-col gap-20 my-10">
                <SectionTitle>Sobre {" "} <span className="text-neutral-500">mim</span> </SectionTitle>
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="w-full lg:w-1/3">
                        <motion.img
                            variants={slideXMotion(-100,.25)}
                            initial={"hidden"}
                            whileInView={"visible"}
                            className="rounded-4xl mx-auto grayscale-25" src={imgSecundary} alt="foto secundaria" />
                    </div>
                    <motion.div
                        variants={slideXMotion(100,.5)}
                        initial={"hidden"}
                        whileInView={"visible"}
                        className="w-full lg:w-1/2">
                        <span className="font-light tracking-wide whitespace-pre-line ">{ABOUT_ME}</span>
                    </motion.div>
                </div>
            </section>
        </SepareteContent>
    )
}

export default About