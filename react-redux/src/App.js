import { Provider as ReduxProvider } from "react-redux";

import "./App.css";
// import Header from "./components/Header";
import ProductForm from "./pages/Product";
import configureStore from "./redux/configureStore";
const store = configureStore();

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <ReduxProvider store={store}>
        <ProductForm />
      </ReduxProvider>
    </div>
  );
}

export default App;
