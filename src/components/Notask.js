import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Notask = () => {
  return (
    <View className='h-full w-full flex items-center justify-start'>
      <Image
        className=" h-[270px] w-[250px] mt-3 "
        source={require("../../assets/todo-2.png")}
      />
      <Text className='text-3xl font-bold text-blue-950'>Add New Task</Text>
    </View>
  );
}

export default Notask

