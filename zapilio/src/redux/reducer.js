import { combineReducers } from 'redux';
import { LOGIN, STORE_USER_ANSWERS } from './actions';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        name: action.payload.name,
        email: action.payload.email
      };
    default:
      return state;
  }
};

const answersReducer = (state = [], action) => {
  switch (action.type) {
    case STORE_USER_ANSWERS:
      return action.payload.userAnswers;
    default:
      return state;
  }
};

const scoreReducer = (state = 0, action) => {
  switch (action.type) {
    case STORE_USER_ANSWERS:
      return action.payload.score;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  userAnswers: answersReducer,
  score: scoreReducer
});

export default rootReducer;
