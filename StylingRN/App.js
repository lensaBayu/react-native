import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tes</Text>
      <View style={[styles.box, styles.lightBlueBg, styles.boxShadow]}>
        <Text>Lightblue</Text>
      </View>
      <View style={[styles.box, styles.lightGreenBg, styles.boxShadow]}>
        <Text>LigthGreen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  box: { width: 250, height: 250, padding: 10, marginVertical: 10, borderWidth: 2, borderRadius: 10 },
  lightBlueBg: { backgroundColor: "lightblue" },
  lightGreenBg: { backgroundColor: "lightgreen" },
  boxShadow: {
    shadowColor: "blue",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.6
  },
  shadowRadius: 4
})
