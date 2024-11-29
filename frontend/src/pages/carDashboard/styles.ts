import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#373841',
    },
    header: {
      fontSize: 34,
      fontWeight: 'bold',
      marginBottom: 5,
      marginTop: 20,
      color: '#fff',
      textAlign: 'center',
    },
    input: {
      height: 40,
      borderColor: '#4D5396',
      backgroundColor: '#4D5396',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 10,
      paddingLeft: 8,
    },
    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    stockCount: {
      fontSize: 18,
      marginBottom: 10,
    },
    itemContainer: {
      flexDirection: 'row',
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      paddingBottom: 10,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
      marginRight: 10,
    },
    itemDetails: {
      flex: 1,
      justifyContent: 'center',
    },
    itemTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    editButton: {
      backgroundColor: '#3498db',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    editButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    // Cancel: {
    //   height: 50,
    //   width: 50,
    //   marginTop: 5,
    //   alignItems: 'flex-end',
    //   justifyContent: 'flex-end',
    // },
    confirmar: {
      height: 50,
      width: 50,
      marginTop: 10,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    car: {
      height: 100,
      width: 190,
      marginTop: 5,
      alignItems: 'center',
      marginLeft: 90,
      marginBottom: 10,
    },
  });
  
  