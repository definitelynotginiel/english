import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Dashboard() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            
            <ImageBackground
                source={require('../assets/bg image.png')}
                style={styles.imageBackground}>
                <View  style={styles.titlebox}>
                    <Text style={styles.dashtitle}>TOPICS</Text>
                </View>
           
                {/* ( Content ) yung may radius sa left and right */}
                <View  style={styles.Content}>
                    <View style={styles.ContentItems}>
                        <View  style={styles.Items}>
                            <TouchableOpacity  style={styles.btn} onPress={() => navigation.navigate('About')}>
                                <Image source={require('../assets/about us.png')} style={styles.Icon}/>
                            </TouchableOpacity>
                            <TouchableOpacity  style={styles.btn} onPress={() => navigation.navigate('Dashboard')}>
                                <Image source={require('../assets/home btn.png')} style={styles.HomeIcon}/>
                            </TouchableOpacity>
                            <TouchableOpacity  style={styles.btn} onPress={() => navigation.navigate('Login')}>
                                <Image source={require('../assets/log out.png')} style={styles.Icon}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>            
            </ImageBackground>
<StatusBar style="auto" />
        </View>
    );
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#445DAA',
    },
    imageBackground:{
        flex: 1.5,
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%',
    },
    titlebox:{
        width: '100%',
        height: '18%',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 50,
    },
    dashtitle:{
        position: 'absolute',  
        margin: 20, 
        fontSize: 60,
        color: '#ffffff',
        fontFamily: 'sans-serif',
        textShadowColor: '#00000040',
        textShadowOffset: { width: 0, height: 9 },
        textShadowRadius: 6,
    },
    
    Content:{
        backgroundColor: '#B6CCD8',
        width: '100%',
        height: '78%',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
    // Eto yung mag hahandle ng mga figure of speech
    ContentItems:{
        width: '100%',
        height: '100%',

    },

    HomeIcon:{
        width: 72,
        height: 89,
        marginBottom: 70,

    },
    Icon:{
        width: 60,
        height: 70,
        marginBottom: 80,
    },
    // Eto yung nag hahandle nung tatlong clickable
    Items:{
        width: '100%',
        height: '17.5%',
        flexDirection: 'row',
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#313D44',     
        padding: 20,
        top: 540,
    }, 
});