import axios from 'axios';

const baseUrl = 'https://swapi.co/api';

export const getCharactersFromApi = (): Promise<any> => {
  return axios.get(`${baseUrl}/people/`);
}

export const searchCharactersFromApi = (term: String): Promise<any> => {
  return axios.get(`${baseUrl}/people/?search=${term}`);
}
