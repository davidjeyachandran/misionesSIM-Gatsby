import { Link } from 'gatsby';
import styled from 'styled-components';

export const videoRatio = styled.div`
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
  `
  
  export const VideoInner = styled.div`
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    cursor: pointer;
    right: 0;
    top: 0;
    width: 100%;
`
 
export const ThumbnailImage = styled.img`
    width: 100%;
`;

export const PlayIcon = styled.img`
    height: 42px;
    left: calc(50% - 30px);
    position: absolute;
    top: calc(50% - 21px);
    transition: all 0.3s ease-in-out;
    width: 60px;
`;
