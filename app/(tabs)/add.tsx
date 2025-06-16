import CustomTextInput from '@/components/CustomTextInput';
import DropdownComponent from '@/components/Dropdown';
import FormInput from '@/components/FormInput';
import { Divider, Input } from '@rneui/themed';
import * as React from 'react';
import { Form, FormProvider, useForm } from 'react-hook-form';
import { View, useWindowDimensions, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import SkipDetail from '../pages/skips/[id]';
import GLOBAL from "@/global";
import ImageUpload from '@/components/ImageUpload';

type FormData = {
  firstName: string
  lastName: string
}

export type AddData = {
  title: string,
  description: string
}

const FirstRoute = (props: { data: AddData, setData: React.Dispatch<React.SetStateAction<AddData>> }) => {

  const setTitle = (text: string) => {
    props.setData({ ...props.data, title: text })
  }
  const setDescription = (text: string) => {
    props.setData({ ...props.data, description: text })
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Add image input */}
      <ImageUpload />
      <Divider style={{ margin: 10 }} />
      <CustomTextInput
        label="Title"
        text={props.data.title}
        setText={setTitle}
        placeholder='Add title here...'
      />

      <CustomTextInput
        label="Description"
        text={props.data.description}
        setText={setDescription}
        placeholder='Add description here...'
        height={100}
      />
    </View>
  );
};

const SecondRoute = (props: { data: AddData }) => (
  <View style={{ flex: 1, backgroundColor: 'white' }}>
    <SkipDetail isEdit data={props.data} />
  </View>
);

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
// });



const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'black' }}
    style={{ backgroundColor: '#FAF9F6' }}
    activeColor='black'
    inactiveColor='grey'
  />
);

export default function Add() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Edit' },
    { key: 'second', title: 'Preview' },
  ]);

  const [data, setData] = React.useState<AddData>({ title: "", description: "" })

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute data={data} setData={setData} />;
      case 'second':
        return <SecondRoute data={data} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.75,
    padding: 10,
    borderColor: "gray",
    borderRadius: 7
  },
});
