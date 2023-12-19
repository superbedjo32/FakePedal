import { StyleSheet, Text, View,Image, ScrollView, Animated,TouchableOpacity,ActivityIndicator,Modal  } from 'react-native'
import React, {useState,useRef,useEffect} from 'react'
import { mt2w, re2, p2,  } from '../../assets/img';
import { fontType, colors } from '../../theme';
import {ArrowLeft, Like1, Receipt21, Message, Share, More} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {formatNumber} from '../../utils/formatNumber';
import {formatDate} from '../../utils/formatDate';
import axios from 'axios';
const ItemDetail = ({route}) => {
    const {productId} = route.params;
    const [iconStates, setIconStates] = useState({
        liked: {variant: 'Linear', color: 'gray'},
        bookmarked: {variant: 'Linear', color: 'gray'},
    });
    const [selectedData, setSelectedData] = useState(null);
    const [loading, setLoading] = useState(true);

    const actionSheetRef = useRef(null);
    const [modalVisible, setModalVisible] = useState(false);
    const openActionSheet = () => {
        actionSheetRef.current?.show();
    };

    const closeActionSheet = () => {
        actionSheetRef.current?.hide();
    };

    useEffect(() => {
        getDataById();
    }, [productId]);

    const getDataById = async () => {
        try {
        const response = await axios.get(
            `https://656d3039bcc5618d3c22e189.mockapi.io/product/${productId}`,
        );
        setSelectedData(response.data);
        setLoading(false);
        } catch (error) {
        console.error(error);
        }
    };

    const navigateEdit = () => {
        closeActionSheet()
        navigation.navigate('ItemEdit', {productId})
    }
    const handleDelete = async () => {
    await axios.delete(`https://656d3039bcc5618d3c22e189.mockapi.io/product/${productId}`)
        .then(() => {
            closeActionSheet()
            navigation.navigate('Keranjang');
        })
        .catch((error) => {
            console.error(error);
        });
    }

    const navigation = useNavigation();
    const scrollY = useRef(new Animated.Value(0)).current;
    const diffClampY = Animated.diffClamp(scrollY, 0, 52);
    const headerY = diffClampY.interpolate({
        inputRange: [0, 52],
        outputRange: [0, -52],
    });
    const bottomBarY = diffClampY.interpolate({
        inputRange: [0, 52],
        outputRange: [0, 52],
    });

    const toggleIcon = iconName => {
        setIconStates(prevStates => ({
        ...prevStates,
        [iconName]: {
            variant: prevStates[iconName].variant === 'Linear' ? 'Bold' : 'Linear',
            color:
            prevStates[iconName].variant === 'Linear'
                ? 'blue'
                : 'gray',
        },
        }));
    };
    return (
        <View style={{flex: 1}}>
        <Animated.View
        style={[styles.header, {transform: [{translateY: headerY}]}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color='gray' variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <More
              color='gray'
              variant="Linear"
              style={{transform: [{rotate: '90deg'}]}}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
      {loading ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size={'large'} color='blue' />
        </View>
      ) : (
    <ScrollView>
        <View style={{alignItems: 'center', padding:10, marginTop: 20}}>
        <FastImage
            style={{width: 200,height:200, marginTop: 40}}
            source={{
              uri: selectedData?.image,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}></FastImage>
        </View>
        <View style={{flexDirection: 'row',gap:190, padding: 20}}>
            <Text style={{fontFamily: fontType['Pjs-ExtraBold'],fontSize: 18}}>{selectedData?.title}</Text>
            <Text style={{fontFamily: fontType['Pjs-ExtraBold'],fontSize: 18}}>{selectedData?.price}</Text>
        </View>
        <View style={{padding: 20}}>
            <Text style={{fontFamily: fontType['Pjs-Light'],fontSize: 18}}>{selectedData?.description}</Text>
        </View>
        <View style={{padding: 20, alignItems: 'center', backgroundColor: '#7A9EFF', marginHorizontal: 16, borderRadius: 20}}>
            <Text  style={{fontFamily: fontType['Pjs-ExtraBold'],fontSize: 15,color: 'white'}}>Buy Now</Text>
        </View>
    </ScrollView>
    )}
    <Animated.View
      style={[styles.bottomBar, {transform: [{translateY: bottomBarY}]}]}>
      <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => toggleIcon('liked')}>
          <Like1
            color={iconStates.liked.color}
            variant={iconStates.liked.variant}
            size={24}
          />
        </TouchableOpacity>
        <Text style={styles.info}>
          {formatNumber(selectedData?.totalLikes)}
        </Text>
      </View>
      <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
        <Message color='gray' variant="Linear" size={24} />
        <Text style={styles.info}>
          {formatNumber(selectedData?.totalComments)}
        </Text>
      </View>
      <TouchableOpacity onPress={() => toggleIcon('bookmarked')}>
        <Receipt21
          color={iconStates.bookmarked.color}
          variant={iconStates.bookmarked.variant}
          size={24}
        />
      </TouchableOpacity>
    </Animated.View>
    <Modal
    animationType='fade'
    transparent={true}
    visible={modalVisible}
    style={{}}
    onRequestClose={() =>{
      setModalVisible(!modalVisible);
    }}>
      <View style={{backgroundColor: 'white',position:'absolute', padding: 20,top: 50, paddingHorizontal: 40,borderRadius: 10,left: 260,paddingVertical: 20}}>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 15,
        }}
        onPress={navigateEdit}
        >
        <Text
          style={{
            
            color: 'black',
            fontSize: 18,
          }}>
          Edit
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 15,
        }}
        onPress={handleDelete}>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
          }}>
          Delete
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 15,
        }}
        onPress={() => setModalVisible(!modalVisible)}>
        <Text
          style={{
            color: 'red',
            fontSize: 18,
          }}>
          Cancel
        </Text>
      </TouchableOpacity>
      </View>
    </Modal>
  </View>
    )
}

export default ItemDetail

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        paddingTop: 8,
        paddingBottom: 4,
        position: 'absolute',
        zIndex: 1000,
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: 'white',
      },
      bottomBar: {
        position: 'absolute',
        zIndex: 1000,
        backgroundColor: 'white',
        paddingVertical: 14,
        paddingHorizontal: 60,
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
})
