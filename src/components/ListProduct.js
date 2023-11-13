import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React, {useState} from 'react'
import { fontType, colors } from '../theme';
import { mt2w, re2, p2,  } from '../assets/img';
const ListProduct = () => {
  return (
    <View>
        <View style={{paddingHorizontal: 24, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', height:52, elevation: 8, paddingTop:8, paddingBottom:4}}>
            <Text style={{fontSize: 18, fontFamily: fontType['Pjs-ExtraBold'], color: colors.black(),}}>New Arrival</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{padding: 10, backgroundColor: 'white', marginHorizontal: 5, flexDirection: 'column', borderRadius: 20}}>
                <View style={{padding: 10}}>
                    <Image style={{width: 150, height: 150, padding: 30}}source={p2}></Image>
                </View>
                <View style={{flexDirection: 'column',gap: 1, alignItems: 'center'}}>
                    <Text style={{fontFamily: fontType['Pjs-ExtraBold']}}>AMT P2</Text>
                    <Text style={{fontFamily: fontType['Pjs-Medium'],fontSize: 15}}>Rp.2,000,000</Text>
                    </View>
                </View>
                <View style={{padding: 10, backgroundColor: 'white', marginHorizontal: 5, flexDirection: 'column', borderRadius: 20}}>
                <View style={{padding: 10}}>
                    <Image style={{width: 150, height: 150, padding: 30}}source={mt2w}></Image>
                </View>
                <View style={{flexDirection: 'column',gap: 1, alignItems: 'center'}}>
                    <Text style={{fontFamily: fontType['Pjs-ExtraBold']}}>Boss MT2W</Text>
                    <Text style={{fontFamily: fontType['Pjs-Medium'],fontSize: 15}}>Rp.870,000</Text>
                    </View>
                </View>
                <View style={{padding: 10, backgroundColor: 'white', marginHorizontal: 5, flexDirection: 'column', borderRadius: 20}}>
                <View style={{padding: 10}}>
                    <Image style={{width: 150, height: 150, padding: 30}}source={re2}></Image>
                </View>
                <View style={{flexDirection: 'column',gap: 1, alignItems: 'center'}}>
                    <Text style={{fontFamily: fontType['Pjs-ExtraBold']}}>Boss RE2</Text>
                    <Text style={{fontFamily: fontType['Pjs-Medium'],fontSize: 15}}>Rp.1,116,000</Text>
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default ListProduct

const styles = StyleSheet.create({})