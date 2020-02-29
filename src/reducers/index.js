const reducer = (state, action) => {
   switch (action.type) {
      case 'INCREASE_VOTE':
         console.log(state);
         return {
            animes: {
               ...state.animes,
               [action.payload.id]: {
                  ...state.animes[action.payload.id],
                  votes: state.animes[action.payload.id].votes + 1,
               },
            },
         };
      case 'DECREASE_VOTE':
         return {
            animes: {
               ...state.animes,
               [action.payload.id]: {
                  ...state.animes[action.payload.id],
                  votes: state.animes[action.payload.id].votes - 1,
               },
            },
         };
      default:
         return state;
   }
};

export default reducer;
