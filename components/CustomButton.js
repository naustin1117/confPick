import {TouchableOpacity, Text, View} from "react-native";

const CustomButton = (props) => {
    if(props.onPress) {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <View style={props.style.button}>
                    <Text style={props.style.text}>{props.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity>
            <View style={props.style.button}>
                <Text style={props.style.text}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton;