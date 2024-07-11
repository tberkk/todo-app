import { Box, SpeedDial, SpeedDialIcon } from "@mui/material";

function Add({addEvent}) {
  return (
    <Box sx={{ position: 'fixed', bottom: 16, right: 16 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        icon={<SpeedDialIcon />}
        onClick={addEvent}
      >
      </SpeedDial>
    </Box>
  );
}

export default Add;
