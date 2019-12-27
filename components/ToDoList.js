import React from 'react';

import { View, Text, StyleSheet, TextInput } from 'react-native';

import { CheckBox } from 'react-native-elements';

const ToDoList = ({ todos, deleteTodo, updateStatus, updateToDo }) => (
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
                <TextInput
                    style={todo.status === false ? styles.input : styles.inputDone}
                    editable={!todo.status}
                    value={todo.title}
                    onChangeText={(element) => {
                        updateToDo(index, element)
                    }}
                />
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
    },
    inputDone: {
        borderWidth: 0,
        height: 40,
        color: 'gray',
        textDecorationLine: 'line-through'
    },
    input: {
        borderWidth: 0,
        height: 40
    },

});
  