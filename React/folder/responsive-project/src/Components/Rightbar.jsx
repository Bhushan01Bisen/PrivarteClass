import React from "react";
import { Box } from "@mui/material";


export const Rightbar = () => {
    return (
        <Box bgcolor="lightcoral" flex={2} p={2} sx={{ display: { xs: "none", sm:"block" } }} >

        <div>
            <p>Rightbar</p>
        </div>
        </Box>
    );
};