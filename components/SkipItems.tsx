import { Link } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';

export const DATA = [
  {
    uuid: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Skip 1',
    image_id: '',
    description: 'This is a skip with wood'
  },
  {
    uuid: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Skip 2',
    image_id: '',
    description: 'This is a bad skip'
  },
  {
    uuid: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Skip 3',
    image_id: '',
    description: 'This is a nice skip'
  },
  {
    uuid: '68694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Skip 4',
    image_id: '',
    description: 'This is a nice skip'
  },
  {
    uuid: '78694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Skip 5',
    image_id: '',
    description: 'This is a nice skip'
  },
  {
    uuid: '88694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Skip 6',
    image_id: '',
    description: 'This is a nice skip'
  },
  {
    uuid: '98694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Skip 7',
    image_id: '',
    description: 'This is a nice skip'
  },
];

type ItemProps = {uuid: string, title: string, description: string};

const SkipItem = ({uuid, title, description}: ItemProps) => (
  
  <View>
    <Link href={{
    pathname: '/pages/skips/[id]',
    params: { id: uuid }
  }}
  style={styles.item}
  >
    {/* <Image
        source={require('../assets/images/skip-test-image.jpg')}
        style={{resizeMode: 'contain'}}
      /> */}
    <Text style={styles.title}>{title}</Text>
    <Text>{description}</Text>
    </Link>
  </View>

);

const SkipItems = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <SkipItem uuid={item.uuid} title={item.title} description={item.description} />}
        keyExtractor={item => item.uuid}
        style={styles.scrollView}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#FAF9F6',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#D3D3D3'
  },
  scrollView: {
    backgroundColor: 'white'
  },
  title: {
    fontSize: 32,
  },
});

export default SkipItems;