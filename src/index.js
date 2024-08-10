import ReactDOM from "react-dom/client";
import App from "./App";

//react router dom
import { BrowserRouter } from "react-router-dom";

// Redux Store
import { Provider } from "react-redux";
import store from "./redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Render the application to the DOM
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
