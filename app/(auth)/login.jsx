import { StyleSheet,Pressable } from 'react-native'
import { ThemedCard,ThemeText, ThemedView, Spacer } from '../../components'
import { Link , router} from 'expo-router'
const Login = () => {
  return (
    <ThemedView style={styles.container}>

        <Spacer/>
        <ThemeText title={true} style={styles.title}>
            Login to Your Account
        </ThemeText>
        <Spacer height={100}/>
        <Pressable onPress={() => router.push("/register")} style={styles.link}>
               <ThemeText style={{ textAlign: "center" }}>Login instead</ThemeText>
             </Pressable>
    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    },
    title:{
        textAlign:"center",
        fontSize:18,
        marginBottom:30
    }
})