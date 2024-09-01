import { StatusBar } from "expo-status-bar";
import {  SafeAreaView, Text, View } from "react-native";
import TodoScreen from "./src/screen/todoScreen";


export default function App() {
  return (
    <SafeAreaView className="bg-blue-200 flex-1 py-5  justify-start items-center">
      <TodoScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
