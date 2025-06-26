import { StyleSheet, Text, View, Image } from 'react-native';
import bookImg from "../assets/img/book-circle.webp";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={bookImg} style={styles.img}/>
      <Text style={styles.title}>The Best</Text>
      <Text style={{marginTop:10, marginBottom:30}}>Book App</Text>
      {/* <View style={styles.card}>
        <Text>
          Hello, this is a card.
        </Text>
      </View> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    fontWeight:"bold",
    fontSize:18
  },
  // card:{
  //   backgroundColor:"#eee",
  //   padding:20,
  //   borderRadius:5,
  //   boxShadow:"4px 4px rgba(0,0,0,0.1)"
  // },
  img:{
    marginVertical:20,
    width:250, 
    height:250, 
    borderRadius:50

  }
})