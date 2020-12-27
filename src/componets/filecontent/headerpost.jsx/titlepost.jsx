import { React } from 'react';
import s from "./posts.module.css"
const Titlepost = ()=>{
  return(
    <div className={s.main}>
      <div className={s.titleimg}>
      <img src="https://w-dog.ru/wallpapers/9/11/432054144807159/zakat-vecher-more-nebo-gorizont-solnce-voda-oblaka.jpg"></img>
      </div>
      <div className={s.titleword}>
        <p>Котики рулят</p>
      </div>
    </div>
  )
}

export default Titlepost;