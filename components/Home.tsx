import HomeCard from "./HomeCard"
import Image from "next/image"
function Home() {
    return (
        <div>
            <h1 className="mainHeading">ABOUT ME
                <span></span>
            </h1>
            <p className="mainText">
                Hello there! I&apos;m thrilled to welcome you to my portfolio. I am a passionate and versatile
                full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
                My journey in the world of web development has been nothing short of exhilarating, and
                I constantly strive to enhance my skills and embrace emerging trends in the industry.
            </p>
            <h1 className="subHeading pt-4">
                What I do!
            </h1>
            <div className="grid md:grid-cols-2 gap-3">
                <HomeCard>
                    <header>
                        <Image src={"/assets/img/development.svg"} alt="" width={23} height={18} />
                        Web Development
                    </header>
                    <p>
                        As a developer, I find myself most
                        captivated by the power and flexibility of
                        NEXT.js. I&apos;m always eager to dive into new
                        projects that leverage NEXT.js and
                        discover innovative ways to create fast,
                        scalable, and user-friendly applications.
                    </p>
                </HomeCard>
                <HomeCard>
                    <header>
                        <Image src={"/assets/img/app-development.svg"} alt="" width={21} height={21} />
                        App Development
                    </header>
                    <p>
                        With a focus on user-centric design and
                        cutting-edge technologies, I thrive on
                        building intuitive and efficient apps
                        that make a positive impact on people&apos;s
                        lives. Let&apos;s turn ideas into reality and
                        shape the future together.
                    </p>
                </HomeCard>
                <HomeCard>
                    <header>
                        <Image src={"/assets/img/ui-ux.svg"} alt="" width={21} height={21} />
                        UI/UX Designing
                    </header>
                    <p>
                        Crafting visually appealing and intuitive user
                        interfaces that offer a delightful user
                        experience is something I&apos;m truly fanatic
                        about.
                    </p>
                </HomeCard>
                <HomeCard>
                    <header>
                        <Image src={"/assets/img/mentorship.svg"} alt="" width={21} height={21} />
                        Mentorship
                    </header>
                    <p>
                        I have also found great joy in sharing my
                        knowledge with others. Being a technical
                        mentor allows me to give back to the
                        community that has supported me
                        throughout my career.
                    </p>
                </HomeCard>
            </div>
        </div>
    )
}

export default Home