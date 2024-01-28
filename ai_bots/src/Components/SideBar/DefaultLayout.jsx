import React from 'react';
import { ColorModeContext, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { MyProSidebarProvider } from "./sidebarContext";

const DefaultLayout = ({ children }) => {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <MyProSidebarProvider>
                    <div style={{ height: "100%", width: "100%" }}>
                        <main>
                            {children}
                        </main>
                    </div>
                </MyProSidebarProvider>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default DefaultLayout;
