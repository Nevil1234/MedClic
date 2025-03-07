import { useEffect } from "react";
import { router } from "expo-router";
import { View, Image } from "react-native";

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/Landingpage");
    }, 2000); // Shows splash screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff", // Add your desired background color
      }}
    >
      {/* Add your splash screen content here */}
      <Image 
        source={require("../assets/images/landingpg.png")}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}
