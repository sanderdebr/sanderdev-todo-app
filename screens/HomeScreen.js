import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
  Text,
} from 'react-native';

import { Button, ThemeProvider, Input, CheckBox } from 'react-native-elements';

const theme = {
  Button: {
    titleStyle: {
      color: 'white',
    },
    linearGradientProps: {
      colors: ['#667eea', '#764ba2'],
      start: { x: 0, y: 0.5 },
      end: { x: 1, y: 0.5 },
    },
  },
};

export default function HomeScreen() {

  const [value, onChangeText] = React.useState('');  
  const [checked, setChecked] = React.useState(false);

  const [todos, updateTodos] = React.useState(
        [
            {
                id: 0,
                status: false,
                date: '31-01-2019',
                title: 'Learn React Native'
            },
            {
                id: 1,
                status: true,
                date: '1-02-2019',
                title: 'Teach JS'
            }
        ]
  );

  return (
    
    <SafeAreaView style={styles.container}>

      {/* Scrollable area */}
      <ScrollView>
        <ThemeProvider theme={theme}>

            <View style={styles.addTodoContainer}>

                <Text style={{fontSize: 30, fontWeight: 'bold', paddingBottom: 5}}>SanderDev ToDo</Text> 
                <Input 
                    onChangeText={text => onChangeText(text)}
                    placeholder='Add a ToDo'
                />
                <Button title="Add ToDo" />

            </View>

            <View style={styles.toDoList}>

                {
                    todos.map(todo => {
                        return (
                            <CheckBox
                                checkedColor='green'
                                title={todo.title}
                                checked={todo.status}
                                onPress={() => setChecked(!checked)}
                            />
                        )
                    })
                }

            </View>

            <View style={styles.container}>
                <Text>{value}</Text> 
            </View> 

        </ThemeProvider>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          This is a tab bar. You can edit it in:
        </Text>
      </View>
      
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({

  headerText: {
      fontSize: 30,
      textAlign: 'left',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 30,
  },
  addTodoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 160,
    paddingTop: 15,
    paddingBottom: 30,
    paddingRight: 15,
    paddingLeft: 15
  },
  toDoList: {
    paddingLeft: 5,
    paddingRight: 5
  },

  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
