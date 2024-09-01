import React, { useState } from "react";
import {
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  View,
  Alert,
  Button,
  Modal,
} from "react-native";
import Notask from "../components/Notask";

const TodoScreen = () => {
  // state
  // const [TodoTitle , setTodoTitle] = useState('')
  const [modalInputValue, setModalInputValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [ModalVisible, setModalVisible] = useState(false);
  const [TodoList, setTodoList] = useState([
    {
      TodoId: 1,
      TodoTitle: "salut les negros",
    },
    {
      TodoId: 2,
      TodoTitle: "yo les gars ",
    },
    {
      TodoId: 3,
      TodoTitle: "salut tout le monde",
    },
  ]);

  //Behavious
  const titleChange = (currentTodoTitle) => {
    const currentTask = TodoList.filter(
      (item) => item.TodoTitle == currentTodoTitle
    );
    currentTask.TodoTitle = modalInputValue;
    setModalVisible(false);
  };

  const editTask = (TodoTitle) => {
    setModalInputValue(TodoTitle);
    setModalVisible(true);
  };
  const DeleteTodo = (CurrentId) => {
    const TodoListUpdate = TodoList.filter((item) => item.TodoId != CurrentId);
    setTodoList(TodoListUpdate);
  };
  const CreateTodo = () => {
    const TodoId = new Date().getTime();
    const TodoTitle = inputValue;
    setTodoList([...TodoList, { TodoId, TodoTitle }]);
    setInputValue("");
  };
  const UpdateInputvalue = (event) => {
    setInputValue(event.target.value);
  };
  const RenderTodos = ({ item, index }) => {
    return (
      <View
        key={item.TodoId}
        className=" flex flex-row justify-between items-center shadow-md mb-4 w-[400px] px-4 h-[60px] rounded-xl bg-white "
      >
        <Text className=" text-center text-2xl  ">{item.TodoTitle}</Text>
        <View className="flex flex-row  items-center gap-x-3 justify-end  w- h-full">
          <Text
            className="font-extrabold text-3xl"
            onPress={() => editTask(item.TodoTitle)}
          >
            📝
          </Text>
          <Text
            onPress={() => DeleteTodo(item.TodoId)}
            className="font-extrabold text-3xl"
          >
            ❌
          </Text>
        </View>

        <Modal
          visible={ModalVisible}
          // onRequestClose={setModalVisible(false)}
          animationType="fade"
          transparent={true}
          onDismiss={titleChange}
        >
          <View className=" flex items-center shadow-md h-5/3 pt-11 pb-24 px-3 w-11/12 mx-auto my-auto rounded-xl bg-slate-50 ">
            <Image
              source={require("../../assets/change.png")}
              className=" w-20 h-24 "
            />
            <Text className="text-2xl font-semibold mt-9">You're Task</Text>
            <TextInput
              value={modalInputValue}
              // placeholder={item.TodoTitle}
              onChangeText={(CurrentText) => {
                setModalInputValue(CurrentText);

                setTodoTitle(modalInputValue);
              }}
              className="border-2 border-blue-900 rounded-xl text-xl text-blue-950 w-[300px] px-3 h-[50px] mt-5 "
            />
            <TouchableOpacity
              onPress={titleChange}
              className=" w-[150px] shadow-md bg-blue-500 rounded-xl p-1 mt-9 "
            >
              <Text className="text-white text-center text-xl font-bold ">
                Save change
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  };

  //Render
  return (
    <View className=" w-full h-full flex-1 justify-start items-center ">
      <Image
        className="h-[170px] w-[350px] mt-3"
        source={require("../../assets/todo.png")}
      />
      {/*       
      <Text className="text-3xl">
        Best{" "}
        <Text className=" rounded-md text-blue-900 bg-yellow-200">TODO</Text>
      </Text> */}
      <TextInput
        value={inputValue}
        onChangeText={(CurrentText) => setInputValue(CurrentText)}
        placeholder="write here"
        className="border-2 border-blue-900 rounded-xl text-xl text-blue-950 w-[300px] px-3 h-[50px] mt-11 "
      />
      <TouchableOpacity
        onPress={CreateTodo}
        className=" w-[150px] shadow-md bg-blue-500 rounded-xl p-1 mt-5 "
      >
        <Text className="text-white text-center text-xl font-bold ">Add </Text>
      </TouchableOpacity>

      <View className="flex-1 flex-nowrap  gap-y-3 justify-start items-center  w-full h-full  mt-9">
        {TodoList.length <= 0 && <Notask />}

        <FlatList data={TodoList} renderItem={RenderTodos} />
      </View>

      <TouchableOpacity
        onPress={() => setTodoList([])}
        className=" w-[150px] ring-offset-2 bg-red-400 rounded-xl p-1 mt-5 "
      >
        <Text className="text-white text-center text-xl font-bold ">
          Clear All
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoScreen;
