import { StyleSheet, SafeAreaView } from 'react-native';

import MapView, { Marker, Heatmap, PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';

export default function Map() {
  return (
    <SafeAreaView style={styles.container}>

      <MapView
        provider={PROVIDER_DEFAULT}
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* <Heatmap /> */}
        {/* <Marker coordinate={{
          latitude: 37.78825,
          longitude: -122.4324,
        }} /> */}
      </MapView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
