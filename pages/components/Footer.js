import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <Container className="w-full">
        © 2021 <Link href="https://floxus.co/">Floxus Education</Link> Pvt. Ltd.
      </Container>
    </>
  );
};

export default Footer;

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Link = styled.a`
  color: darkblue;
`;
