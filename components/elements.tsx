import { View, SectionList, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
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
      <ScrollView style={styles.listContainer}>
        <SectionList
          sections={sectionList}
          renderItem={({item}) => (
            <View style={styles.item}>
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.hour}>12:30</Text>
              </View>
              <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={() => listPress(item.task_id)} style={styles.appButtonContainer}>
                  <Text style={styles.appButtonText}>Done!</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeader}>
              {section.date}
            </Text>
          )}
          keyExtractor={item => item.task_id}
        />
      </ScrollView>
    );
};
  
export { TaskList };