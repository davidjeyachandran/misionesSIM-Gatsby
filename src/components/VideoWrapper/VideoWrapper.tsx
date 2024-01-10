import React, { ReactNode } from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  background-color: black;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

interface VideoWrapperProps {
  children: ReactNode;
}

const VideoWrapper: React.FC<VideoWrapperProps> = ({ children }) => (
  <VideoContainer>{children}</VideoContainer>
);


export default VideoWrapper;