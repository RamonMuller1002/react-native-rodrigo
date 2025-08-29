import { Text, View , StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>Olá Mundo</Text>
      <Text style={{ margin: 100, backgroundColor: 'red', color: 'white', padding: 10 }}>
        Lorem ipsum dolor 
        sit amet consectetur adipisicing elit. Est eum ab nulla dolore quod maiores, architecto numquam quasi 
        omnis autem consectetur recusandae voluptate consequuntur at deleniti atque temporibus provident. Corrupti?
      </Text>

    </View>

);

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001773',
    
  },
  text:{
    margin: 100, 
    backgroundColor: 'red', 
    color: 'white', 
    padding: 10
  }, 





})