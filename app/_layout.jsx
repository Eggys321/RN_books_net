import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const RootLayout = () => {
  return (
      <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
            headerStyle: { backgroundColor: "#ddd" },
            headerTintColor: "#333",
        }}
        >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
        <Stack.Screen name="contact" options={{ title: "Contact" }} />
      </Stack>
    </View>
          // <Stack screenOptions={{
          //     headerStyle:{backgroundColor:"#ddd"},
          //     headerTintColor:"#333"
          // }}>
          //     <Stack.Screen name='index' options={{title:"Home"}} />
          //     <Stack.Screen name='about' options={{title:"About"}} />
          //     <Stack.Screen name='contact' options={{title:"Contact"}} />
          // </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
