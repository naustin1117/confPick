import {StyleSheet} from "react-native";

const homeStyle = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: "#fff",
      margin: 30,
      gap: 20, 
    },
    buttons:{
      flex:1,
    },
    createPool:{
      flex: .22,
      backgroundColor: 'grey'
    },
    yourPools:{
      flex: .22,
      backgroundColor: 'grey'
    },
    messages:{
      flex: .1,
      backgroundColor: 'grey'
    },
    navItem: {
      padding: 10
    }
  });
  
export default homeStyle;