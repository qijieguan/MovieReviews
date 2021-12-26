import { useState, useEffect} from 'react';
import uuid from 'react-uuid';
import Movie from './Movie.js';

const apiURL = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_API_URL + process.env.REACT_APP_API_KEY;
const searchURL = process.env.REACT_APP_BASE_URL + '/search/movie?' + process.env.REACT_APP_API_KEY;

export default function Home() {

    const form = document.getElementById('header-search');
    const search = document.getElementById('search-input');

    const [URL, setURL] = useState(apiURL);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        getMovies(URL);
    },[URL]);

    const getMovies = (url) => {
        fetch(url).then(res => res.json().then(data => {
            //console.log(data.results);
            setData(data.results);
        }));
    }
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            const searchTerm = search.value;
            if (searchTerm) {
                setURL(searchURL+'&query='+searchTerm);
            }
            else {
                setURL(apiURL);
            }
        });    
    }

    return(
        <div className="movie-container">
            {data ?
                data.map(movie => <Movie key={uuid()} movie={movie}/>)
                : ""
            }
        </div>
    );
}