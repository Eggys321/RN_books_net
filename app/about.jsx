import { Link, router } from "expo-router";
import { StyleSheet, Text, View, Pressable, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import ThemedView from "../components/ThemedView";
import ThemeText from "../components/ThemeText";


const About = () => {
    const colorScheme = useColorScheme();
        const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemedView style={[styles.container, {backgroundColor:theme.background}]}>
      <ThemeText style={styles.title}>About Page</ThemeText>
      <Pressable onPress={() => router.back()} style={styles.link}>
        <ThemeText>Back Home</ThemeText>
      </Pressable>
      {/* <Link href="/" style={styles.link}>Back Home</Link> */}
    </ThemedView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
