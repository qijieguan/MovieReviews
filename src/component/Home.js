import { useSelector } from 'react-redux';
import { useState, useEffect} from 'react';
import Movie from './Movie.js';
import Tag from './Tag.js';

const apiURL = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_API_URL + process.env.REACT_APP_API_KEY;
const searchURL = process.env.REACT_APP_BASE_URL + '/search/movie?' + process.env.REACT_APP_API_KEY;


export default function Home() {

    const form = document.getElementById('header-search');
    const search = document.getElementById('search-input');
    const home = document.getElementById("home");
    const save = document.getElementById("save");

    const savedMovies = useSelector(state => state.saveList);

    const [URL, setURL] = useState(apiURL);
    const [data, setData] = useState([]);
    const [prevData, setPrev] = useState([]);

    useEffect(() => {getMovies(URL);},[URL]);

    const getMovies = (url) => {
        fetch(url, 
        //res.json() <=> res.text()
        ).then(res => res.json()).then((data) => {
            if (!prevData.length) {
                setPrev(data.results);
            }
            setData(data.results);
        });
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

    if (home) {
        home.addEventListener('click', (e) => {
            e.preventDefault();
            setData(prevData);
        });    
    }

    if (save) {
        save.addEventListener('click', (e) => {
            e.preventDefault();
            setData(savedMovies);
        });    
    }

    const toggleTag = (id) => {
        document.getElementById(id).style.backgroundColor = "blue";
        let results = [];
        data.forEach(movie => { 
            movie.genre_ids.forEach(genre_id => {
                if (genre_id === id) {
                    results = [...results, movie];
                }
            });
        });
        setData(results);
    }

    const resetTag = () => {
        let result = document.querySelectorAll(".tag");
        result.forEach(tag => {
            tag.style.backgroundColor = "orange";
        });
        setData(prevData);
    }

    return(
        <div>
            <Tag toggleTag={toggleTag} resetTag={resetTag}/>
            <div className="movie-container">
                {data.length > 0 ?
                    data.map(movie => <Movie key={movie.id} movie={movie}/>)
                    : 
                    <h1 className='no-results'>No results found</h1>
                }
            </div>
        </div>
    );
}