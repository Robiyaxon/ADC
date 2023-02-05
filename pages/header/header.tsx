/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import style from "../../styles/header/Header.module.css"
const Header = () => {

  return (
    <div className={style.Header}>
      <div className={style.Link}>
        <Image
          src={`/images/logo.jpg`}
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <div className={style.Link_name}>
          <Link href={"/"}>Home</Link>
          <Link href={"/courses"}>Courses</Link>
          <Link href={"/webinar"}>Webinar</Link>
          <Link href={"/pricing"}>Pricing</Link>
        </div>

      </div>
      <select>
        <option value="" className={style.opt1}>UZB</option>
        <option value="" className={style.opt2}>ENG</option>
        <option value="" className={style.opt3}>RUS</option>
      </select>
    </div>
  )
}

export default Header