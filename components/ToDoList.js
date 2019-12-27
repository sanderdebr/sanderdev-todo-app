import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { CheckBox } from 'react-native-elements';

const ToDoList = ({ todos, deleteTodo, updateStatus }) => (
    <View>
    {
        todos.map((todo, index) => (
            <View key={index.toString()} style={styles.todoContainer}>
                <CheckBox
                    checkedColor='green'
                    checked={todo.status}
                    onPress={() => {
                        updateStatus(index);
                     }}
                />
                <Text style={styles.headerText}>{todo.title}</Text> 
                <CheckBox
                    checked
                    iconType='material'
                    checkedIcon='delete'
                    checkedColor='red'
                    onPress={() => {
                       deleteTodo(index);
                    }}
                />
            </View>
        ))
    }
    </View>

  );

export default ToDoList;


const styles = StyleSheet.create({

    todoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'#f3f3f3'
    }

});
  