import { LOAD_HERO } from '../actions/LoadAction';

const initialState = {
  hero: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HERO:
      return {...state, hero: action.hero};
    default:
      return state;
  }
};