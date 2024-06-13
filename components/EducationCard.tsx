import { ReactNode } from "react"

interface EducationCardProps{
  children:ReactNode;
  className?:String
}
const EducationCard:React.FC<EducationCardProps> = ({children,className}) => {
  return (
    <div className={`educationCard ${className}`}>
    {children}
</div>
  )
}

export default EducationCard