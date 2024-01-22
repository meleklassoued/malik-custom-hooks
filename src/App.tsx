import "./App.css";
import { MycontextProvider } from "./Hooks/useContext/index";
import { ScreenContainer } from "./components/ScreenContainer";
function App() {
  return (
    <>
      <MycontextProvider>
        <div>hello world</div>
        <ScreenContainer />
      </MycontextProvider>
    </>
  );
}

export default App;
