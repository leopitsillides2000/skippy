import { Avatar, Button, Card, Divider, Icon, ListItem } from '@rneui/themed';
import { useLocalSearchParams, router } from 'expo-router';
import { Key } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList, ActivityIndicator, Image, SafeAreaView, StatusBar } from 'react-native';
import { Header } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FAB } from '@rneui/themed';
import { AddData } from '@/app/(tabs)/add';

interface SkipDetailProps {
  isEdit?: boolean
  data?: AddData
}
export default function SkipDetail(props: SkipDetailProps) {
  const { id } = useLocalSearchParams();

  const EXAMPLE_DATA = {
    uuid: { id },
    title: 'The best skip',
    image_id: '',
    items: ['Wood', 'Sink', 'Bathtub', 'Lights'],
    description: 'This is the BEST skip EVER!!!! There are so many cool things in this skip I wish I found it sooner',
    location: 'St George Street, Bristol',
    user: { uuid: '1', username: 'SkipManShamalam' }
  }
  // TODO - make request to endpoint for skip details

  return (
    <SafeAreaView style={styles.container}>
      <Header
        containerStyle={styles.headerBar}
        leftComponent={
          props.isEdit ? undefined : <Icon name="arrow-left" color="black" onPress={() => router.back()}></Icon>
        }
        centerComponent={{ text: props.isEdit && props.data ? props.data.title : EXAMPLE_DATA.title, style: styles.heading }}
      />
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={styles.item}>
          <Image
            style={styles.image}
            source={require('@/assets/images/favicon.png')}
          />
        </View>
        <ListItem>
          <Avatar
            rounded
            size={50}
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
          <ListItem.Content>
            <ListItem.Title style={styles.listTitle}>User</ListItem.Title>
            <ListItem.Subtitle style={styles.listSubTitle}>{EXAMPLE_DATA.user.username}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <Divider style={styles.divider} />
        <ListItem>
          <ListItem.Content>
            <ListItem.Title style={styles.listTitle}>Items</ListItem.Title>
            <FlatList
              data={EXAMPLE_DATA.items}
              renderItem={({ item, index }) =>
                // <View style={{ flex: 1 }}>
                //   <Text>{item}</Text>
                // </View>
                <ListItem.Subtitle style={styles.listSubTitle}>{`\u2043 ${item}`}</ListItem.Subtitle>
              }
              keyExtractor={item => `${item}`}
              showsHorizontalScrollIndicator={false}
              numColumns={3}
            />
          </ListItem.Content>
        </ListItem>
        <Divider style={styles.divider} />
        <ListItem>
          <ListItem.Content>
            <ListItem.Title style={styles.listTitle}>Description</ListItem.Title>
            <></>
            <ListItem.Subtitle style={styles.listSubTitle}>{props.isEdit && props.data ? props.data.description : EXAMPLE_DATA.description}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </ScrollView>
      {props.isEdit ? undefined : <FAB
        visible={true}
        title="Get location"
        // onPress={}
        upperCase
        icon={{ name: 'place', color: 'white' }}
        style={styles.floatinBtn}
      />}
    </SafeAreaView>
  );
}

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
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: '#D3D3D3'
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerBar: {
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  floatinBtn: {
    position: 'absolute',
    bottom: 10,
    right: 100,
    left: 100
  },
  image: {
    margin: 30,
    aspectRatio: 1,
    alignSelf: 'center'
  },
  listSubTitle: { margin: 5 },
  listTitle: { margin: 5, fontWeight: 'bold' },
  divider: { marginLeft: 20, marginRight: 20 }
});