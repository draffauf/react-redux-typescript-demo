import ICharacter from './ICharacter.interface';

export default interface ICharacterState {
  readonly character?: ICharacter,
  readonly characters: ICharacter[],
  readonly isFetching: Boolean,
}
