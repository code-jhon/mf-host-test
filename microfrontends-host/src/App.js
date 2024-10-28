import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import viteLogo from "./assets/vite.svg"; // Update this path if necessary
const App = () => {
    return (_jsxs("div", { style: { textAlign: "center" }, children: [_jsxs("header", { children: [_jsx("img", { src: viteLogo, alt: "Vite Logo", style: { width: "150px", marginTop: "20px" } }), _jsx("h1", { children: "Welcome to the Microfrontend Host App" })] }), _jsx("main", { children: _jsx("p", { children: "This is the host application that will load microfrontends." }) })] }));
};
export default App;
