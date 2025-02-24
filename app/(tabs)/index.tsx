import { View, StyleSheet } from 'react-native';
import { TaskList } from '@/components/elements';

const testData = [
  {date: '23/02/2025', data: ['Event 1', 'Event 2', 'Event 3']},
];

export default function Index() {
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
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});