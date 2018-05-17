import axios from 'axios';

export const loadHero = (hero) => {
  return dispatch => {
    return axios.post('/api/hero', {
      name: hero
    })
    .then(data => {
      dispatch({
        type: 'LOAD_HERO',
        hero: data
      })
    })
    .catch(err => {
      console.log({err: err.message})
    })
  }

}