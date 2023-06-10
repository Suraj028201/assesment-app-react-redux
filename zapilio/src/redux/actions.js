// action types
export const LOGIN = 'LOGIN';
export const STORE_USER_ANSWERS = 'STORE_USER_ANSWERS';

// action creators
export const login = (name, email) => ({
  type: LOGIN,
  payload: {
    name,
    email
  }
});

export const storeUserAnswers = (userAnswers, score) => ({
  type: STORE_USER_ANSWERS,
  payload: {
    userAnswers,
    score
  }
});
