import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { savedPlaces } from "../SavedReducer";
import { setDoc,doc } from "firebase/firestore";
import { auth, db } from "../firebase";

const ConfirmationScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();



  useLayoutEffect ( () => {
    navigation.setOptions({
      headerShown: true,
      title: 'Confirmation',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },
      headerStyle: {
        backgroundColor: '#003580',
        height: 110,
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
      },
    });
  },[]);

  const dispatch = useDispatch();

const confirmBooking=()=>{
dispatch(savedPlaces(route.params));
navigation.navigate("Main");


}

  return (
    <View>
      <Pressable style={{ backgroundColor: 'white', margin: 10 }}>
        {/* Content of the confirmation screen */}
        {/* ... */}
        
        <Pressable
          onPress={confirmBooking}
          style={{
            backgroundColor: '#003580',
            width: 120,
            padding: 5,
            marginHorizontal: 12,
            marginBottom: 20,
            borderRadius: 4,
          }}
        >
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontWeight: 'bold' }}>
            Book Now
          </Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({});
