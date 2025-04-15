import style from './card.module.css'

export const Card = ({name, image}) => {
        return(
            <>
            <h5 className={style.title}>{name}</h5>
            <img src={image} alt={name} className={style.imgstyle}/> 
            
            </>
        )

} 