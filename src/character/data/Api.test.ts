import axios from 'axios';
import {
  getCharactersFromApi,
  searchCharactersFromApi,
} from './Api';

// Tests
describe('getCharacters', () => {
  beforeEach(() => {
    axios.get = jest.fn();
  })

  describe('getCharacters', () => {
    it('httpClient is called as expected', () => {
      getCharactersFromApi();
      expect(axios.get).toHaveBeenCalledWith('https://swapi.co/api/people/');
    });
  });

  describe('searchCharacters', () => {
    const searchString = 'Luke';

    it('httpClient is called as expected', () => {
      searchCharactersFromApi(searchString);
      expect(axios.get).toHaveBeenCalledWith(`https://swapi.co/api/people/?search=${searchString}`);
    });
  });
});
