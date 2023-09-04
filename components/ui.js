import React, { useRef, useEffect } from "react";
import { View, ActivityIndicator, StatusBar, StyleSheet } from "react-native";
import AnimatedLottieView from "lottie-react-native";

export const LoadingSpinner = ({ color }) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator color={color && color} />
      </View>
    </>
  );
};

export const Animation = ({
  source,
  style,
  onAnimationFinish,
  autoplay = true,
  loop = true,
  speed = 1.5,
}) => {
  const lottieRef = useRef(null);
  useEffect(() => {
    lottieRef.current?.reset();
    setTimeout(() => {
      lottieRef.current?.play();
    }, 0);
  }, []);
  // fix end

  return (
    <AnimatedLottieView
      source={source}
      autoPlay={autoplay}
      loop={loop}
      style={style}
      speed={speed}
      onAnimationFinish={onAnimationFinish}
      ref={lottieRef}
    />
  );
};
