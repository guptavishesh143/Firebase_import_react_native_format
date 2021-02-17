// Imported Libraries
import React, {useEffect, useState} from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import firebase from '../../firebase/Utils';
import firestore from '@react-native-firebase/firestore';

const HomeScreen = ({navigation}) => {
 

  useEffect(() => {
    //   SplashScreen.hide();
    const categories = firestore()
      .collection('categories')
      .where('catID','==', '3pmEkwgnrrNDpwgeNRdn');
    categories.get().then((querySnapshot) => {
      const tempDoc = [];
      querySnapshot.forEach((doc) => {
        tempDoc.push({id: doc.id, ...doc.data()});
      });
      console.log(tempDoc);
    });
  }, []);


  return () => categories();
};

const styles = StyleSheet.create({});

export default HomeScreen;
//https://stackoverflow.com/questions/52100103/getting-all-documents-from-one-collection-in-firestore
