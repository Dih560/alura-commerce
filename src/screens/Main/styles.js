import {StatusBar, StyleSheet} from 'react-native';

export const styles = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleArea: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingTop: StatusBar.currentHeight + 10,
      marginBottom: 16,
      paddingHorizontal: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.title,
    },
    list: {
      flex: 1,
      width: '100%',
    },
    lastView: {
      marginBottom: 16,
      paddingVertical: 16,
      backgroundColor: theme.lastView,
    },
    titleLastView: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.title,
      marginHorizontal: 16,
      marginBottom: 8,
    },
    cartArea: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    cartIcon: {
      fontSize: 30,
      fontWeight: 'bold',
      color: theme.title,
    },
    cartQuantityArea: {
      backgroundColor: 'red',
      borderRadius: 10,
      width: 20,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cartQuantity: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#fff',
    },
    iconArea: {
      marginLeft: 16,
    },
    icon: {
      color: theme.text,
      fontSize: 30,
    },
  });
};
