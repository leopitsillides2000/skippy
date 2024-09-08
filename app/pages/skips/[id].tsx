import { useLocalSearchParams, router } from 'expo-router';
import { View, Text, StyleSheet, Button } from 'react-native';


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
      <Button title='Back' onPress={() => router.back()}>

      </Button>
      {/* TODO = Add image */}
      <Text>ID: {id}</Text>
      <Text>{EXAMPLE_DATA.title}</Text>
      <Text>Location: {EXAMPLE_DATA.location}</Text>
      <Text>Description: {EXAMPLE_DATA.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: 'white'
  },
});