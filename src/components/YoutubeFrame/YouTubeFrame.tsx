import React, { useRef } from "react";
import { ThumbnailImage, VideoInner } from "./styles";
import VideoWrapper from "../VideoWrapper";
import { StaticImage } from "gatsby-plugin-image";

type Props = {
    title: string;
    video: string;
    width: string,
    height: string,
    thumbnailQuality: 'default' | 'hqdefault' | 'mqdefault' | 'sddefault'
}


export default function YouTubeFrame({ title, video, width, height, thumbnailQuality }: Props) {
    const divRef = useRef<HTMLDivElement | null>(null);

    const onClick = () => {
        const iframe = document.createElement("iframe");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "1");
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.style.width = width;
        iframe.style.height = height;
        iframe.setAttribute("src", `https://www.youtube.com/embed/${video}?rel=0&showinfo=1&autoplay=1`);
        if (divRef.current) {
            divRef.current.innerHTML = "";
            divRef.current.appendChild(iframe);
        }
    }

    const thumbnailImage = `https://img.youtube.com/vi/${video}/${thumbnailQuality}.jpg`

    return (
        <VideoWrapper>
            <div ref={divRef} className="youtube-frame position-relative">

                <button
                    className='thumbnailButton'
                    onClick={onClick}
                >
                    <VideoInner>
                        <ThumbnailImage
                            alt={title}
                            src={thumbnailImage}
                            loading="lazy"
                        />
                        <StaticImage
                            alt="Play Video"
                            src="./youtube_play_button.svg"
                            loading="lazy"
                            className='playIcon'
                            style={{
                                height: '42px',
                                left: 'calc(50% - 30px)',
                                position: 'absolute',
                                top: 'calc(50% - 21px)',
                                transition: 'all 0.3s ease-in-out',
                                width: '60px'
                            }}
                        />
                    </VideoInner>
                </button>
            </div>
        </VideoWrapper>
    );
}