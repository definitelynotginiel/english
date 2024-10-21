import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ImageBackground, Alert, ScrollView } from 'react-native';
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
                
                
                <ScrollView flashScrollIndicators={false} style={styles.Content}>
                    <View style={styles.lessonsbox}>
                            
                            <Image source={require('../assets/FOS.png')} style={styles.lessonspic}/>
                            
                            
                            <Image source={require('../assets/POS.png')}style={styles.lessonspic}/>
                        
                                                     
                    </View>
                    <View style={styles.lessonsbox}>
                           
                            <Image source={require('../assets/TOE.png')}style={styles.lessonspic}/>                           
                            <Image source={require('../assets/TOS.png')}style={styles.lessonspic}/>                            
                    </View>
                    <View style={styles.bottom}>
                        <Image source={require('../assets/KOGr.png')} style={{position: 'absolute', right: -7, top: 3}}/>
                        <Text style={[styles.lessonstxt, {marginTop: -0}]}>Kinds of Grammar</Text>
                    </View>
                    <View style={styles.space}></View>
                   
                                    </ScrollView>
                                    <View style={{position: 'absolute', top: 210, backgroundColor: '#445DAA',
        width: '100%',
        height: '4%',}}></View>
                                    <View style={{position: 'absolute', top: 210, backgroundColor: '#B6CCD8',
        width: '100%',
        height: '4%',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,}}>
                    
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
        position: 'absolute',
    },
    lessonsbox:{
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    lessonstxt:{
        fontFamily: 'FredokaOne-Regular',
        fontSize: 30,
        color: '#ffffff',
        textShadowColor: '#00000040',
        textShadowOffset: { width: 0, height: 6 },
        textShadowRadius: 6,
    },
    lessonspic:{
        width: 160,
        height: 160,
        marginBottom: -30,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20,
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
        height: 150, 
        paddingLeft: 10,
        paddingTop: 10,
        marginTop: 30, 
        marginLeft: 15, 
        borderRadius:7,    
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
        top: 625,
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
    space:{
        height: 110,
    },
});