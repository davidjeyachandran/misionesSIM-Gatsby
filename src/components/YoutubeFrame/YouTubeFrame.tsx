import React, { useRef } from "react";
import { PlayIcon, ThumbnailImage, VideoInner } from "./styles";
import VideoWrapper from "../VideoWrapper";

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
                        <PlayIcon
                            alt="Play Video"
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg"
                            loading="lazy"
                            className='playIcon'
                        />
                    </VideoInner>
                </button>
            </div>
        </VideoWrapper>
    );
}