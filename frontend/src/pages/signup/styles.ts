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
      marginBottom: 40,
    },
    inputContainer: {
      width: '100%',
      marginBottom: 20,
      marginTop: 10,
    },
    input: {
      height: 45,
      borderColor: '#494C6B',
      backgroundColor: '#494C6B',
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 10,
      marginBottom: 15,
    },
    button: {
      backgroundColor: '#434DC0',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
    },
    footer: {
      marginTop: 20,
      alignItems: 'center',
      backgroundColor: '#373841',
    },
    link: {
      color: '#007bff',
        },

    subtitle: {
        color:'#FFFFFF',
        fontWeight: 'bold',
    },
    textButton: {
        fontWeight: '600', 
        color: '#FFFFFF' }

  });