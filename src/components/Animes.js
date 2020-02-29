import React from 'react';
import AnimeCard from './AnimeCard';
import { connect } from 'react-redux';

const Animes = props => {
   const mapAnimes = () => {
      let animeArray = Object.values(props.animes);
      let animeCard = animeArray.map(anime => {
         return <AnimeCard key={anime.id} anime={anime} />;
      });
      return animeCard;
   };
   return (
      <div>
         <div className="container">{mapAnimes()}</div>
      </div>
   );
};

const mapStateToProps = state => {
   return {
      animes: state.animes,
   };
};

export default connect(mapStateToProps)(Animes);
