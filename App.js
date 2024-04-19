import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, Text, View } from 'react-native';

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

  // update isComplete
  const updateTodo = (todo) => {
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    const updatedList  = [...TodoList];
    const updateIndex = updatedList.findIndex((item)=>item.id===updatedTodo.id);

    updatedList[updateIndex] = updatedTodo;
    setTodoList(updatedList);
    console.log(updatedTodo);
  };
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.body}>
          <ScrollView>
            {TodoList.map((todo) => (
              <CardTodo todo={todo} key={todo.id} updateTodo={updateTodo} />
            ))}
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
