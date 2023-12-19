import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback
} from "react-native";
import { Category, DirectboxSend, Image, Notification, ReceiptItem, SearchNormal1 } from 'iconsax-react-native'
import axios from 'axios';
const ItemSell = () => {
    const [loading, setLoading] = useState(false);
        const [itemData, setitemData] = useState({
            title: "",
            description: "",
            price: "",
            createdAt: '',
            totalLikes: 0,
            totalComments: 0,
        });
        const handleUpload = async () => {
            setLoading(true);
            try {
              await axios.post('https://656d3039bcc5618d3c22e189.mockapi.io/product', {
                  title: itemData.title,
                  description: itemData.description,
                  price: itemData.price,
                  image,
                  totalComments: itemData.totalComments,
                  totalLikes: itemData.totalLikes,
                  createdAt: new Date(),
                })
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
              setLoading(false);
              navigation.navigate('Keranjang');
            } catch (e) {
              console.log(e);
            }
          };
        const handleChange = (key, value) => {
            setitemData({
            ...itemData,
            [key]: value,
            });
        };
        const [image, setImage] = useState(null);
        const navigation = useNavigation();
    return (
        <View  style={{flex: 1,}}>
            <View style={{flexDirection: 'row',alignItems: 'center',padding: 20, justifyContent:'flex-end', gap: 28}}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Search")}>
                        <SearchNormal1 size="27" color="#2D2C2C"/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Mailbox")}>
                        <Notification size="27" color="#2D2C2C"/>
                    </TouchableWithoutFeedback>
                </View>
            <ScrollView>
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Product Name."
                    value={itemData.title}
                    onChangeText={(text) => handleChange("title", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.boardDescription}>
                    <TextInput
                    placeholder="Description."
                    value={itemData.description}
                    onChangeText={(text) => handleChange("description", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.boardDescription}>
                    <TextInput
                    placeholder="Price."
                    value={itemData.price}
                    onChangeText={(text) => handleChange("price", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.boardDescription}>
                    <TextInput
                    placeholder="URL Image."
                    value={image}
                    onChangeText={(text) => setImage(text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
            </ScrollView>
            <TouchableOpacity onPress={handleUpload} style={{backgroundColor: '#3693F4',padding: 15, flexDirection: 'row',alignItems: 'center', gap: 12, marginHorizontal: 120, borderRadius: 14, position: 'absolute', top: 670,left:192}}>
                <ReceiptItem variant="Bold" color="white" size={'30'}/>
            </TouchableOpacity>
        </View>
    )
}

export default ItemSell

const styles = StyleSheet.create({})
const textInput = StyleSheet.create({
    title:{
        fontSize: 14,
    },
    board: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    boardDescription: {
        padding: 10,
        marginVertical: 10,
        marginTop: -5,
        marginHorizontal: 20,
    }
})
