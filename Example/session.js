import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default class ISection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:25}}>Department List</Text>
        <SectionList
          sections={[
            {title: 'Computer', data: ['Software', 'Embeded', 'Network']},
            {title: 'Electrical', data: [ 'Communication','Control', 'Electronic', 'Power']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
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
})
