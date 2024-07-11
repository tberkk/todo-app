import { Box, Card, Container, Typography, Dialog } from "@mui/material";
import Todocard from "./components/todo-card";
import { useEffect, useState } from "react";
import axios from "axios";
import Add from "./components/add-button";
import Addtodo from "./components/add-todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    handleGet();
  }, []);

  const handleGet = () => {
    axios.get('http://172.29.224.1:8080/todo/getAll')
      .then((response) => {setTodos(response.data)})
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    axios.post(`http://172.29.224.1:8080/todo/delete?id=${id}`)
      .then(() => {handleGet()})
      .catch((error) => console.log(error));
  };

  const handleIsDone = (id) => {
    axios.post(`http://172.29.224.1:8080/todo/updateIsDone?id=${id}`)
      .then(() => {handleGet()})
      .catch((error) => console.log(error));
  };

  const handleAddTodo = (newTodo) => {
    axios.post('http://172.29.224.1:8080/todo/save', newTodo)
      .then(() => {
        handleGet();
        setOpen(false);
      })
      .catch((error) => console.log(error));
  };

  const openPopUp = () => {
    setOpen(true);
  };

  const closePopUp = () => {
    setOpen(false);
  };

  return (
    <>
      <Container>
        <Add addEvent={openPopUp} />
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
          <Typography variant="h1" sx={{ fontFamily: "Roboto", fontSize: 150 }}>
            To-Do
          </Typography>
        </Box>
        <Box sx={{ p: 2 }}>
          <Card elevation={3} sx={{ borderRadius: 5, p: 2 }}>
            <Box>
              {todos.length == 0 ? 
              <Typography variant="h7" sx={{ fontFamily: "Roboto"}} >
                Bir To-Do Ekleyin
              </Typography> :
               todos.map((todo, index) => (
                <Todocard key={index} todoObject={todo} onDelete={handleDelete} checkBox={handleIsDone} />
              ))}
            </Box>
          </Card>
        </Box>
      </Container>
      <Dialog open={open} onClose={closePopUp}>
        <Addtodo onAdd={handleAddTodo} onClose={closePopUp} />
      </Dialog>
    </>
  );
}

export default App;
