import {
  Image, StyleSheet, Platform, SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native';
import React from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import SkipItems from '@/components/SkipItems';
import { Header, Icon, SearchBar } from '@rneui/themed';

interface Search {
  value: string
}

export default function Watchlist() {
  const [search, setSearch] = React.useState<Search>({ value: '' })
  const [searchVisible, setSearchVisible] = React.useState<Boolean>(false)

  const searchFunction = (text: string) => {
    setSearch({ value: text })
  };

  const toggleSearchBar = () => {
    setSearchVisible(!searchVisible)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        containerStyle={styles.headerBar}
        leftContainerStyle={{ flex: 3 }}
        leftComponent={{ text: 'My Watchlist', style: styles.heading }}
        rightComponent={<Icon name={searchVisible ? "cancel" : "search"} color="black" onPress={toggleSearchBar} />}
      />

      {searchVisible ? <SearchBar
        placeholder="Search Here..."
        round
        value={search.value}
        onChangeText={(text: string) => searchFunction(text)}
        autoCorrect={false}
        inputContainerStyle={{ backgroundColor: '#FAF9F6' }}
        containerStyle={{ ...styles.headerBar, borderTopColor: 'white', backgroundColor: 'white' }}
      // inputStyle={{backgroundColor: 'white'}}
      /> : null}
      {/* <ScrollView style={styles.scrollView}> */}
      <SkipItems />
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
  searchBar: {
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderTopColor: 'white',
  }
});
