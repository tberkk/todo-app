import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
        MuiStack: {
            defaultProps: {
                useFlexGap: true,
            },
        },
    },
})