import React from 'react';
import Navbar from './nav/Navbar';
import { AppWrapper } from '../App.styles';

const Layout = ({ children }) => {
  return (
    <AppWrapper>
      <div>
        <Navbar />
      </div>
      <main>{children}</main>
    </AppWrapper>
  );
};

export default Layout;
