import { View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { TaskList } from '@/components/elements';
import { getAll } from '../../api/tasks-call';
import { GetAllResponse } from '../../api/interfaces';

export default function Index() {

  const [tasks, setTasks] = useState<GetAllResponse>();
  
  useEffect(() => {
    getAll().then(result => setTasks(result));
  }, []);

  return (
    tasks ?
    <View style={styles.container}>
      <TaskList data={tasks}/>
    </View>
    : null
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});