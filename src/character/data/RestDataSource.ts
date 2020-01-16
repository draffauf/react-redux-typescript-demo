import axios from 'axios';

export class RestDataSource {
  readonly baseUrl = 'https://swapi.co/api';

  getCharacter = (characterId:Number): Promise<any> => {
    return axios.get(`${this.baseUrl}/people/${characterId}`);
  }

  getCharacters = (): Promise<any> => {
    return axios.get(`${this.baseUrl}/people/`);
  }

  searchCharacters = (term: String): Promise<any> => {
    return axios.get(`${this.baseUrl}/people/?search=${term}`);
  }
}
