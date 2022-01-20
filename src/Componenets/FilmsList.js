import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Data from '../dataFilms.json';
import './film.css';
import Filmdetails from './Filmdetails';
import { useHistory } from "react-router-dom"
class FilmsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [],
            bestFilm: [props.history.location.state]
        }
        console.log(this.state.bestFilm);
        this.checkFilm = this.checkFilm.bind(this);
    }

    componentDidMount() {
        this.setState({ films: Data })
    }
    checkFilm(film) {
      this.props.history.push({
            pathname : '/filmdt',
            state : {
                film : film
            }
        })

    }
    render() {
        return (
            <div >
               
                <div className='films_favoris'>
                <h2 className='text-center'>MY BEST FILMS </h2>
                    <div className='films'>
                        {this.state.bestFilm.map(bstflm=>
                                <div className='film'>
                                    <img src={bstflm.movie.posterUrl} />
                                    <h4 >{bstflm.movie.title}(<span>{bstflm.movie.year}</span>)</h4>
                                </div>
                        )}
                    </div>
              
                </div>
                <div className='listFilms'>
                    <h2 className='text-center'>OUR FILMS </h2>
                    <div className='films'>
                        {this.state.films.map(film =>
                                <div className='film' onClick={() => this.checkFilm(film)}>
                                    <img src={film.posterUrl} />
                                    <h4 >{film.title}(<span>{film.year}</span>)</h4>
                                </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default FilmsList;