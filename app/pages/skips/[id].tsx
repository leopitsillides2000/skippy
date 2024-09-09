import { Button, Card, Icon } from '@rneui/themed';
import { useLocalSearchParams, router } from 'expo-router';
import { Key } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Header } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function SkipDetail() {
  const { id } = useLocalSearchParams();

  const EXAMPLE_DATA = {
    uuid: {id},
    title: 'The best skip',
    image_id: '',
    description: 'This is the BEST skip EVER!!!!',
    location: 'St George Street, Bristol'
  }
  // TODO - make request to endpoint for skip details

  return (
    <View style={styles.container}>
      <SafeAreaProvider>
      <Header
        backgroundColor='black'
        leftComponent={
          <Icon name="arrow-left" color="white" onPress={() => router.back()}></Icon>
        }
      rightComponent={
          <View>
            {/* <TouchableOpacity> */}
            {/* </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
            > */}
              <Icon type="antdesign" name="rocket1" color="white" />
            {/* </TouchableOpacity> */}
          </View>
      }
      centerComponent={{ text: EXAMPLE_DATA.title, style: styles.heading }}
    />
    </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: "100%"
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
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerBar: {
    backgroundColor: 'black'
  }
});