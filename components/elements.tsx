import { View, SectionList, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { useEffect, useState } from 'react';
import { update } from './../api/tasks-call';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#25292e",
      paddingHorizontal: 12,
      marginLeft: 20
    },
    appButtonText: {
      fontSize: 12,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
});

const TaskList = (list: any) => {

    const listPress: any = (taskId: any): void => {
      update(taskId);
      // TODO change styles for the clicked element
    }

    const sectionList: any[] = [];

    for (const element of list.data) {
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