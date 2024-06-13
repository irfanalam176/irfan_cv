import Image from "next/image"
import EducationCard from "./EducationCard"
import { SoftSkills,WorkSkills } from "@/helpers/Skills"
const Resume = () => {
    return (
        <div>
            <h1 className="mainHeading">Resume
                <span></span>
            </h1>

            <div className="grid md:grid-cols-2 gap-5">
                <div >
                    <h1 className="flex items-center gap-3 smHeading my-4">
                        <Image src={"/assets/img/education.svg"} alt="" width={25} height={18} />
                        Education
                    </h1>
                    <EducationCard>
                        <span>2021-2025</span>
                        <h1>Computer Science </h1>
                        <h2>University of Swat</h2>
                    </EducationCard>
                    <EducationCard className="lightCard">
                        <span>2022-2024</span>
                        <h1>CCNA</h1>
                        <h2>Afzal Khan LaLa PGC</h2>
                    </EducationCard>
                    <h1 className="smHeading my-4">
                    Work Skills
                    </h1>

                    <div className="skillsContainer">
                        {
                            WorkSkills.map((item,index)=>(
                                <label className="skills" key={index}>{item}</label>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h1 className="flex items-center gap-3 smHeading my-4">
                        <Image src={"/assets/img/experience.svg"} alt="" width={25} height={18} />
                        Experience
                    </h1>
                    <EducationCard className="lightCard">
                        <span>2021-2024</span>
                        <h1>Web Developer</h1>
                        <h2>Wazar Solutions</h2>
                    </EducationCard>
                    <EducationCard>
                        <span>2021-</span>
                        <h1>Web Developer/Mobile App Developer </h1>
                        <h2>Fiverr</h2>
                    </EducationCard>

                    <h1 className="smHeading my-4">
                    Soft Skills
                    </h1>

                    <div className="skillsContainer">
                        {
                            SoftSkills.map((item,index)=>(
                                <label className="skills" key={index}>{item}</label>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume