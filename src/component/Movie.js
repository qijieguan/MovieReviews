import { useSelector, useDispatch } from 'react-redux';
import { setSave } from './actions/index.js';

import { useState, useEffect } from 'react';

const Movie = (movie) => {

    const saveMovies = useSelector(state => state.saveList);
    const dispatch = useDispatch();

    const [color, setColor] = useState({color: "rgb(211, 0, 0)"});

    useEffect(() => {//console.log(saveMovies);
    }, [saveMovies]);

    const getColor = (vote) => {
        if (vote < 6.4) {
            return 'red';
        }
        else if (vote < 8) {
            return 'orange';
        }
        else {
            return 'limegreen';
        }
    }

    const handleSave = () => {
        let x = document.getElementById(id).firstChild;
        if (x.innerHTML === "Saved") {return}
        dispatch(setSave(movie.movie));
        setColor({color: 'limegreen'});
        x.innerHTML = "Saved";
    }

    const {title, poster_path, vote_average, overview, id} = movie.movie;

    return (
        <div className="movie" id={id}>
            <div onClick={handleSave} className='save-btn' style={{backgroundColor: color.color}}>Save</div>
            <img src={process.env.REACT_APP_IMG_URL + poster_path} alt="" className="movie-img"></img>
            <div className="movie-info">
                <span className="movie-title">{title}</span>
                <div className="movie-vote" style={{color: getColor(vote_average)}}>{vote_average}</div>
                <div className="movie-overview">
                    <h1 style={{fontSize: '18px'}}>Overview</h1>
                    {overview}
                </div>
            </div>
        </div>
    );
}

export default Movie;