import {ScrollView, StyleSheet, Text, View,ActivityIndicator, TouchableOpacity, Image,Animated,RefreshControl} from 'react-native';
import { fontType, colors } from '../../theme';
import {SearchNormal1,Category, MoneyAdd} from 'iconsax-react-native';
import { mt2w, re2, p2,  } from '../../assets/img';
import {useNavigation,useFocusEffect} from '@react-navigation/native';
import React, {useRef,useState,useCallback,useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import Item from '../../components/Item';
const Keranjang = () => {
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 142);
  const recentY = diffClampY.interpolate({
      inputRange: [0, 142],
      outputRange: [0, -142],
      extrapolate: 'clamp',
    });
    const [loading, setLoading] = useState(true);
    const [itemData, setItemData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
      const subscriber = firestore()
        .collection('item')
        .onSnapshot(querySnapshot => {
          const item = [];
          querySnapshot.forEach(documentSnapshot => {
            item.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setItemData(item);
          setLoading(false);
        });
      return () => subscriber();
    }, []);
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        firestore()
          .collection('item')
          .onSnapshot(querySnapshot => {
            const item = [];
            querySnapshot.forEach(documentSnapshot => {
              item.push({
                ...documentSnapshot.data(),
                id: documentSnapshot.id,
              });
            });
            setItemData(itemData);
          });
        setRefreshing(false);
      }, 1500);
    }, []);
    return(
      <View>
        <Animated.ScrollView
      showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{paddingTop: -1}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
      <View style={styles.container}>
            <Animated.View style={[styles.header,{transform:[{translateY:recentY}]}]}>
              <TouchableOpacity style={styles.bar} onPress={() => navigation.navigate("Search")}>
                  <SearchNormal1 size={18} color={colors.grey(0.5)} variant="Linear" />
                  <Text style={styles.placeholder}>Search</Text>
              </TouchableOpacity>
            </Animated.View>
            <View style={{padding: 6,marginTop: 100,}}>
              <Text style={recent.text}>Recent Search</Text>
              <Text style={recent.text}>No History Found</Text>
            </View>
            {loading ? (
                <ActivityIndicator size={'large'} color={'black'}/>
              ) : (
                itemData.map((item, index) => <Item item={item} key={index}/>)
              )}
          </View>
      </Animated.ScrollView>
      <TouchableOpacity style={{padding: 20, position:'absolute', top: 630,right: 20, backgroundColor:'white',borderRadius: 20}} onPress={() => navigation.navigate("ItemSell")}>
          <MoneyAdd size="30"  color="#2D2C2C" variant='Linear'/>
      </TouchableOpacity>
      </View>
    );
};

export default Keranjang;
const styles = StyleSheet.create({
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
