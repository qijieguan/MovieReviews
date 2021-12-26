
const Movie = (movie) => {

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

    const {title, poster_path, vote_average, overview} = movie.movie;

    return (
        <div className="movie">
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