import { View, SectionList, StyleSheet, Text } from 'react-native'

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
});

const TaskList = (list: any) => {
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
            renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
            renderSectionHeader={({section}) => (
                <Text style={styles.sectionHeader}>{section.date}</Text>
            )}
            keyExtractor={item => item.task_id}
        />
      </View>
    );
};
  
export { TaskList };