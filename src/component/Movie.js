const Movie = (movie) => {
    const {title, poster_path, vote_average, overview} = movie.movie;

    return (
        <div className="movie">
            <img src={process.env.REACT_APP_IMG_URL + poster_path} alt="" className="movie-img"></img>
            <div className="movie-info">
                <span className="movie-title">{title}</span>
                <div className="movie-vote">{vote_average}</div>
                <div className="movie-overview">
                    <h3 style={{fontWeight: 'bold'}}>Overview</h3>
                    {overview}
                </div>
            </div>
        </div>
    );
}

export default Movie;