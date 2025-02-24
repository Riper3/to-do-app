import { View, StyleSheet } from 'react-native';
import { TaskList } from '@/components/elements';

const testData = [
  {date: '23/02/2025', data: ['Event 1', 'Event 2', 'Event 3']},
  {date: '24/02/2025', data: ['Event 1', 'Event 2', 'Event 3']},
  {date: '25/02/2025', data: ['Event 1', 'Event 2', 'Event 3']},
];

export default function Tasks() {
  return (
    <View style={styles.container}>
      <TaskList data={testData}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#fff',
  },
});