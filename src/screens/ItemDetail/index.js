import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import React from 'react'
import { mt2w, re2, p2,  } from '../../assets/img';
import { fontType, colors } from '../../theme';
const ItemDetail = () => {
  return (
    <ScrollView>
        <View style={{alignItems: 'center', padding:10}}>
            <Image style={{width: 200,height:200}} source={mt2w}></Image>
        </View>
        <View style={{flexDirection: 'row',gap:130, padding: 20}}>
            <Text style={{fontFamily: fontType['Pjs-ExtraBold'],fontSize: 18}}>Boss-MT2W</Text>
            <Text style={{fontFamily: fontType['Pjs-ExtraBold'],fontSize: 18}}>Rp.870,000</Text>
        </View>
        <View style={{padding: 20}}>
            <Text style={{fontFamily: fontType['Pjs-Light'],fontSize: 18}}>Deskripsi Barang Disini Yaa, Taruh Sini Anjing</Text>
        </View>
        <View style={{padding: 20, alignItems: 'center', backgroundColor: '#7A9EFF', marginHorizontal: 16, borderRadius: 20}}>
            <Text  style={{fontFamily: fontType['Pjs-ExtraBold'],fontSize: 15,color: 'white'}}>Add To Cart</Text>
        </View>
    </ScrollView>

  )
}

export default ItemDetail

const styles = StyleSheet.create({})