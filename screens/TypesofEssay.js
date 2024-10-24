import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ImageBackground, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TypesofEssay() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            
            <ImageBackground
                source={require('../assets/bg image.png')}
                style={styles.imageBackground}>
                    <Image source={require('../assets/profile icon.png')} style={{position: 'absolute', right: 10, top: 20}}/>
                <View  style={styles.titlebox}>
                    <Text style={styles.dashtitle}>Types of Essay</Text>
                </View>
                
                <View style={styles.Content}>
                    <View style={styles.lessonsbox}>  
                        <View style={[styles.lessons, {paddingTop: 35}]}>
                            <Text style={styles.lesstitle}>I. What is Essay?</Text>
                            </View>
                            <View style={styles.lessons}>
                            <Text style={styles.lesstitle}>II. What are the Types of Essay</Text>

                            </View>
                            <View style={styles.lessons}>
                            <Text style={styles.lesstitle}>III. The History of Essay</Text>

                            </View>    
                    </View>
                    
                   
                 </View>

                      <View style={styles.ContentItems}>
                        <View  style={styles.Items}>
                            <TouchableOpacity  onPress={() => navigation.navigate('About')}>
                                <Image source={require('../assets/about us.png')} style={styles.Icon}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                                <Image source={require('../assets/home btn.png')} style={styles.HomeIcon}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={() => 
                            Alert.alert('Are you sure you want to log out?','',[
                                {
                                    text: 'Cancel',
                                    onPress: () => navigation.navigate('Dashboard'),
                                },
                                {
                                    text: 'Yes',
                                    onPress: () => navigation.navigate('Login'),
                                }
                            ])}>
                                <Image source={require('../assets/logout.png')} style={styles.Icon}/>
                            </TouchableOpacity>
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
        height: '20%',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 70,
    },
    dashtitle:{
        position: 'absolute',  
        margin: 20, 
        fontSize: 45,
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
        position: 'absolute',
    },
    lessonsbox:{
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    lesstitle:{
        fontFamily: 'FredokaOne-Regular',
        fontSize: 30,
        color: '#ffffff',
        textShadowColor: '#00000040',
        textShadowOffset: { width: 0, height: 6 },
        textShadowRadius: 6,
    },
    lessons:{
        backgroundColor: '#445DAA',
        width: "100%",
        height: 120,
        padding: 10,
        paddingTop: 20,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
        borderRadius: 7,
        borderColor: 'black',
        borderWidth: 1,
        shadowColor:'#000000',
        shadowRadius: 4,
        elevation: 6,
    },
    ContentItems:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 637,
    },
    HomeIcon:{
        width: 72,
        height: 89,
        marginBottom: 91,
    },
    Icon:{
        width: 60,
        height: 70,
        marginBottom: 100,
        marginLeft: 10,
        marginRight: 10,
    },
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