import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

//importing styles
import styles from './App.styles';

import Header from './components/Header';
import CardTodo from './components/CardTodo/CardTodo';
import { useState } from 'react';

export default function App() {
  const [TodoList, setTodoList] = useState([
    {
      id: 1,
      title: 'task01',
      isCompleted: true,
    },
    {
      id: 2,
      title: 'task02',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'task03',
      isCompleted: true,
    },
    {
      id: 4,
      title: 'task01',
      isCompleted: true,
    },
    {
      id: 5,
      title: 'task02',
      isCompleted: false,
    },
    {
      id: 6,
      title: 'task03',
      isCompleted: true,
    },
    {
      id: 7,
      title: 'task01',
      isCompleted: true,
    },
    {
      id: 8,
      title: 'task02',
      isCompleted: false,
    },
    {
      id: 9,
      title: 'task03',
      isCompleted: true,
    },
  ]);

  const [selectedTab, setSelectedTab] = useState('All');

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

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.body}>
          <ScrollView>
            {getFilteredList().map((todo) => (
              <CardTodo todo={todo} key={todo.id} updateTodo={updateTodo} />
            ))}
          </ScrollView>
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
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
