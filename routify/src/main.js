import HMR from "@sveltech/routify/hmr";
import App from "./App.svelte";

// These styles get inlined in the <head>
import "modern-normalize/modern-normalize.css";
// https://github.com/KyleAMathews/typefaces
import "../static/fonts/typeface-cooper-hewitt/index.css";
import "../static/fonts/typeface-exo-2/index.css";

import "./styles/theme.css";
import "./styles/globals.css";

const app = HMR(App, { target: document.body }, "routify-app");

export default app;
