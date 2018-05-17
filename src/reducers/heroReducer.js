import { LOAD_HERO } from '../actions/SearchAction';

const initialState = {
  hero: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HERO:
      return {...state, hero: action.hero};
    case CLEAR_SELECTED: {
      return {...state, selected: []}
    }
    default:
      return state;
  }
};