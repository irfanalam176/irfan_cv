import Link from "next/link"
import ProjectCard from "./ProjectCard"
import Image from "next/image"

const Portfolio = () => {
  return (
    <div>
        <h1 className="mainHeading">Portfolio <span></span></h1>

        <div className="projects">
            <ProjectCard url={"/projects/shop/index.html"}>
               <img src="/assets/img/shop.jpg" alt="" />
               <span>Web Development</span>
               <h1>NFT Shop</h1>
            </ProjectCard>
            <ProjectCard  url={"/projects/step-form/index.html"}>
               <img src="/assets/img/step-form.jpg" alt="" />
               <span>Web Development</span>
               <h1>Multi Step Form</h1>
            </ProjectCard>
            <ProjectCard url={"https://irfanalam176.github.io/f-cars/"}>
               <img src="/assets/img/cars.jpg" alt="" />
               <span>Web Development</span>
               <h1>First API Integration Practice</h1>
            </ProjectCard>
            <ProjectCard url={"/projects/whale/index.html"}>
               <img src="/assets/img/whale.jpg" alt="" />
               <span>Web Development</span>
               <h1>Rosy Whale Website</h1>
            </ProjectCard>
            <ProjectCard  url={"/projects/casino/index.html"}>
               <img src="/assets/img/casino.jpg" alt="" />
               <span>Web Development</span>
               <h1>Casino Landing Page</h1>
            </ProjectCard>
            <ProjectCard url={"/projects/nft-checker/index.html"}>
               <img src="/assets/img/nft-checker.jpg" alt="" />
               <span>Web Development</span>
               <h1>NFT Checker</h1>
            </ProjectCard>
            <ProjectCard url={"/projects/runear/index.html"}>
               <img src="/assets/img/runear.jpg" alt="" />
               <span>Web Development</span>
               <h1>NFT Racing</h1>
            </ProjectCard>
            <ProjectCard  url={"/projects/alamah/index.html"}>
               <img src="/assets/img/alamah.jpg" alt="" />
               <span>Web Development</span>
               <h1>Arabic Trading Website</h1>
            </ProjectCard>
            <ProjectCard url={"/projects/minibus/index.html"}>
               <img src="/assets/img/minibus.jpg" alt="" />
               <span>Web Development</span>
               <h1>Transport Website</h1>
            </ProjectCard>
            <ProjectCard url={"/projects/color-web/uniform.html"}>
               <img src="/assets/img/color-web.jpg" alt="" />
               <span>Web Development</span>
               <h1>Chinese Dashboard</h1>
            </ProjectCard>
        </div>
    </div>
  )
}

export default Portfolio