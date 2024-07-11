import { Box, Button, TextField, CircularProgress } from '@mui/material';
import { useState } from 'react';

const Addtodo = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const newTodo = { title, message, isDone: false }; // yeni todo
    onAdd(newTodo);
  };

  return (
    <Box sx={{ p: 2 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Başlık"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Mesaj"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button type="submit" variant="contained" color="primary" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Add'}
          </Button>
          <Button onClick={onClose} variant="outlined" color="secondary">Cancel</Button>
        </Box>
      </form>
    </Box>
  );
};

export default Addtodo;
