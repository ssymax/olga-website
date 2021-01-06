import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import gsap from 'gsap';
import Img from 'gatsby-image';
import Quote from 'components/atoms/Quote/Quote';

const StyledWrapper = styled.div`
  margin: 0 auto 40px auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
`;

const StyledImageWrapper = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const IndexPage = ({ data }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 767;

  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const tl = gsap.timeline();

    tl.fromTo(img, { autoAlpha: 0, scale: 1.05 }, { duration: 5, autoAlpha: 1, scale: 1 }).delay(1);
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
          <StyledImageWrapper fixed={data.file.childImageSharp.fixed} />
        ) : (
          <StyledImageWrapper fluid={data.file.childImageSharp.fluid} />
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
