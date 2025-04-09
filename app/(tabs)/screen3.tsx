import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {X} from 'lucide-react-native';

export default function Screen3() {
    const router=useRouter();
    const captureImage=[
        {
            image: require('@/assets/images/capture.png'),
            text:'image 1',
        },
        {
            image: require('@/assets/images/capture.png'),
            text:'image 2',
        },
        {
            image: require('@/assets/images/capture.png'),
            text:'image 3',
        },
        {
            image: require('@/assets/images/capture.png'),
            text:'image 4',
        },
        {
            image: require('@/assets/images/capture.png'),
            text:'image 5',
        }
    ];

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
                        <X color="#0D9488" size={20} onPress={()=>router.push('/(tabs)/screen1')}/>
                    </View>
                    <Text style={styles.subTitle}>Take Multiple images of right eye</Text>
                </View>

                <View style={styles.imageContainer}>
                    {captureImage.map((item,index)=>(
                        <View style={styles.captureImage}>
                            <Image source={item.image}/>
                            <Text style={styles.text}>{item.text}</Text>
                        </View>
                    ))}
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
        margin:20,
        marginTop: '4%',
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
        fontSize:16,
        color: 'gray',
      },
      text:{
        textAlign: 'center',
        fontSize:12,
        paddingTop:4,
      },
      imageContainer:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 25,
        margin:20,
        marginTop:40,
      },
      captureImage:{
        borderWidth:1,
        borderColor: 'lightgray',
        borderRadius: 2,
        padding: 2,
      },
      buttonContainer:{
        display:'flex',
        flexDirection: 'row',
        justifyContent:'center',
        gap: 18,
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
        backgroundColor: 'gray',
        borderColor: 'gray',
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
