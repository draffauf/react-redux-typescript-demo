import ICharacter from './ICharacter.interface';

export default interface ICharacterState {
  readonly characters: ICharacter[],
  readonly isFetching: Boolean,
}
