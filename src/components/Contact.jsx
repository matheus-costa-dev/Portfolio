import { SepareteContent, SectionTitle, slideXMotion, slideYMotion } from "./Utility"
import { CONTACT_CONTENT } from "../constant/index"
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react"

function Contact() {
    return (
        <SepareteContent>
            <section className="flex flex-col items-center my-10 gap-10">
                <SectionTitle>Entre em contato</SectionTitle>
                <div className="flex flex-col text-2xl font-thin gap-4">
                    <div className="flex gap-5 justify-center text-3xl">
                        <motion.a
                            variants={slideXMotion(-100, .1)}
                            initial={"hidden"}
                            whileInView={"visible"}
                            href={`mailto:${CONTACT_CONTENT.email}?subject=${encodeURIComponent("Contato")}&body=${"Olá matheus, vi seu site e gostaria de saber mais a respeito de você."}`}><MdEmail /></motion.a>
                        <motion.a
                            variants={slideXMotion(100, .1)}
                            initial={"hidden"}
                            whileInView={"visible"}
                            href={`https://wa.me/+55${CONTACT_CONTENT.Phone}?text=${encodeURIComponent("Olá matheus, vi seu site e gostaria de saber mais a respeito de você.")}`}><FaWhatsapp /></motion.a>
                    </div>
                    <motion.div 
                      variants={slideYMotion(50, .2)}
                      initial={"hidden"}
                      whileInView={"visible"}
                    className="flex flex-col items-center">
                        <span    
                            className="break-words whitespace-break-spaces text-center md:text-left">{CONTACT_CONTENT.Address}</span>
                        <span
                            className="break-words whitespace-break-spaces text-center md:text-left">{CONTACT_CONTENT.city}</span>
                        <span
                            className="break-words whitespace-break-spaces text-center md:text-left">{CONTACT_CONTENT.state}</span>
                        <span
                         
                            className="break-words whitespace-break-spaces text-center md:text-left">{CONTACT_CONTENT.country}</span>

                    </motion.div>

                </div>

            </section>
        </SepareteContent>
    )
}

export default Contact