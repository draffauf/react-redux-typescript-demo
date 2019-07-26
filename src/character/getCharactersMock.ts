import { ICharacter } from './characterReducer';

const getCharactersResponse: ICharacter[] = [{
  'name': 'Luke Skywalker',
  'height': '172',
  'mass': '77',
  'hair_color': 'blond',
  'skin_color': 'fair',
  'eye_color': 'blue',
  'birth_year': '19BBY',
  'gender': 'male',
  'homeworld': 'https://swapi.co/api/planets/1/',
  'films': [
    'https://swapi.co/api/films/2/',
  ],
  'species': [
    'https://swapi.co/api/species/1/'
  ],
  'vehicles': [
    'https://swapi.co/api/vehicles/14/',
  ],
  'starships': [
    'https://swapi.co/api/starships/12/',
  ],
  'created': '2014-12-09T13:50:51.644000Z',
  'edited': '2014-12-20T21:17:56.891000Z',
  'url': 'https://swapi.co/api/people/1/'
}];

export default getCharactersResponse;