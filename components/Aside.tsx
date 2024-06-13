import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Aside() {
    return (
        <aside className='sideBar'>
            <Image src={"/assets/img/cvImage.png"} alt='' width={200} height={200} className='profile' />
            <h1 className="name">Irfan Alam</h1>
            <span>FullStack Developer</span>
            <div className="socialMedia">
                <Link href={"https://www.fiverr.com/imweb_dev?source=gig_cards&referrer_gig_slug=develop-landing-page-using-tailwind-css-and-bootstrap&ref_ctx_id=e3230ad9f08a4a9ebaf996b225a0e44e&imp_id=d65e0024-c583-4e2f-bd8e-9297f886a3a6"} target='_blank'><Image src={"/assets/img/fiverr.svg"} alt='' width={30} height={30} /></Link>
                <Link href={"https://www.linkedin.com/in/irfan-alam-96189922a/"} target='_blank'><Image src={"/assets/img/linkdIn.svg"} alt='' width={16} height={15} /></Link>
                <Link href={"https://x.com/imirfan176"} target='_blank'><Image src={"/assets/img/twitter.svg"} alt='' width={17} height={14} /></Link>
                <Link href={"https://github.com/irfanalam176"} target='_blank'><Image src={"/assets/img/github.svg"} alt='' width={17} height={16} /></Link>
            </div>

            <div className="personalInfo">
                <div className="info">
                    <Image src={"/assets/img/phone.svg"} alt='' width={12} height={20} />
                    <div>
                        <span>Phone</span>
                        <h1>+923102875176</h1>
                    </div>
                </div>
                <div className="info">
                    <Image src={"/assets/img/email.svg"} alt='' width={19} height={20} />
                    <div>
                        <span>Email</span>
                        <h1>irfancs176@gmail.com</h1>
                    </div>
                </div>
                <div className="info">
                    <Image src={"/assets/img/location.svg"} alt='' width={14} height={20} />
                    <div>
                        <span>Location</span>
                        <h1>Mingora, Pakistan</h1>
                    </div>
                </div>

                <Link href={"/assets/download/cv.pdf"} target='_blank' className='mainBtn outlined resumeBtn'>
                    Preview Resume
                </Link>
                <Link href={"/assets/download/cv.pdf"} target='_blank' download={"IrfanAlamCv.pdf"} className='mainBtn'>
                    <Image src={"/assets/img/whiteDownload.svg"} alt='' width={16} height={16} />
                    Download  Resume
                </Link>
            </div>
        </aside>
    )
}

export default Aside