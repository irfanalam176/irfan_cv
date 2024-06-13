import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ReactNode } from "react"
interface AlertType{
  title:String;
  message:String;
  className:String
}
const AlertMessage:React.FC<AlertType> = ({title,message,className}) => {
  return (
    <Alert className={`alert ${className}`}>
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
       {message}
      </AlertDescription>
    </Alert>
  )
}

export default AlertMessage