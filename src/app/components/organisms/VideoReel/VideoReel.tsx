import { FC } from "react";

type VideoReelProps = {
  src: string;
  className?: string;
};

export const VideoReel: FC<VideoReelProps> = ({ src, className }) => {
  return (
    <div className={className}>
      <div className="relative w-full pb-[56.25%]">
        <video className="absolute top-0 left-0 w-full h-full" controls>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
