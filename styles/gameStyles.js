import {StyleSheet} from 'react-native';

export const gameStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEE'
  },
  grid: {
    padding: 'auto',
    width: 300,
    height: 300,
    backgroundColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000'
  },
  row: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  cell: {
    width: '10%',
    height: '100%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000'
  },
});