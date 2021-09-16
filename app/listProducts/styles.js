import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content_imgs: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly', //space-between,
  },
  cardInfoUser: {
    alignItems: 'center',
    marginLeft: 4,
    marginTop: 20,
    marginBottom: 10,
  },
  img: {
    width: 150,
    height: 300,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 15,
    color: '#6e6e6e',
    fontFamily: 'TrebuchetMS bold',
  },
});

export default styles;
