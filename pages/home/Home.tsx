import Image from 'next/image'
import React from 'react'
import style from "../../styles/home/Home.module.css"
const HomePage = () => {
  return (
    <div className={style.Home}>
      <div className={style.Img}>
        <Image
          src={`/images/girl.png`}
          alt="Picture of the author"
          width={500}
          height={500}
          className={style.girl}
        />
      </div>
      <div className={style.title}>
        <h1>Grow Your Skills To Advance Your Career Path.</h1>
        <p>We have something big for you who want to level up!</p>
        <input type="text" placeholder='What do you want to learn...' />
        <h6>Suggestions</h6>
        <div className={style.List}>
        <h2>Rus tili</h2>
        <h2>Engliz tili</h2>
        <h2>Treyding</h2>
        <h2>Koreys tili</h2>
        <h2>Matematika</h2>
        <h2>IELTS</h2>
        </div>
      </div>
    </div>
  )
}

export default HomePage