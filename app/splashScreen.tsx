import LottieView from "lottie-react-native";
import animation from "@/assets/lottie/AnimationDark1.json";

const SplashScreen = ({ onFinish = () => {} }: { onFinish: () => void }) => {
  return (
    <LottieView
      source={animation}
      onAnimationFinish={onFinish}
      autoPlay
      loop={false}
      resizeMode="cover"
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#09090A",
      }}
    />
  );
};

export default SplashScreen;
