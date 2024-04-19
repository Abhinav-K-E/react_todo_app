import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';

//importing styles
import styles from './App.styles';

import Header from './components/Header';
import CardTodo from './components/CardTodo/CardTodo';

export default function App() {
  const TodoList = [
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
  ];
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.body}>
          {
            TodoList.map((todo)=>(
              <CardTodo todo={todo} key={todo.id}/>
            ))
          }
        </View>
        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
