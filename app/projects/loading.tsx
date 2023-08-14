import Image from "next/image"
import LoadingAnimation from "../../public/img/loading.gif"
import "../../styles/page.css"

export default function Loading() {  
  return (
    <Image src={LoadingAnimation} className="loading_animation" alt="Loading" />
  )
}