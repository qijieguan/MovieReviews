import { useSelector } from 'react-redux';
import { useState, useEffect} from 'react';
import Movie from './Movie.js';
import axios from 'axios';

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
        fetch(url, {headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }}
        //res.json() <=> res.text()
        ).then(res => res.text()).then((data) => {
        //axios.get(url).then((response) => {
            console.log(data.results);
            //console.log(response.data.results);
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

    return(
        <div className="movie-container">
            {data ?
                data.map(movie => <Movie key={movie.id} movie={movie}/>)
                : ""
            }
        </div>
    );
}