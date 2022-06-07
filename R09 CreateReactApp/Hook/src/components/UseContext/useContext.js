import { useContext } from "react";
import ContentUseContext from "./ContentUseContext";
import { ThemeContext } from "./ThemeContext"
// 1.Create context
// 2.Provider
// 3.Consumer

function UseContext() {
    const context = useContext(ThemeContext)

    return (
        <div style={{ padding: 20 }}>
            <button onClick={context.toggleTheme}>Toggle theme</button>
            <ContentUseContext />
        </div>
    )
};

export default UseContext;