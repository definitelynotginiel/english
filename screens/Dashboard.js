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
                    <Image source={require('../assets/profile icon.png')} style={{position: 'absolute', right: 10, top: 20}}/>
                <View  style={styles.titlebox}>
                    <Text style={styles.dashtitle}>TOPICS</Text>
                </View>
           
                {/* ( Content ) yung may radius sa left and right */}
                <View  style={styles.Content}>
                    <View style={styles.lessonsbox}>
                        <View style={styles.lessons}>
                            <Text style={styles.lessonstxt}>Figures of Speech</Text>
                            </View>
                            <View style={styles.lessons}>
                            <Text style={styles.lessonstxt}>Parts of Speech</Text>
                            </View>                           
                    </View>
                    <View style={styles.lessonsbox}>
                        <View style={styles.lessons}>
                            <Text style={styles.lessonstxt}>Types of Essay</Text>
                            </View>
                            <View style={styles.lessons}>
                            <Text style={styles.lessonstxt}>Types of Sentences</Text>
                            </View>   
                    </View>
                    <View style={styles.bottom}>
                        <Text style={styles.lessonstxt}>Kinds of Grammar</Text>
                    </View>
                    

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
        top: 100,
    },
    dashtitle:{
        position: 'absolute',  
        margin: 20, 
        fontSize: 60,
        color: '#ffffff',
        fontFamily: 'FredokaOne-Regular',
        textShadowColor: '#00000040',
        textShadowOffset: { width: 0, height: 9 },
        textShadowRadius: 6,
    },

    
    Content:{
        backgroundColor: '#B6CCD8',
        width: '100%',
        height: '72.5%',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },

    lessonsbox:{
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    lessonstxt:{
        fontFamily: 'FredokaOne-Regular',
        fontSize: 15,
        color: '#ffffff',
    },
    lessons:{
        backgroundColor: '#445DAA',
        width: 150,
        height: 110,
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: -30,
        marginTop: 20,
        borderRadius: 7,
        borderColor: 'black',
        borderWidth: 1,
        shadowColor:'#000000',
        shadowRadius: 4,
        elevation: 6,
    },

    bottom:{
        backgroundColor: '#445DAA', 
        width: 330, 
        height: 110, 
        padding: 10,
        marginTop: 40, 
        marginLeft: 15, 
        borderRadius:7,    
        borderColor: 'black',
        borderWidth: 1,
        shadowColor:'#000000',
        shadowRadius: 4,
        elevation: 6,
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
        top: 62.5,
    }, 
});