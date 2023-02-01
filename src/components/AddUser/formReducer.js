export const INITIAL_STATE = {
  username: '',
  isUsernameValid: false,
  age: '',
  isAgeValid: false,
};

export const formReducer = (state, payload) => {
  switch (payload.type) {
    case 'CHANGE_USERNAME':
      return {
        ...state,
        username: payload.value,
      };
    case 'CHANGE_AGE':
      return {
        ...state,
        age: payload.value,
      };
    case 'BLUR_USERNAME':
      return { ...state, isUsernameValid: state.username.length > 0 };
    case 'BLUR_AGE':
      return { ...state, isAgeValid: +state.age > 0 && +state.age <= 130 };
    case 'RESET_FORM':
      return INITIAL_STATE;
    default:
      return state;
  }
};
