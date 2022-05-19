//Strikeなんちゃらに関する部分をすべて（おそらく３行）消す

import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
