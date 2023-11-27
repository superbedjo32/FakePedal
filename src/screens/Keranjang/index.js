import React, {useRef} from 'react';
//import {ScrollView, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, Image,Animated} from 'react-native';
import { fontType, colors } from '../../theme';
import {SearchNormal1} from 'iconsax-react-native';
import {ListProduct} from '../../../data';
import { mt2w, re2, p2,  } from '../../assets/img';
import {useNavigation} from '@react-navigation/native';

const Keranjang = ({item}) => {
    const navigation = useNavigation();
    const handleNavigateToItemDetail = () => {
        navigation.navigate('ItemDetail');
    };
    const scrollY = useRef(new Animated.Value(0)).current;
    const diffClampY = Animated.diffClamp(scrollY, 0, 142);
    const recentY = diffClampY.interpolate({
      inputRange: [0, 142],
      outputRange: [0, -142],
      extrapolate: 'clamp',
    });
    return(
    <><View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.bar}>
            <SearchNormal1 size={18} color={colors.grey(0.5)} variant="Linear" />
            <Text style={styles.placeholder}>Search</Text>
          </View>
        </View>
        <View>
          <Text style={recent.text}>Recent Search</Text>
        </View>
      </View><Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{ paddingTop: -1 }}>
          <View style={styles.container}>
            <Animated.View style={[styles.header, { transform: [{ translateY: recentY }] }]}>
              <View style={styles.bar}>
                <SearchNormal1 size={18} color={colors.grey(0.5)} variant="Linear" />
                <Text style={styles.placeholder}>Search</Text>
              </View>
            </Animated.View>
            <View style={{ padding: 6, marginTop: 100, }}>
              <Text style={recent.text}>Recent Search</Text>
              <Text style={recent.text}>No History Found</Text>
            </View>
            <TouchableOpacity onPress={handleNavigateToItemDetail}>
              <View style={{ flexDirection: 'row', gap: 15, padding: 30, backgroundColor: '#FFF8D4', marginHorizontal: 10, borderRadius: 20, marginVertical: 10 }}>
                <Image style={{ width: 120, height: 150 }} source={mt2w}></Image>
                <View>
                  <Text style={{ fontFamily: fontType['Pjs-ExtraBold'], fontSize: 18 }}>Boss-MT2W</Text>
                  <Text style={{ fontFamily: fontType['Pjs-Medium'], fontSize: 18 }}>Rp.870,000</Text>
                </View>
              </View>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', gap: 15, padding: 30, backgroundColor: '#D4FCFF', marginHorizontal: 10, borderRadius: 20, marginVertical: 10 }}>
              <Image style={{ width: 120, height: 150 }} source={p2}></Image>
              <View>
                <Text style={{ fontFamily: fontType['Pjs-ExtraBold'], fontSize: 18 }}>AMT-P2</Text>
                <Text style={{ fontFamily: fontType['Pjs-Medium'], fontSize: 18 }}>Rp.2,000,000</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', gap: 15, padding: 30, backgroundColor: '#FEE9FF', marginHorizontal: 10, borderRadius: 20, marginVertical: 10 }}>
              <Image style={{ width: 120, height: 150 }} source={re2}></Image>
              <View>
                <Text style={{ fontFamily: fontType['Pjs-ExtraBold'], fontSize: 18 }}>Boss RE2</Text>
                <Text style={{ fontFamily: fontType['Pjs-Medium'], fontSize: 18 }}>Rp.1,116,000</Text>
              </View>
            </View>
          </View>
        </Animated.ScrollView></>
    );
};

export default Keranjang;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingBottom: 10,
    gap: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
header: {
    paddingHorizontal: 24,
    gap: 30,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    backgroundColor: colors.white(),
    zIndex: 999,
    top: 42,
    left: 0,
    right: 0,
    elevation: 1000,
  },
  bar: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    alignItems: 'center',
    backgroundColor: colors.grey(0.05),
    borderRadius: 10,
    flex: 1,
  },
  placeholder: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.5),
    lineHeight: 18,
  },
});
const recent = StyleSheet.create({
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 25,
      borderColor: colors.grey(0.15),
      borderWidth: 1,
      backgroundColor: colors.grey(0.03),
    },
    label: {
      fontSize: 12,
      fontFamily: fontType['Pjs-Medium'],
      color: colors.grey(0.65),
    },
    text: {
      fontSize: 14,
      fontFamily: fontType['Pjs-Bold'],
      color: colors.black(),
      paddingVertical: 5,
      paddingHorizontal: 24,
    },
  });