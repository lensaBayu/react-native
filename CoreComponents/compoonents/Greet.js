import { View, Text } from "react-native";

export default function Greet({ name }) {
    return (
        <View>
            <Text>Hi! my name is {name}</Text>
        </View>
    )
}

