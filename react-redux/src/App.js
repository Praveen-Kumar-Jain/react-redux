// import { Provider as ReduxProvider } from "react-redux";

import "./App.css";
// import Header from "./components/Header";
// import ProductForm from "./pages/Product";
// import configureStore from "./redux/configureStore";
// const store = configureStore();
// import { Counter } from "./components/Counter";
import Pokemon from "./components/pokemon";

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <ReduxProvider store={store}> */}
        {/* <ProductForm /> */}
      {/* </ReduxProvider> */}
      {/* <Counter/> */}
      <Pokemon/>
    </div>
  );
}

export default App;
