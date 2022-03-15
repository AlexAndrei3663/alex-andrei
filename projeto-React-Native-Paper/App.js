import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Image } from 'react-native';
import { Banner, Colors, DefaultTheme, Drawer, ProgressBar, Provider as PaperProvider, Searchbar } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default function App() {
  const [visible, setVisible] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  
  return (
    <PaperProvider theme={theme}>
      <StatusBar style='auto' hidden={true}/>
      <Banner
        visible={visible}
        actions={[
          {
            label: 'Fix it',
            onPress: () => setVisible(false),
          },
          {
            label: 'Learn more',
            onPress: () => setVisible(false),
          },
        ]}
        icon={({size}) => (
          <Image
            source={{
              uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
            }}
            style={{
              width: size,
              height: size,
            }}
          />
        )}>
        There was a problem processing a transaction on your credit card.
      </Banner>
      <Drawer.Item
        style={{ backgroundColor: '#64ffda' }}
        icon="star"
        label="First Item"
      /> 
      <Drawer.Item
        style={{ backgroundColor: '#d00' }}
        icon="star"
        label="Second Item"
      /> 
      <Drawer.Item
        style={{ backgroundColor: '#630639' }}
        icon="star"
        label="Last Item"
      /> 
      <ProgressBar progress={0.7} color={Colors.red800} />
      <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
    </PaperProvider>
  );
}