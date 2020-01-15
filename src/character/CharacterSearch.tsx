import * as React from 'react';

// Create interface for Props
interface IProps {
  searchCharacters: any,
}

export class CharacterSearch extends React.Component<IProps, { value: string }> {
  componentWillMount() {
    this.setState({ value: '' });
  }

  _onChangeHandler = (event: React.ChangeEvent) => {
    const input = (event.target as HTMLInputElement).value;
    this.setState({ value: input });
  }

  _onSubmitHandler = (event: React.FormEvent) => {
    const { searchCharacters } = this.props;
    event.preventDefault();
    searchCharacters(this.state.value);
  }

  render() {
    return (
      <form
        className="form-inline"
        onSubmit={this._onSubmitHandler}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={this.state.value}
          onChange={this._onChangeHandler} />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >Search</button>
      </form>
    );
  }
};
