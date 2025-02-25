import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#25292e",
      paddingHorizontal: 2,
      marginLeft: 20
    },
    appButtonContainerNoMargin: {
        elevation: 8,
        backgroundColor: "#25292e",
        paddingHorizontal: 2
      },
    appButtonText: {
      fontSize: 12,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
});

export { styles };