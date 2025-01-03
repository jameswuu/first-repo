export default function MovieCard({ movie }) {
    return(
      <div className="movie" key={movie.imbdID}>
        <div>
          <p>{movie.Year}</p>
        </div>
        <div>
          <img 
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} // Error checking 
            alt={movie.Title} 
            />
        </div>

        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
      </div>
    )
}