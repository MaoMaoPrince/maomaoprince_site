import React from 'react';
import styled from 'styled-components'

const Left = styled.div`
  display:flex;

`;

const Button = styled.button`
  color: red;
`

const Header: React.FC<{}> = () => {
  return (
    <>  
    <Left>

      MaomaoPrince
      </Left>
    </>
  )
};

export default Header;
