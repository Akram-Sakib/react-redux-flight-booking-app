import { Provider } from "react-redux";
import "./App.css";
import Content from "./Components/Content";
import Header from "./Components/Header";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Content />
    </Provider>
  );
}

export default App;
