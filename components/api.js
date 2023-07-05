import axios from 'axios';

export function fetchImages(breed) {
  return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
    .then(response => response.data.message)
    .catch(error => {
      console.error(error);
      throw error;
    });
}

export function fetchAllBreeds() {
    return axios.get('https://dog.ceo/api/breeds/list/all');
}
export function fetchImagesSlides(breed) {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
      .then(response => {
        return response.data.message;
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
}
export function fetchSubBreeds(breed) {
  return axios.get(`https://dog.ceo/api/breed/${breed}/list`);
}