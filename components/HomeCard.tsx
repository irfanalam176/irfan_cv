import HomeCardType from "@/helpers/ChildrenType"
import { ReactNode } from "react"


const HomeCard:React.FC<HomeCardType> = ({children}) => {
  return (
    <div className="homeCard">
    {children}
    </div>
  )
}

export default HomeCard
