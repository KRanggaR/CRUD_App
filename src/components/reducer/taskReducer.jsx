export const initialState = {
    tasks: [
        {
            taskName : "Checkin",
            taskDescription : "LogIn to Payroll",
            taskCompleted: false,
            
        },
        {
            taskName : "Progress",
            taskDescription : "Report every task done",
            taskCompleted: false,
        },
        {
            taskName : "Ckeckout",
            taskDescription : "Save hours and logout",
            taskCompleted: false,
        }
    ],
    appIsBuffering: true,
    error: '',
  };

export const taskReducer = (state,action) => {
    switch (action.type) {
        case 'DIFFICUILTY_ASSIGNED':
          return {
            ...state,
            length: action.payload,
            bestScore: 0,
            gameIsBuffering: true,
          };
    
        case 'UPDATE_POKEMONS':
          return {
            ...state,
            pokemons: action.payload,
          };
    
        case 'DATA_FETCHED_SUCCESS':
          return {
            ...state,
            pokemons: action.payload,
            currentScore: 0,
            gameIsBuffering: false,
            error: '',
    
          };
    
        case 'DATA_FETCHED_FAILED':
          return {
            ...state,
            gameIsBuffering: false,
            error: action.payload,
            gameEnded: false,
    
          };
    
        case 'SELECT_POKEMON': {
          const selected = state.pokemons.find(pokemon => pokemon.id === action.payload);
          if (state.selectedPokemonsID.includes(selected.id)) {
            return {
              ...state,
              gameEnded: true,
            }
          }
    
          else {
            const newCurrentScore = state.currentScore + 1;
            const newBestScore = newCurrentScore > state.bestScore ? newCurrentScore : state.bestScore;
            const gameEnded = newCurrentScore === state.pokemons.length;
            return {
              ...state,
              selectedPokemonsID: [...state.selectedPokemonsID, selected.id],
              currentScore: newCurrentScore,
              bestScore: newBestScore,
              gameEnded,
            };
          }
        }
    
        case 'RESET_GAME':
          return {
            ...state,
            currentScore: 0,
            gameEnded: false,
            selectedPokemonsID: [],
            gameIsBuffering: true,
          };
        default:
          return state;
      }
}

