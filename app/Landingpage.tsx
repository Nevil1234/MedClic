import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function Landingpage() {
  const router = useRouter();
  
  return (
    <>
    <View>
      <Image source={require("../assets/images/landingpg.png")} style={styles.landingpgimg} />
    </View>

    <View>
        <Text style={styles.introtext}>Book your Nearest Clinic's Appointment</Text>
        <Text style={styles.introtextsecond}>Get Real Time updates for your turn</Text>
    </View>
    <TouchableOpacity style={styles.getstartedbtn} onPress={() => {
      router.push("/(auth)/Login")
    }}>
      <Text style={styles.getstartedtext}>Get Started</Text>
    </TouchableOpacity>

    </>
  )
}


const styles = StyleSheet.create({
  landingpgimg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 400
  },
  introtext:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    fontFamily: 'Overpass-VariableFont_wght',
  },
  introtextsecond:{
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Overpass-VariableFont_wght',
  },
  getstartedbtn:{
    backgroundColor: '#007bfe',
    color: '#007bfe',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 30,  
    width: '50%',
    marginLeft: '25%',
    height: 50,
  },
  getstartedtext: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Overpass-VariableFont_wght',
  },

  
})