import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      backgroundColor: '#373841',
    },
    header: {
      fontSize: 34,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
      color: '#fff',
    },
    input: {
      height: 40,
      borderColor: '#494C6B',
      backgroundColor: '#494C6B',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 15,
      paddingLeft: 10,
    },
    button: {
      backgroundColor: '#007BFF',
      padding: 10,
      alignItems: 'center',
      borderRadius: 5,
    },
    buttonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
    /*camera: {
      height: 50,
      width: 50,
      marginTop: 10,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },*/
    confirmar: {
      height: 50,
      width: 50,
      marginTop: 10,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
});