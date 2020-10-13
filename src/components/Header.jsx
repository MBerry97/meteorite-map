import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.h1`
  font-size: 2rem;
  display: flex;
`;

const Header = () => {
  return <HeaderContainer>Meteorites over 100kg - Heat Map</HeaderContainer>;
};

export default Header;
