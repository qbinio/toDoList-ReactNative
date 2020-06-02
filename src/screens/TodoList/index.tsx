import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

interface ItoDoList {
  text: string;
  completed: boolean;
}

const TodoListScreen = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [toDoListArray, setToDoListArray] = useState<ItoDoList[]>([]);
  const [error, showError] = useState<Boolean>(false);

  const addToDo = (): void => {
    if (inputValue.trim()) {
      setToDoListArray([
        ...toDoListArray,
        { text: inputValue, completed: false },
      ]);
      setInputValue("");
    } else {
      showError(true);
      setInputValue("");
    }
  };

  const handleCompleteChange = (index: number): void => {
    const tempTodoList = [...toDoListArray];
    tempTodoList[index].completed = !tempTodoList[index].completed;

    setToDoListArray(tempTodoList);
  };

  const removeTodo = (index: number): void => {
    const tempTodoList = [...toDoListArray];
    tempTodoList.splice(index, 1);

    setToDoListArray(tempTodoList);
  };

  return (
    <View style={styles.appContainer}>
      <Text style={styles.appTitle}>Todo List</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Type your todo task here..."
          value={inputValue}
          onChangeText={(e) => {
            setInputValue(e);
            showError(false);
          }}
          style={styles.textInput}
        />
        <Button title="Add todos" onPress={addToDo} />
      </View>
      {error && (
        <Text style={styles.errorText}>
          Error: Your input is empty, please type something
        </Text>
      )}
      <Text style={styles.todosText}>Your Todos :</Text>
      {toDoListArray.length === 0 && <Text>You don't have any tasks yet.</Text>}
      {toDoListArray.map((task: ItoDoList, index: number) => (
        <View style={styles.todoItem} key={`${index}_${task.text}`}>
          <Text
            style={[
              styles.taskText,
              { textDecorationLine: task.completed ? "line-through" : "none" },
              { textDecorationColor: "red" },
            ]}
          >
            {task.text}
          </Text>
          <View style={styles.buttonsSection}>
            <Button
              title={task.completed ? "Completed" : "Complete"}
              onPress={() => handleCompleteChange(index)}
            />
            <Button
              title="X"
              onPress={() => {
                removeTodo(index);
              }}
              color="red"
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    padding: 35,
    alignItems: "center",
  },

  appTitle: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 45,
    textDecorationLine: "underline",
    color: "blue",
  },

  inputWrapper: {
    marginBottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    width: 200,
    borderColor: "blue",
    borderRadius: 8,
    borderWidth: 2,
    paddingLeft: 8,
    paddingRight: 6,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },

  todosText: {
    color: "blue",
    fontSize: 18,
    marginBottom: 20,
  },

  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 12,
  },

  taskText: {
    width: 200,
    fontSize: 20,
  },
  buttonsSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "40%",
  },
});

export default TodoListScreen;
