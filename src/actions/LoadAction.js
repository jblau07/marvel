import axios from 'axios';
export const LOAD_HERO = 'LOAD_HERO';

export const loadHero = (hero, redirectCallback) => {
  let thisHero = encodeURIComponent(hero.trim()) 

  return dispatch => {
    return axios.post('/api/hero', {
      name: thisHero
    })
    .then(data => {
      let heroData;
      if (data.data.data.results.length === 0) {
        heroData = null;
      } else {
        heroData = {
          name: data.data.data.results[0].name,
          description: data.data.data.results[0].description,
          image: `${data.data.data.results[0].thumbnail.path}/portrait_medium.jpg`
        }
      }

      dispatch({
        type: LOAD_HERO,
        hero: heroData
      })
      redirectCallback()
    })
    .catch(err => {
      console.log({err: err.message})
    })
  }
}