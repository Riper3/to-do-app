import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { TaskList } from '@/components/elements';
import { getAll, newDevice, insert } from '../../api/tasks-call';
import { GetAllResponse } from '../../api/interfaces';
import DeviceInfo from 'react-native-device-info';
import { styles } from '../../assets/styles';

export default function Index() {

  const [tasks, setTasks] = useState<GetAllResponse>([]);
  const [token, setToken] = useState('');
  const [dueDate, onChangeDueDate] = useState('');
  const [name, onChangeName] = useState('');
  
  useEffect(() => {
    newDevice(DeviceInfo.getDeviceId()).then((result : any) => setToken(result.token));
    
    getAll().then((result : any) => setTasks(result));
  }, []);

  const insertEvent: any = async (): Promise<any> => {
    const newTask = await insert(dueDate, name);

    setTasks((prevTasks) => [...prevTasks, ...newTask]);

    onChangeDueDate('');
    onChangeName('');
  }

  return (
    <View style={styles.container}>
      {tasks.length 
      ? 
      <View style={styles.container}>
        <Text style={styles.titleText}>Events</Text>
        <TaskList tasks={tasks} setTasks={setTasks}/>
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

        <TouchableOpacity onPress={insertEvent} style={styles.appButtonContainerNoMargin}>
          <Text style={styles.appButtonText}>New Event</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}