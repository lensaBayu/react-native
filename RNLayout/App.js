import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "black", alignSelf: "flex-start" }} >Box 1</Box>
      <Box style={{ backgroundColor: "blue", alignSelf: "flex-end" }} >Box 2</Box>
      <Box style={{ backgroundColor: "green", alignSelf: "center" }} >Box 3</Box>
      <Box style={{ backgroundColor: "yellow" }} >Box 4</Box>
      <Box style={{ backgroundColor: "red" }} >Box 5</Box>
      <Box style={{ backgroundColor: "purple" }} >Box 6</Box>
      <Box style={{ backgroundColor: "orange" }} >Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "flex-start", 
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red"
  },
});
