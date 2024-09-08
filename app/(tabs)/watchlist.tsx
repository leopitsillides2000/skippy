import { Image, StyleSheet, Platform, SafeAreaView,
    ScrollView, 
    StatusBar} from 'react-native';
  import React from 'react';
  import { HelloWave } from '@/components/HelloWave';
  import ParallaxScrollView from '@/components/ParallaxScrollView';
  import { ThemedText } from '@/components/ThemedText';
  import { ThemedView } from '@/components/ThemedView';
  import SkipItems from '@/components/SkipItems';
  import { SearchBar } from '@rneui/themed';
  
  interface Search {
    value: string
  }
  
  export default function Watchlist() {
    const [search, setSearch]= React.useState<Search>({value: ''})
  
    const searchFunction = (text: string ) => {
      setSearch({value: text})
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <SearchBar
          placeholder="Search Here..."
          round
          value={search.value}
          onChangeText={(text: string) => searchFunction(text)}
          autoCorrect={false}
          containerStyle={{backgroundColor: 'black'}}
          // inputStyle={{backgroundColor: 'white'}}
        />
        {/* <ScrollView style={styles.scrollView}> */}
          <SkipItems/>
        {/* </ScrollView> */}
      </SafeAreaView>
    );
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    scrollView: {
      backgroundColor: 'white',
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
  });
  