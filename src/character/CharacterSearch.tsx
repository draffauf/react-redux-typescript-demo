import React, { useState } from 'react';

// Create interface for Props
interface IProps {
  searchCharacters: Function,
}

const CharacterSearch: React.SFC<IProps> = ({ searchCharacters }: IProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const _onChangeHandler = (event: React.ChangeEvent) => {
    const input = (event.target as HTMLInputElement).value;
    setSearchTerm(input);
  }

  const _onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    searchCharacters(searchTerm);
  }

  return (
    <form
      className="form-inline"
      onSubmit={_onSubmitHandler}>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchTerm}
        onChange={_onChangeHandler} />
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"
      >Search</button>
    </form>
  );
};

export default CharacterSearch;
