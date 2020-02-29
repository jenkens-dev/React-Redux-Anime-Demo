import React from 'react';
import { increaseVote, decreaseVote } from '../actions';
import { connect } from 'react-redux';

const BowieCard = ({ anime, increaseVote, decreaseVote }) => {
   return (
      <div className="card">
         <h2>Name: {anime.name}</h2>
         <p>Votes: {anime.votes}</p>
         <img src={anime.image} alt={anime.name}></img>
         <br />
         <button
            onClick={() => {
               increaseVote(anime.id);
            }}
         >
            UpVote
         </button>
         <button
            onClick={() => {
               decreaseVote(anime.id);
            }}
         >
            DownVote
         </button>
      </div>
   );
};

const mapDispatchToProps = dispatch => {
   return {
      increaseVote: id => dispatch(increaseVote(id)),
      decreaseVote: id => dispatch(decreaseVote(id)),
   };
};

export default connect(null, mapDispatchToProps)(BowieCard);
