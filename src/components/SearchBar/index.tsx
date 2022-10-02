import React from 'react';
import { Search, Clear, Keyboard } from '@material-ui/icons';
import { Tooltip } from '@mui/material';

import { Container } from './styles';

import api from '../../services/api.service';

const SearchBar: React.FC = ({ ...otherProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [isFilled, setIsFilled] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = React.useCallback(event => {
    setInputValue(event.target.value);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const clearSearchInput = React.useCallback(() => {
    setInputValue('');
    setIsFilled(false);
  }, []);

  const handleSubmit = React.useCallback(async (event, keywords) => {
    event.preventDefault();

    await api
      .get('tirs/search', {
        params: {
          type: 'fulltext',
          keywords,
        },
      })
      .then(response => console.log(response.data))
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <form
        className="search-bar"
        onSubmit={event => handleSubmit(event, inputValue)}
      >
        <input
          id="input-search"
          type="text"
          value={inputValue}
          onChange={event => handleChange(event)}
          placeholder="Procurar solicitações"
          ref={inputRef}
          {...otherProps}
        />
        {isFilled && (
          <Tooltip title="Limpar" aria-label="limpar">
            <button
              className="clear-input-search"
              type="button"
              onClick={() => clearSearchInput()}
            >
              <Clear fontSize="inherit" color="inherit" />
            </button>
          </Tooltip>
        )}
        <div className="search-buttons">
          <Tooltip title="Pesquisa avançada" aria-label="limpar">
            <button className="advanced-search-button" type="button">
              <Keyboard fontSize="inherit" color="inherit" />
            </button>
          </Tooltip>

          <button type="submit" className="search-button">
            <Search fontSize="inherit" htmlColor="#4285f4" />
          </button>
        </div>
      </form>
    </Container>
  );
};

export default SearchBar;
