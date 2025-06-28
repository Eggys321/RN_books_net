import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import bookImg from "../assets/img/book-circle.webp";
import { Link, router } from "expo-router";
import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";
import ThemeText from "../components/ThemeText";
// import { router } from 'expo-router';

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Image source={bookImg} style={styles.img} />
      <ThemeText style={styles.title} title={true}>The Best</ThemeText>
      <Spacer height={10}/>
    <ThemeText>Book App</ThemeText>
    <Spacer height={10}/>
      <Pressable onPress={() => router.push("/login")} style={styles.link}>
        <ThemeText>Login Page</ThemeText>
      </Pressable>

      <Pressable onPress={() => router.push("/register")} style={styles.link}>
        <ThemeText>Register Page</ThemeText>
      </Pressable>
    </ThemedView>
    // <View style={styles.container}>
    //   <Image source={bookImg} style={styles.img}/>
    //   <Text style={styles.title}>The Best</Text>
    //   <Text style={{marginTop:10, marginBottom:30}}>Book App</Text>
    //   <Link href="/about" style={styles.link}>About Page</Link>
    //   <Link href="/contact" style={styles.link}>Contact Page</Link>
    // </View>
  );
};

export default Home;

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
  // card:{
  //   backgroundColor:"#eee",
  //   padding:20,
  //   borderRadius:5,
  //   boxShadow:"4px 4px rgba(0,0,0,0.1)"
  // },
  img: {
    marginVertical: 20,
    width: 250,
    height: 250,
    borderRadius: 50,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
