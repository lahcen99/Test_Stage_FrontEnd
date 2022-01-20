import React, { Component } from 'react';
import './filmdtl.css';

class Filmdetails extends Component {
    constructor(props){
        super(props)
        this.state={
            movie:[props.history.location.state]
        }
        this.AjouterAuFavoris= this.AjouterAuFavoris.bind(this);
    }
    AjouterAuFavoris(movie) {
        this.props.history.push({
              pathname : '/',
              state : {
                  movie : movie
              }
          })
  
      }

    render() {
        
        return (
            <div>
             {this.state.movie.map( movie =>
             <div className='movie'>
                  <h1 key="true">{movie.film.title} <span>({movie.film.year})</span></h1>
                  <div className='body'>
                      <img src={movie.film.posterUrl} />
                      <div>
                          <div className='information'>
                              <h3 >director :</h3>
                              <h4>{movie.film.director}</h4>
                          </div>
                          <div className='information'>
                              <h3>runtime :</h3>
                              <h4>{movie.film.runtime} minute</h4>
                          </div>
                          <div className='information'> 
                              <h3>actors :</h3>
                              <h4>{movie.film.actors}</h4>
                          </div>
     
                      </div>
                  </div>
                  <button type="button" class="btn btn-primary" style={{marginTop:"20px"}} onClick={()=> this.AjouterAuFavoris(movie.film)}>ajouter au favoris</button>
             </div>
            
             )}   
             </div>
             
        );
    }
}

export default Filmdetails;