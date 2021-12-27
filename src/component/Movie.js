import { useSelector, useDispatch } from 'react-redux';
import { setSave, setDelete } from './actions/index.js';
import { useEffect } from 'react';


const Movie = (movie) => {

    const savedMovies = useSelector(state => state.saveList)
    const dispatch = useDispatch();


    useEffect(() => {
        //Persist saved status when loading movies from API
        if (!savedMovies.length) {return}
        savedMovies.forEach(element => {
            if (element.id === movie.movie.id) {
                let x = document.getElementById(element.id).firstChild;
                x.style.backgroundColor = 'limegreen';
                x.innerHTML = "Saved";
            }
        });
    }, [savedMovies, movie.movie.id])

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
        if (x.innerHTML === "Save") {
            dispatch(setSave(movie.movie));
            x.style.backgroundColor = "limegreen";
            x.innerHTML = "Saved";
        }
        else {
            dispatch(setDelete(movie.movie));
            x.style.backgroundColor = 'rgb(211, 0, 0)';
            x.innerHTML = "Save";
        }
    }

    const {title, poster_path, vote_average, overview, id} = movie.movie;

    return (
        <div className="movie" id={id}>
            <div onClick={handleSave} className='save-btn'>Save</div>
            
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