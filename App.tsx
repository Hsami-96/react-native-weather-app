import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Thin': require('./assets/fonts/Lato-Thin.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf')
  })
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Text style={styles.placeTitle}>Manchester</Text>
      </View>
      <View style={styles.currentWeatherContainer}></View>
      <View style={styles.todayWeatherContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //full background of the app - covers whole screen using flex 1
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#00165a'
  },
  locationContainer: {
    //this will have text for current location e.g. manchester
    flex: 0.5,
    backgroundColor: 'white',
  },  
  currentWeatherContainer: {
    // row will be split by two column, left will have image of current weather, right will have temperate, humidty etc
    flex: 1,
    backgroundColor: 'red'
  },

  todayWeatherContainer:{
    // a scrollbar in row maybe split into columns of hourly weather in each column
    flex: 1,
    backgroundColor: 'blue'
  },


  placeTitle: {
    fontSize: 50,
    fontFamily: 'Lato-Thin',
    color: 'black'
  },
  weatherWrapper: {
    flex: 1,
    backgroundColor: 'red',
    borderRadius: 5,
  }

});
