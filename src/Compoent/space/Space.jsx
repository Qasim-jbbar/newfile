import style from "@/Compoent/space/space.module.css"
const Space =({children}) =>{

    return(
        <div className={style.Space}>
            {children}
          <div className={style.space1}>

          </div>
        </div>
    
        )
};
export default Space;