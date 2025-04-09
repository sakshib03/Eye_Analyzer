import { View,Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScanEye } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const index = () => {
  const router=useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/screen1')}>
        <Image source={require('@/assets/images/icon-container.png')} style={styles.icon}/>
        <Text style={styles.label}>Scan</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    borderTopWidth:1,
    borderTopColor:'gray',
    width:'100%',
    paddingTop:10,
  },
  icon: {
    width: 40,
    height: 40,
    tintColor: 'gray',
    resizeMode: 'contain',
  },
  label: {
    fontSize: 18,
    color: 'gray',
  },
})

export default index;
