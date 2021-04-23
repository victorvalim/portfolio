const INITIAL_STATE = {
  time: null,
  actualMoney: 'USD',
  chartData: [],
  bpi: {
    USD: 0,
    GBP: 0,
    EUR: 0,

  },
  isLoading: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DEFAULT':
      return {
        ...state, default: 'criou o reducer',
      };
    default:
      return state;
  }
};

export default userReducer;
