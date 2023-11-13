import React from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { fontType, colors } from '../../theme';
import {SearchNormal1} from 'iconsax-react-native';
import {ListProduct} from '../../../data';

const Keranjang = ({item}) => {
    return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.bar}>
          <SearchNormal1 size={18} color={colors.grey(0.5)} variant="Linear" />
          <Text style={styles.placeholder}>Search</Text>
        </View>
      </View>
      <View>
        <Text style={recent.text}>Recent Search</Text>
      </View>
      <View>
      <Text style={recent.text}>No History Found</Text>
      </View>
    </View>
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