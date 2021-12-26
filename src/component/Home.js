import { useState, useEffect} from 'react';
import uuid from 'react-uuid';
import Movie from './Movie.js';

const url = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_API_URL + process.env.REACT_APP_API_KEY;

export default function Home() {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch(url).then(res => res.json().then(data => {
            //console.log(data.results);
            setData(data.results);
        }));
    },[]);
    return(
        <div className="movie-container">
            {data ?
                data.map(movie => <Movie key={uuid()} movie={movie}/>)
                : ""
            }
        </div>
    );
}