import { Box, IconButton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import SearchBar from '../search-bar/SearchBar';
import { HeaderWrapper } from './Header.styles';

const Header = ({ setSearchQuery }) => {
  return (
    <HeaderWrapper>
      <div>
        <Typography
          variant='h2'
          sx={{ p: 2 }}
        >
          {' '}
          Books-R-US
        </Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant='p'
          sx={{ p: 2 }}
        >
          {' '}
          Find the books you love!
        </Typography>
        <SearchBar setSearchQuery={setSearchQuery} />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
