import React, { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import animationData from './LottieC.json';

interface LottieAnimationPeopleProps {
  speed: number; 
}

const LottieAnimationPeople: React.FC<LottieAnimationPeopleProps> = ({ speed }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        animationData: animationData,
        loop: true,
        autoplay: true,
        renderer: 'svg',
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet',
        },
      });

      return () => {
        animationRef.current?.destroy();
      };
    }
  }, []);

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.setSpeed(speed);
    }
  }, [speed]);

  return (
    <div
      ref={containerRef}
      style={{
        // width: 'fit-content',
        // height: '250px'
      }}
    ></div>
  );
};

export default LottieAnimationPeople;