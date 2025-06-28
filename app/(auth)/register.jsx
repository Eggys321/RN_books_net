import { StyleSheet, Pressable } from "react-native";
import { ThemedCard, ThemeText, ThemedView, Spacer } from "../../components";
import { Link, router } from "expo-router";
const Register = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemeText title={true} style={styles.title}>
        Register For an Account
      </ThemeText>
      <Spacer height={100} />

      <Pressable onPress={() => router.push("/login")} style={styles.link}>
        <ThemeText style={{ textAlign: "center" }}>Register instead</ThemeText>
      </Pressable>
    </ThemedView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
});
