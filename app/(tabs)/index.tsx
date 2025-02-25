import { View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { TaskList } from '@/components/elements';
import { getAll, newDevice } from '../../api/tasks-call';
import { GetAllResponse } from '../../api/interfaces';
import DeviceInfo from 'react-native-device-info';

export default function Index() {

  const [tasks, setTasks] = useState<GetAllResponse>();
  const [deviceId, setDeviceId] = useState('');
  
  useEffect(() => {
    newDevice(DeviceInfo.getDeviceId()).then((result : any) => setDeviceId(result.token));
    
    getAll().then((result : any) => setTasks(result));
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