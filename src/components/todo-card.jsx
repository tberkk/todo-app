import { Box, Card, Checkbox, Divider, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import axios from "axios";

const Todocard = ({ todoObject, onDelete, checkBox }) => {
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        setTodo(todoObject);
    }, [todoObject]);


    if (!todo) {
        return (
            <HourglassBottomIcon/>
        );
    }

    return (
        <Card elevation={7} sx={{ borderRadius:2, m:2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', px: 2 }}>
                    <Checkbox checked={todo.isDone} onChange={() => checkBox(todo.id)} />
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Typography variant='h6' sx={{ px: 2, color: todo.isDone ? 'gray' : 'black' }}>
                        {todo.title}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', px: 2 }}>
                    <Typography variant='body1' sx={{ px: 2, color: todo.isDone ? 'gray' : 'black' }}>
                        {todo.createdAt}
                    </Typography>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <IconButton aria-label='sil' onClick={() => onDelete(todo.id)} >
                        <DeleteForeverOutlinedIcon sx={{ color: 'tomato' }} />
                    </IconButton>
                </Box>
            </Box>
            <Divider orientation="horizontal" variant="middle" flexItem />
            <Typography variant='body1' sx={{ p: 2, color: todo.isDone ? 'gray' : 'black' }}>
                {todo.message}
            </Typography>
        </Card>
    );
};

export default Todocard;
