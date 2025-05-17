'use client'
import Player from "lottie-react";
import React from "react";

interface LottieAnimationProps {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  className = "",
}) => {
  return (
    <Player
      autoplay={autoplay}
      loop={loop}
      animationData={animationData}
      className={className}
    />
  );
};

export default LottieAnimation;