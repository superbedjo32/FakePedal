import React from 'react';
import {FlatList, ScrollView, StyleSheet,  Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {Notification, Element3, Receipt21, Clock, Message, DollarCircle} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';
import { gt1, gt2, p2 } from './src/assets/img';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>FakePedal.</Text>
        <Notification color={colors.black()} variant="Linear" size={24} />
      </View>
      <View style={styles.header}>
      <Text style={styles.title}>Explore</Text>
      </View>
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{...category.item, marginLeft: 24}}>
            <Text style={{...category.title, color: colors.orange()}}>
              Tuner
            </Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Distortion</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Delay</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Flanger</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Chorus</Text>
          </View>
          <View style={{...category.item, marginRight: 24}}>
            <Text style={category.title}>Overdrive</Text>
          </View>
        </ScrollView>
      </View>
      <View style={{...itemMenu.cardItem, width: 480}}>
            <ImageBackground
              style={itemMenu.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={gt1}>
              <View style={itemMenu.cardContent}>
                <View style={itemMenu.cardInfo}>
                  <Text style={itemMenu.cardTitle}>
                    Rediscovering Guitar pedal in FakePedal
                  </Text>
                  <Text style={itemMenu.cardText}>since 2023</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.header}>
            <Text style={styles.title}>New Arrival</Text>
          </View>
      <ListBlog />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
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
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal:5
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
})

const ListBlog = () => {
  
  return (
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}>
      <View>

      </View>
      <TouchableOpacity
        style={{
        marginRight: 5,
        backgroundColor: '#fff',
        elevation: 3,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginBottom: 10,
        borderRadius: 15,
        marginLeft: 5,
        }}>
      </TouchableOpacity>

    </FlatList>
  );
};

const itemMenu = StyleSheet.create({
  cardItem: {
    width: 280,
  },
  cardImage: {
    width: '100%',
    height: 240,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 280,
  },
  cardImage: {
    width: 200,
    height: 180,
    resizeMode: 'cover',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});