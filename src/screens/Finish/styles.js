import { StyleSheet } from 'react-native';

export const styles = (theme) => {
 return StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'stretch',
  },
  addressArea: {
    padding: 16,
    margin: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'flex-start',
    backgroundColor: theme.gray,
  },
  resumeArea: {
    flex: 1,
    margin: 16,
  },
  text: {
    fontSize: 20,
    color: theme.text,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 16,
  },
  button: {
    margin: 16,
    marginBottom: 32,
    paddingVertical: 16,
    borderRadius: 10,
    backgroundColor: theme.button,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.black,
    textAlign: 'center',
  },
})
}