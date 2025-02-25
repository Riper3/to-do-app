import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { TaskList } from '@/components/elements';
import { getAll, newDevice, insert } from '../../api/tasks-call';
import { GetAllResponse } from '../../api/interfaces';
import DeviceInfo from 'react-native-device-info';

export default function Index() {

  const [tasks, setTasks] = useState<GetAllResponse>([]);
  const [deviceId, setDeviceId] = useState('');
  const [dueDate, onChangeDueDate] = useState('');
  const [name, onChangeName] = useState('');
  
  useEffect(() => {
    newDevice(DeviceInfo.getDeviceId()).then((result : any) => setDeviceId(result.token));
    
    getAll().then((result : any) => setTasks(result));
  }, []);

  const insertEvent: any = (taskId: any): void => {
    insert(dueDate, name);

    getAll().then((result : any) => setTasks(result));
  }

  return (
    <View style={styles.container}>
      {tasks.length 
      ? 
      <View style={styles.container}>
        <Text style={styles.titleText}>Events</Text>
        <TaskList data={tasks}/>
      </View>
      : 
      <Text>No events</Text>}

      <View style={styles.container}>
        <Text style={styles.titleText}>Insert event</Text>

        <TextInput 
          placeholder="yyyy-mm-dd"
          value= {dueDate} 
          onChangeText={onChangeDueDate}
          />
        <TextInput
          placeholder="Name"
          value= {name} 
          onChangeText={onChangeName}
        />

        <TouchableOpacity onPress={insertEvent} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>New Event</Text>
        </TouchableOpacity>
      </View>
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
  titleText: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#25292e",
    paddingHorizontal: 2,
  },
  appButtonText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});