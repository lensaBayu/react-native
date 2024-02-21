import { View, Text, Image, ScrollView, Button, Alert, Modal } from 'react-native'
import { useState } from 'react'
import Greet from './compoonents/Greet'

const logoImg = require(`./assets/adaptive-icon.png`)

export default function App() {

  // const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }} >
      {/* <Button title='Press' onPress={() => setIsModalVisible(true)} /> */}
      <Button title='Alert' onPress={() => Alert.alert("Data Invalid")} />
      <Button title='Alert2' onPress={() => Alert.alert("Data Invalid", "DOB is inccorect")} />
      <Button title='Alert3' onPress={() => Alert.alert("Data Invalid", "DOB is inccorect", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed")
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed")
        }
      ])} />

      <Greet name={"Bayu"} />

      {/* <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType='slide'
        presentationStyle='formSheet'
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>
            Modal Content
          </Text>
          <Button title='Close' onPress={() => setIsModalVisible(false)} />

        </View>

      </Modal> */}

    </View>
  )
}