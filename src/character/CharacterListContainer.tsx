import * as React from 'react';
import { connect } from 'react-redux';

import IAppState from '../store/IAppState.interface';
import ICharacter from './ICharacter.interface';
import { getCharacters } from './CharacterActionCreators';
import CharacterList from './CharacterList';

// Define available props
// TODO: use correct typing for getCharacters
interface IProps {
  getCharacters: any;
  characters: ICharacter[];
  isFetching: Boolean;
}

// Define container with available props
export class CharacterListContainer extends React.Component<IProps> {
  public componentDidMount() {
    if (this.props.characters.length === 0) {
      this.props.getCharacters();
    }
  }

  public render() {
    const { characters, isFetching } = this.props;
    let contents: JSX.Element;

    if (isFetching) {
      contents = <p>Loading</p>;
    } else {
      contents = <CharacterList characters={characters} />
    }

    return (
      <div className="characters-container">
        {contents}
      </div>
    );
  }
}

// Make data available on props
const mapStateToProps = (store: IAppState) => {
  return {
    characters: store.characterState.characters,
    isFetching: store.characterState.isFetching,
  };
};

// Make functions available on props
const mapDispatchToProps = (dispatch: any) => {
  return {
    getCharacters: () => dispatch(getCharacters()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterListContainer);
