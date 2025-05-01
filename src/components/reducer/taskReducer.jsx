export const initialState = {
    tasks: [
        {
            name : "Checkin",
            description : "LogIn to Payroll",
            isCompleted: false,
            
        },
        {
            name : "Progress",
            description : "Report every task done",
            isCompleted: false,
        },
        {
            name : "Ckeckout",
            description : "Save hours and logout",
            isCompleted: true,
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
    
        default:
          return state;
      }
}

