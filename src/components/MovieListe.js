
import React,{useState} from 'react'
import MovieCard from './MovieCard'
import MovieFilter from './MovieFilter'


function MovieListe({films}) {
const [text, settext] = useState('')
const [rate, setrate] = useState('')
const filterText=(text)=>{
    settext(text)

}
const filterRate=(rate)=>{
    setrate(rate)
}
    return (
        <div className='container'>
         <MovieFilter filterText={filterText} filterRate={filterRate}/>
            {films.filter(el=>el.title.toLowerCase().includes(text.toLowerCase())&& el.rate>=rate).map(el=><MovieCard film={el}/>)   }

        </div>
    )
}

export default MovieListe
