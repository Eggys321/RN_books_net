import { Link, router } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
      <Pressable onPress={() => router.back()} style={styles.link}>
        <Text>Back Home</Text>
      </Pressable>
      {/* <Link href="/" style={styles.link}>Back Home</Link> */}
    </View>
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
