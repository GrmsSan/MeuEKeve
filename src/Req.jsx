import { api } from './api/api';
import style from './Req.module.css'
import {useState, useEffect} from 'react';
import { Card } from './components/card';



export default function Req(){
    const[data, setData] = useState([])
    const [page, setPage] = useState ("")
    const [searchName, setSearchName] = useState ("")

    const [erro, setErro] = useState(false)


    useEffect(() => {
        api.get(`/character/?page=${page}&name=${searchName}`).then((response)=> {
                setData(response.data.results)
        }).catch((error) => {
            if(error.response.status === 404){
                setErro(true)
            }
            console.error(error)

        })
    }, [page,searchName])



    return(
        <>
        
        <section className={style.wrapPage}>
            <h1> Rick and morty Api</h1>

            <input style={{padding: "10px", marginRight: "10px"}}type="text"placeholder='Digite um a pagina (1/42)' value={page} onChange={(e) => setPage(e.target.value)}/>
            <input type="text" placeholder='Digite um nome' value={searchName} onChange={(e) => setSearchName(e.target.value)}/>


            {erro && <p>Pagina nao encontrada</p>}


            <div className={style.wraspCard}>
            {data.map((item,index) => {
                return(

                    <div key={(index)}>
                        <Card name={item.name} image={item.image}/>
                        <img src={item.image} alt={item.name}/>
                    </div>
                )
            })}
            </div>
            </section>
        
        
        
        </>
    )

}