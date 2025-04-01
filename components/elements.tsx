import { View, SectionList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { styles } from './../assets/styles';
import { update } from './../api/tasks-call';

const TaskList = (params: any) => {

    const listPress: any = (taskId: any): void => {
      update(taskId);

      params.setTasks((prevTasks: any) =>
        prevTasks.filter((task: any) => task.task_id !== taskId )
      );
    }

    const sectionList: any[] = [];

    for (const element of params.tasks) {
      const existingObject: any = sectionList.find(e => e.date == element.due_date);

      if (existingObject) {
        existingObject.data.push(element);
      } else {
        const addElement: any = {};

        addElement.date = element.due_date;
        addElement.data = [element];
        sectionList.push(addElement);
      }
    }

    return (
      <View>
        <SectionList
            sections={sectionList}
            renderItem={({item}) => <Text style={styles.item}>
              {item.name}
              <TouchableOpacity onPress={() => listPress(item.task_id)} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Done!</Text>
              </TouchableOpacity>
              </Text>  
            }
            renderSectionHeader={({section}) => (
                <Text style={styles.sectionHeader}>
                  {section.date}
                </Text>
            )}
            keyExtractor={item => item.task_id}
        />
      </View>
    );
};
  
export { TaskList };