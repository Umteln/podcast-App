import { IconButton, TextField } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ setSearchQuery }) => (
  <form>
    <TextField
      id='search-bar'
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label='Enter a book'
      variant='outlined'
      placeholder='Search...'
      size='small'
    />
    <IconButton
      type='submit'
      aria-label='search'
    >
      <SearchIcon style={{ fill: 'black' }} />
    </IconButton>
  </form>
);
export default SearchBar;
