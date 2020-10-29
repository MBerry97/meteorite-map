import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.h1`
  font-size: 2.5rem;
  display: flex;
  font-family: 'Lilita One', cursive;
  color: rgb(107, 158, 235);
  
`;

const Header = () => {
  return <HeaderContainer>Meteorites over 100kg - Heat Map</HeaderContainer>;
};

export default Header;
