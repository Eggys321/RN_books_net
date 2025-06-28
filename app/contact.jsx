import { Link, router } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";
import ThemedView from "../components/ThemedView";
import ThemeText from "../components/ThemeText";

const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemeText style={styles.title}>Contact Page</ThemeText>
      <Pressable onPress={() => router.back()} style={styles.link}>
        <ThemeText>Back Home</ThemeText>
      </Pressable>
      {/* <Link href="/" style={styles.link}>Back Home</Link> */}
    </ThemedView>
  );
};

export default Contact;

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
