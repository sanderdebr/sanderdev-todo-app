import React from 'react';
import { useState } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
  Text,
} from 'react-native';

import { Button, ThemeProvider, Input, CheckBox } from 'react-native-elements';

import ToDoList from '../components/ToDoList.js';

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

  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const saveTodo =  (todoText) => {
    const trimmedText = todoText.trim();
    const todo = {
      title: trimmedText,
      status: false
    }
    if (trimmedText.length > 0) {
      setTodos([...todos, todo]);
    }
    setValue('');
  }

  const updateStatus = (todoIndex) => {
    const newTodos = todos;
    newTodos[todoIndex].status = !newTodos[todoIndex].status;
    setTodos(newTodos);
  };


  const deleteTodo = (todoIndex) => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);
      setTodos(newTodos);
  }

  return (
    
    <SafeAreaView style={styles.container}>

      {/* Scrollable area */}
      <ScrollView>
            <View style={styles.addTodoContainer}>

            <ThemeProvider theme={theme}>

                <Text style={{fontSize: 30, fontWeight: 'bold', paddingBottom: 5}}>SanderDev ToDo</Text> 
                <Input 
                    value={value}
                    placeholder='Add a ToDo'
                    onChange={(event) => {
                      setValue(event.target.value);
                    }}
                />
                <Button title="Add ToDo" onPress={() => saveTodo(value)} />

                </ThemeProvider>

            </View>

            <ToDoList 
              todos={todos} 
              deleteTodo={(todoIndex) => deleteTodo(todoIndex)}
              updateStatus={(todoIndex) => updateStatus(todoIndex)}
            />

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
