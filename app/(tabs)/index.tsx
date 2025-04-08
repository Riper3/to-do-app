import { Text, View, TextInput, TouchableOpacity, Modal } from 'react-native';
import { useEffect, useState } from 'react';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
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
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  
  useEffect(() => {
    newDevice(DeviceInfo.getDeviceId()).then((result : any) => setToken(result.token));
    
    getAll().then((result : any) => setTasks(result));
  }, []);

  const insertEvent: any = async (): Promise<any> => {
    const newTask = await insert(dueDate, name);

    setTasks((prevTasks) => [...prevTasks, ...newTask]);

    closeModal();
    onChangeDueDate('');
    onChangeName('');
  }

  return (
    <View style={styles.container}>
      {tasks?.length 
      ? 
      <View style={styles.container}>
        <Text style={styles.titleText}>Events</Text>
        <TaskList tasks={tasks} setTasks={setTasks}/>
      </View>
      : 
      <Text>No events</Text>}

      <Modal 
        style={styles.formContainer}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <Text style={styles.titleText}>Insert event</Text>

        <TouchableOpacity onPress={closeModal} style={styles.btnCloseModal}>
          <Text>X</Text>
        </TouchableOpacity>

        <Calendar
          onDayPress={(day: any) => {
            onChangeDueDate(day.dateString);
          }}

          markedDates={{
            [dueDate]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
          }}
        />
        
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={onChangeName}
          style={styles.input}
        />

        <TouchableOpacity onPress={insertEvent} style={styles.appButtonContainerForm}>
          <Text style={styles.appButtonText}>New Event</Text>
        </TouchableOpacity>
      </Modal>
      
      <TouchableOpacity onPress={openModal} style={styles.btnInsertEvent}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
}