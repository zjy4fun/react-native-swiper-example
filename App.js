import { StyleSheet, View } from 'react-native';
import { MySwiper } from './src/components/MySwiper/MySwiper';

export default function App() {
  return (
    <View style={styles.container}>
      <MySwiper />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
