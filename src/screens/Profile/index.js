import React from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { fontType, colors } from '../../theme';
import {Notification} from 'iconsax-react-native';
import {ProfileData} from '../../../data';
import { rai } from '../../assets/img';


const Profile = () => {
  const data = ProfileData.slice;
  return (
    <View>
        <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.title}>Profile</Text>
              <Notification color={colors.black()} variant="Linear" size={26} />
          </View>
        </View>
        <View style={{gap: 15, alignItems: 'center', paddingTop:10}}>
          <View style={styles.circle}>
           <Image
             source={rai}
             style={styles.image}
           />
           </View>
        </View>
        <View style={{justifyContent: 'center', alignItems:'center', paddingTop:10}}>
          <Text style={styles.title}>
            {ProfileData.name}
          </Text>
          <Text style={styles.judul}>
            {ProfileData.Email}
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.judul2}>Personal Information</Text>
          </View>
        </View>
        <View style={kotak.container}>
          <View style={kotak.textBox}>
            <Text style={kotak.text}>Nama     : {ProfileData.name}</Text>
            <Text style={kotak.text}>Email    : {ProfileData.Email}</Text>
            <Text style={kotak.text}>Kota     : {ProfileData.Kota}</Text>
            <Text style={kotak.text}>Kode Pos : {ProfileData.KodePos}</Text>
            <Text style={kotak.text}>Nomer    : {ProfileData.Nomer}</Text>
          </View>
        </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      backgroundColor: '#F5FAFD',
    },
    header: {
      paddingHorizontal: 24,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      height:52,
      elevation: 8,
      paddingTop:8,
      paddingBottom:4
    },
    title: {
      fontSize: 26,
      fontFamily: fontType['Pjs-ExtraBold'],
      color: colors.black(),
    },
    judul:{
      fontSize: 14,
      fontFamily: fontType['Pjs-ExtraBold'],
      color: colors.grey(),
    },
    judul2:{
      paddingTop:15,
      fontSize: 20,
      fontFamily: fontType['Pjs-ExtraBold'],
      color: colors.black(),
    },
    listCategory: {
      paddingVertical: 10,
    },
    listBlog: {
      paddingVertical: 10,
      gap: 10,
    },
      circle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: '100%',
        height: '100%',
        borderRadius: 75,
      },
  });

  const kotak = StyleSheet.create({
    container: {
      paddingTop:15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textBox: {
      borderWidth: 1, // Lebar border
      borderColor: colors.orange(), // Warna border
      padding: 30, // Padding dalam kotak
      borderRadius: 8, // Sudut border
      backgroundColor: colors.white(), // Warna latar belakang kotak
    },
    text: {
      fontSize: 14,
      fontFamily: fontType['Pjs-Medium'],
      color: colors.black(),
    },
  });