import React from 'react';
import { exp } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { Text } from 'react-native';
import { Button } from 'react-native';
import { RouteParamList, RouteStackParamList } from './RouteParamList';
import { StyleSheet} from 'react-native';

interface RoutesProps {

}

function HomeScreen({navigation, route}: RouteStackParamList<"Home">) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>
        <Button
        title="Go to Page1"
        onPress={() => navigation.navigate('Page1')}
      />
      <Button
        title="Go to Page2"
        onPress={() => navigation.navigate('Page2')}
      />
      <Button
        title="Go to Page3"
        onPress={() => navigation.navigate('Page3')}
      />
      <Button
        title="Go to Page4"
        onPress={() => navigation.navigate('Page4')}
      />
      <Button
        title="Go to Page5"
        onPress={() => navigation.navigate('Page5')}
      />
      <Button
        title="Go to Page6"
        onPress={() => navigation.navigate('Page6')}
      />
      </View>
    );
  }

  function Page1({navigation, route}: RouteStackParamList<"Page1">) {
    return (
      <View>
          <View style={styles1.wrapper}>
                <View>
                    <View style={styles1.box1}></View>
                    <View style={styles1.box2}></View>
                    <View style={styles1.box3}></View>
                </View>
                
                <View >
                    <View style={styles1.box1}></View>
                    <View style={styles1.box2}></View>
                    <View style={styles1.box3}></View>
                </View>

                <View >
                    <View style={styles1.box1}></View>
                    <View style={styles1.box2}></View>
                    <View style={styles1.box3}></View>
                </View>
        </View>
        <View style={styles1.box4}></View>
      </View>
      
      
    );
  }

  function Page2({navigation, route}: RouteStackParamList<"Page2">) {
    return (
        <View style={styles2.wrapper}>
            <View style={styles2.box1}></View>
            <View style={styles2.box2}></View>
            <View style={styles2.box3}></View>
    </View>
    );
  }

  function Page3({navigation, route}: RouteStackParamList<"Page3">) {
    return (
        <View style={styles3.wrapper}>
            <View style={styles3.box1}></View>
            <Text style={styles3.gap}></Text>
            <View style={styles3.box2}></View>
            <View style={styles3.box3}></View>
        </View>
    );
  }

  function Page4({navigation, route}: RouteStackParamList<"Page4">) {
    return (
        <View>
        <View style={styles4.wrapper}>
              <View>
                  <View style={styles4.box1}></View>
                  <View style={styles4.box2}></View>
                  <View style={styles4.box3}></View>
                  <View style={styles4.box5}></View>
              </View>
              
      </View>
      <View style={styles4.box4}></View>
    </View>
    );
  }

  function Page5({navigation, route}: RouteStackParamList<"Page5">) {
    return (
        <View>
        <View style={styles5.wrapper}>
              <View>
                  <View style={styles5.box1}></View>
                  <View style={styles5.box2}></View>
                  <View style={styles5.box3}></View>
                  <View style={styles5.box4}></View>
              </View>       
      </View>
    </View>
    );
  }

  function Page6({navigation, route}: RouteStackParamList<"Page6">) {
    return (
        <View>
        <View>
              <View>
                  <View style={styles6.box5}></View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent:'space-around', borderWidth:2, borderColor:'black', padding:10}}>
                <View style={{ height: 80, width: 80, backgroundColor: 'blue' }} />
                <View style={{ height: 80, width: 80, backgroundColor: 'red' }} />
                <View style={{ height: 80, width: 80, backgroundColor: 'black' }} />
                <View style={{ height: 80, width: 80, backgroundColor: 'green' }} />
        </View>
      </View>
    </View>
    );
  }

const styles1 = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-around',
  
    },
    box1:{
        backgroundColor:'blue',
        width:100,
        height:100,
        marginBottom:10

    },
    box2:{
        backgroundColor:'red',
        width:100,
        height:100,
        marginBottom:10

    },
    box3:{
        backgroundColor:'green',
        width:100,
        height:100,
        marginBottom:10

    },
    box4:{
        backgroundColor:'yellow',
        width:100,
        height:100,
        marginBottom:10,
        marginLeft:300,
        marginTop:600

    }
})


const styles2 = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'column',
        justifyContent:'space-evenly',
  
    },
    box1:{
        backgroundColor:'blue',
        width:500,
        height:100,

    },
    box2:{
        backgroundColor:'red',
        width:500,
        height:500

    },
    box3:{
        backgroundColor:'green',
        width:500,
        height:100

    }
})

const styles3 = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'column',
        justifyContent:'space-evenly',
        padding:10
  
    },
    box1:{
        marginTop:400,
        backgroundColor:'blue',
        width:400,
        height:50,
        marginBottom:100

    },
    box2:{
        backgroundColor:'red',
        width:400,
        height:50

    },
    box3:{
        backgroundColor:'green',
        width:400,
        height:50

    },
    gap:{
        marginBottom:50
    }
})

const styles4 = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-around',  
         padding:10
  
    },
    box1:{
        backgroundColor:'blue',
        width:500,
        height:100,
        marginBottom:10,

    },
    box2:{
        backgroundColor:'red',
        width:500,
        height:100,
        marginBottom:10

    },
    box3:{
        backgroundColor:'green',
        width:500,
        height:100,
        marginBottom:10

    },
    box5:{
        backgroundColor:'green',
        width:500,
        height:100,
        marginBottom:10

    },
    box4:{
        backgroundColor:'yellow',
        width:100,
        height:100,
        marginBottom:10,
        marginLeft:300,
        marginTop:600

    }
})


const styles5 = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-around',  
         padding:10
  
    },
    box1:{
        backgroundColor:'blue',
        width:100,
        height:100,
        marginBottom:10,
        marginLeft:300

    },
    box2:{
        backgroundColor:'red',
        width:400,
        height:130,
        marginBottom:350,
        marginLeft:10

    },
    box3:{
        backgroundColor:'green',
        width:400,
        height:80,
        marginBottom:10,
        marginLeft:10

    },
    box4:{
        backgroundColor:'green',
        width:400,
        height:50,
        marginBottom:10,
        marginLeft:10

    },
})

const styles6 = StyleSheet.create({
   
    box5:{
        backgroundColor:'yellow',
        width:400,
        height:600,
        marginBottom:10,
        marginLeft:15,
        borderWidth:2,
         borderColor:'black'

    }
})

export const Routes: React.FC<RoutesProps> = ({}) => {
    const Stack = createStackNavigator<RouteParamList>();
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Page1" component={Page1} />
            <Stack.Screen name="Page2" component={Page2} />
            <Stack.Screen name="Page3" component={Page3} />
            <Stack.Screen name="Page4" component={Page4} />
            <Stack.Screen name="Page5" component={Page5} />
            <Stack.Screen name="Page6" component={Page6} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}