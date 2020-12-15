import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Quote from '../components/MainPage/Quote';

const StyledWrapper = styled.div`
  margin: 40px auto;
  max-width: 1355px;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  @media (max-height: 800px) {
  }
`;

const StyledImageWrapper = styled(Img)`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const IndexPage = ({ data }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 767;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <StyledWrapper>
      {width < breakpoint ? (
        <StyledImageWrapper fixed={data.file.childImageSharp.fixed} />
      ) : (
        <StyledImageWrapper fluid={data.file.childImageSharp.fluid} />
      )}
      <Quote />
    </StyledWrapper>
  );
};

export const query = graphql`
  {
    file(name: { eq: "olga" }) {
      childImageSharp {
        fluid(maxWidth: 1346, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    file(name: { eq: "olga" }) {
      childImageSharp {
        fixed(height: 500, quality: 100) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`;

export default IndexPage;
