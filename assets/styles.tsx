import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      margin: 0,
      padding: 0
    },
    text: {
      color: '#fff',
    },
    button: {
      fontSize: 20,
      textDecorationLine: 'underline',
      color: '#fff',
    },
    titleText: {
      fontSize: 20,
      padding: 10,
      fontWeight: 'bold',
    },
    listContainer: {
      maxHeight: 330
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    sectionHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      padding: 10,
      backgroundColor: '#f1f1f1',
    },
    appButtonContainerForm: {
      width: '100%',
      backgroundColor: '#4CAF50',
      paddingVertical: 12,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    appButtonContainer: {
      backgroundColor: '#4CAF50',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    appButtonText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },
    textContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
    },
    name: {
      flex: 1,
      fontSize: 16,
    },
    hour: {
      flex: 1, 
      fontSize: 14,
      textAlign: 'left',
      color: '#666',
    },
    buttonWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    formContainer: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f9f9f9',
    },
    input: {
      width: '100%',
      height: 50,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 8,
      paddingLeft: 15,
      marginBottom: 15,
      fontSize: 16,
      backgroundColor: '#fff',
    }
});

export { styles };