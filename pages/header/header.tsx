import Image from 'next/image'
import style from "../../styles/header/Header.module.css"
const Header = () => {
    
  return (
    <div className={style.Header}>
         <Image
      src={`/images/logo.jpg`}
      alt="Picture of the author"
      width={500}
      height={500}
    />
    </div>
  )
}

export default Header