import PropTypes from "prop-types";

export const Movie_cnt = ({
    movie,
    image,
    genre,
    duration,
    year,
    synopsis,
     }) =>{
    return(

        <>
        <div className="main">
            <div className="one">
                <div className="one_left">
                <img src={image} alt="" />
                </div>
                <div className="one_right">
                <h1>{movie}</h1>
                 <h3>{year}</h3>
                 <p>{duration}</p>
                 <p><i>{genre}</i></p>

                </div>
            </div>

            <div className="two">
               <p>{synopsis}</p>
            </div>

        </div>


         
        
        
        
        
        </>
    )

}

Movie_cnt.propTypes = {
    movie: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
  };


