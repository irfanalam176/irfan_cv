import HomeCardType from "@/helpers/ChildrenType"
import Link from "next/link"
import { ReactNode } from "react"
interface ProjectType{
  children:ReactNode,
  url?:String
}
const ProjectCard:React.FC<ProjectType> = ({children,url}) => {
  return (
    <Link href={`${url}`} target="_blank" className="portfolioCard">{children}</Link>
  )
}

export default ProjectCard