import PT from 'prop-types';
import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useSearchParams } from 'react-router-dom';

import { Form, Input, SearchBtn } from './SearchMovies.styled';

const SearchMovies = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const onInputChange = event => {
    const name = event.target.value;
    setInputValue(name.toLowerCase());
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const searchName = inputValue.trim();
    setInputValue('');
    onSubmit(searchName);
    setSearchParams({ query: searchName });
  };

  return (
    <div>
      <Form onSubmit={onFormSubmit}>
        <Input
          type="text"
          placeholder="Search movies"
          value={inputValue}
          onChange={onInputChange}
          required
        />
        <SearchBtn type="submit" aria-label="Search">
          <BiSearchAlt2
            style={{ fill: '#e50914', width: '20px', height: '20px' }}
          />
        </SearchBtn>
      </Form>
    </div>
  );
};

export default SearchMovies;

SearchMovies.propTypes = {
  onSubmit: PT.func.isRequired,
};
