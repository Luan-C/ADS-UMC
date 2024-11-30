import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#373841',
    },
    logo: {
      height: 157,
      width: 302,
      marginBottom: 20,
    },
    textButton:{
        fontWeight: '600',
        color: '#000000',
    },
    cadastrar: {
      backgroundColor: '#2B3BEB',
      paddingVertical: 50,
      paddingHorizontal: 120,
      borderRadius: 10,
      marginTop: 100,
      alignItems: 'center',
    },
    estoque: {
      backgroundColor: '#D9D9D9',
      paddingVertical: 50,
      paddingHorizontal: 130,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 30,
    },
    sair: {
      height: 50,
      width: 50,
      marginTop: 140,
      alignItems: 'flex-end',
    },
});