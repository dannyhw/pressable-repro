import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';

/**
 * Pressing twice in the same spot will put the red dot in the top left corner with a locationX and Y of 9
 * Pressing on the text will put the red dot in some random place (probably relative to the text)
 */

function App(): JSX.Element {
  const [coords, setCoords] = useState({x: 0, y: 0});

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: 16}}>
          <Pressable
            onPress={e => {
              console.log({
                x: e.nativeEvent.locationX,
                y: e.nativeEvent.locationY,
                pagex: e.nativeEvent.pageX,
                pagey: e.nativeEvent.pageY,
              });

              setCoords({
                x: e.nativeEvent.locationX - 10,
                y: e.nativeEvent.locationY - 10,
              });
            }}
            style={{
              paddingHorizontal: 32,
              paddingVertical: 16,
              borderColor: 'lightgrey',
              borderWidth: 1,
              alignItems: 'center',
            }}>
            <Text>Pressable</Text>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: 'red',
                transform: [{translateX: coords.x}, {translateY: coords.y}],
              }}
            />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
