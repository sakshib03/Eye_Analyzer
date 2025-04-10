import { useRouter } from 'expo-router';
import { X } from 'lucide-react-native';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable} from 'react-native';

export default function Screen1() {
    const router=useRouter();

    const [isSelected, setIsSelected]=useState(false);
    const [isSelected2, setIsSelected2]=useState(false);

    const handlePress1=()=>{
        setIsSelected(!isSelected);
        router.push('/(tabs)/screen2');
    }

    const handlePress2=()=>{
        setIsSelected2(!isSelected);
        router.push('/(tabs)/screen3');
    }

    const handlePressButton1=()=>{
        console.log('Cancel Pressed!');
    }
    const handlePressButton2=()=>{
        console.log('Proceed Pressed!');
    }
  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <View>
                <View style={styles.heading}>
                    <Text style={styles.title}>Scan</Text>
                    <X color="#0D9488" size={20} onPress={()=>router.push('/(tabs)')}/>
                </View>
                <Text style={styles.subTitle}>Capture images of both eyes</Text>
            </View>

            <View style={styles.imageContainer}>
                <Pressable onPress={handlePress1}>
                    <View 
                        style={[isSelected && styles.selectedBorder]}>
                        <Image source={require('@/assets/images/left-eye.png')} style={styles.image}/>
                        <Text style={styles.text}>Capture Left Eye</Text>
                    </View>
                </Pressable>

                <Pressable onPress={handlePress2}>
                    <View 
                        style={[isSelected2 && styles.selectedBorder]}>
                        <Image source={require('@/assets/images/right-eye.png')} style={styles.image}/>
                        <Text style={styles.text}>Capture Right Eye</Text>
                    </View>
                </Pressable>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handlePressButton1}>
                    <Text style={styles.buttonText}>Cancle</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button1} onPress={handlePressButton2}>
                    <Text style={styles.buttonText1}>Proceed</Text>
                </TouchableOpacity>  
            </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer:{
    padding:20,
    margin:40,
    marginTop: '50%',
    borderWidth:1,
    borderColor: 'gray', 
  },
  imageContainer:{
    display:'flex',
    flexDirection: 'row',
    gap: 26,
    marginTop: 30,
  },
  image:{
    width:120,
  },
  selectedBorder:{
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 6,
    padding: 8,
  },
  text:{
    textAlign: 'center',
    fontSize:12,
    paddingTop:4,
    color: 'gray',
  },
  heading:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  subTitle:{
    marginTop:4,
    fontSize:14,
    color: 'gray',
  },
  buttonContainer:{
    display:'flex',
    flexDirection: 'row',
    justifyContent:'center',
    gap: 22,
    marginTop: 30,
    marginLeft:10,
  },
  button:{
    backgroundColor: 'white',
    borderColor: '#0D9488',
    padding:8,
    borderWidth: 1,
    borderRadius: 6, 
  },
  button1:{
    backgroundColor: '#0D9488',
    borderColor: '#0D9488',
    padding:8,
    borderWidth: 1,
    borderRadius: 6, 
  },
  buttonText:{
    color: '#0D9488',
    fontSize: 14,
    fontWeight: 'medium',
  },
  buttonText1:{
    color: 'white',
    fontSize: 14,
    fontWeight: 'medium',
  }
});
