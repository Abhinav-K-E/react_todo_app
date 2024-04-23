import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {
  Alert,
  ScrollView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

import Dialog from 'react-native-dialog';

//importing styles
import styles from './App.styles';

import Header from './components/Header';
import CardTodo from './components/CardTodo/CardTodo';
import { useEffect, useState } from 'react';
import { AddButton } from './components/AddButton/AddButton';

import uuid from 'react-native-uuid';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [TodoList, setTodoList] = useState([]);

  // fetch from async storage
  useEffect(()=>{
    loadData();
  },[])

  const [selectedTab, setSelectedTab] = useState('All');
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [inputText, setInputText] = useState('');

  // update isComplete
  const updateTodo = (todo) => {
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    const updatedList = [...TodoList];
    const updateIndex = updatedList.findIndex(
      (item) => item.id === updatedTodo.id
    );

    updatedList[updateIndex] = updatedTodo;
    setTodoList(updatedList);
    console.log(updatedTodo);
  };

  const getFilteredList = () => {
    switch (selectedTab) {
      case 'All':
        return TodoList;
      case 'In progress':
        return TodoList.filter((item) => item.isCompleted == false);
      case 'Done':
        return TodoList.filter((item) => item.isCompleted == true);
    }
  };

  const deleteTodo = (todo) => {
    console.log(todo.id);
    Alert.alert('Delete Todo', 'Are you sure ? ', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: '',
      },
      {
        text: 'OK',
        onPress: () => {
          const updatedList = TodoList.filter((item) => item.id != todo.id);
          setTodoList(updatedList);
        },
      },
    ]);
  };

  const showAdd = () => {
    setShowAddDialog(true);
  };

  const addTodo = () => {
    const newTodo = {
      id: uuid.v4(),
      title: inputText,
      isCompleted: false,
    };
    setTodoList((prev) => [newTodo, ...prev]);
    setShowAddDialog(false);
    setInputText('');
  };

  // for async storage
  const loadData = async () => {
    console.log('load');
    try {
      const todos = await AsyncStorage.getItem('todos');
      setTodoList((JSON.parse(todos)) || []);
    } catch (err) {}
  };

  const saveData = async () => {
    console.log('save');
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(TodoList));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    saveData();
  }, [TodoList]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.body}>
          <ScrollView>
            {getFilteredList().map((todo) => (
              <CardTodo
                todo={todo}
                key={todo.id}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            ))}
          </ScrollView>
          <AddButton showAdd={showAdd} />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => setSelectedTab('All')}
            style={styles.tab}
          >
            <Text
              style={
                selectedTab == 'All' && { color: 'blue', fontWeight: '500' }
              }
            >
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTab('In progress')}
            style={styles.tab}
          >
            <Text
              style={
                selectedTab == 'In progress' && {
                  color: 'blue',
                  fontWeight: '500',
                }
              }
            >
              In progress
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedTab('Done');
            }}
            style={styles.tab}
          >
            <Text
              style={
                selectedTab == 'Done' && {
                  color: 'blue',
                  fontWeight: '500',
                }
              }
            >
              Done
            </Text>
          </TouchableOpacity>
          <View>
            <Dialog.Container
              onBackdropPress={() => setShowAddDialog(false)}
              visible={showAddDialog}
            >
              <Dialog.Title>Add Todo</Dialog.Title>
              <Dialog.Description>Add your task ⚡</Dialog.Description>
              <Dialog.Input
                onChangeText={(text) => setInputText(text)}
                placeholder='Ex : New task'
              />
              <Dialog.Button
                onPress={() => setShowAddDialog(false)}
                label='Cancel'
                color='grey'
              />
              <Dialog.Button label='save' onPress={addTodo} />
            </Dialog.Container>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
