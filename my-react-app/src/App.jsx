import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import AutocompleteSearchBar from "./components/AutocompleteSearchBar/AutocompleteSearchBar";
import FileExplorer from "./components/FileExplorer/FileExplorer";
import FileStructure from "./components/FileExplorer/FileStructure";
import NestedCheckbox from "./components/NestedCheckbox/NestedCheckbox";
import OTPInput from "./components/OTPInput/otpInput";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import TodoList from "./components/TodoList/TodoList";
import { CheckboxData, FileStructureData } from "./constants/componentConstants";
// import Pagination from './components/Pagination/Pagination'
// import Tab from './components/TabsForm/Tab'

function App() {
  return (
    <>
      {/* <Tab/> */}
      {/* <Pagination/> */}
      {/* <AutocompleteSearchBar /> */}
      {/* <FileStructure /> */}
      {/* <ProgressBar progress={80}/> */}
      {/* <OTPInput inputSize={5} /> */}
      {/* <NestedCheckbox data={CheckboxData} /> */}
      {/* <TodoList/> */}
      <Accordion/>
    </>
  );
}

export default App;
