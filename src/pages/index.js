import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Quote from 'components/atoms/Quote/Quote';
import { mainPageTimeline } from 'utils';

const StyledWrapper = styled.div`
  margin: 0 auto 40px auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  z-index: ${({ theme }) => theme.zIndex.level6};
`;

const StyledImageWrapper = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  ${({ theme }) => theme.mqx.tablet} {
    top: 100px;
    margin-bottom: 100px;
  }

  ${({ theme }) => theme.mqx.phone} {
    top: 60px;
    margin-bottom: 60px;
  }
`;

const IndexPage = ({ data }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 767;

  const imgRef = useRef(null);

  useEffect(() => {
    mainPageTimeline(imgRef);
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <StyledWrapper ref={imgRef}>
        {width < breakpoint ? (
          <StyledImageWrapper
            fixed={data.file.childImageSharp.fixed}
            alt="Olga Łukasik Psycholog"
          />
        ) : (
          <StyledImageWrapper fluid={data.file.childImageSharp.fluid} alt="Olga Psycholog" />
        )}
        <Quote />
      </StyledWrapper>
    </>
  );
};

export const query = graphql`
  {
    file(name: { eq: "olga" }) {
      childImageSharp {
        fluid(maxWidth: 1980, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    file(name: { eq: "olga" }) {
      childImageSharp {
        fixed(height: 600, quality: 100) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`;

export default IndexPage;
