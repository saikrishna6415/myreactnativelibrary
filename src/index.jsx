import { View, Text, StyleSheet } from 'react-native';

export const MyComponent = ({ title = 'Default Title' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});

export default MyComponent;
