import axios from 'axios';

export class RestDataSource {
  getCharacters(): Promise<any> {
    return axios.get('https://swapi.co/api/people/');
  }
}
