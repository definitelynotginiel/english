import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Dashboard() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>      
            <ImageBackground
                source={require('../assets/bg image.png')}
                style={styles.imageBackground}>
                    <View style={styles.fixedHeader}>
                    <Text style={styles.header}>ABOUT US!</Text>
                    </View>
                    <ScrollView style={styles.scroll} flashScrollIndicators={true} >
                        <Image style={{marginTop: 12.5}}source={require('../assets/UI.png')} />
                        <Image source={require('../assets/UX.png')} />
                        <Image source={require('../assets/USER PERSONA.png')} />
                        <Image source={require('../assets/COLORTHEORY.png')} />
                        <Image source={require('../assets/60 30 10.png')} />
                        <Image source={require('../assets/TYPOGRAPHY.png')} />
                        <Image source={require('../assets/SPACING.png')} />
                        <View style={styles.space}></View>
                        
                        </ScrollView>
                    <View style={styles.ContentItems}>
                        <View  style={styles.Items}>
                            <TouchableOpacity  style={styles.btn} onPress={() => navigation.navigate('About')}>
                                <Image source={require('../assets/about us.png')} style={styles.Icon}/>
                            </TouchableOpacity>
                            <TouchableOpacity  style={styles.btn} onPress={() => navigation.navigate('Dashboard')}>
                                <Image source={require('../assets/home btn.png')} style={styles.HomeIcon}/>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => 
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
    ContentItems:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 600,


    },
    scroll:{
        marginTop: 100,
        right:3.5 ,
},

    HomeIcon:{
        width: 72,
        height: 89,
        marginBottom: 90,

    },
    Icon:{
        width: 60,
        height: 70,
        marginBottom: 100,
        marginLeft: 10,
        marginRight: 10,
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
        top: 100,
    }, 
    fixedHeader: {
        alignItems: 'center',
        backgroundColor: '#B6CCD8',
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 100,
        padding: 10,
        zIndex: 1,
        borderBottomLeftRadius: 13,
        borderBottomRightRadius: 13,
    },
    header: {
        fontSize: 40,    
        fontFamily: 'FredokaOne-Regular',
        color: 'white',
        textShadowColor: '#00000040',
        textShadowOffset: { width: 0, height: 7 },
        textShadowRadius: 6,
        marginTop: 20,
    },
    space:{
        height: 90,
    },
});