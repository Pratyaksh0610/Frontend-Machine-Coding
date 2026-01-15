import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import AutocompleteSearchBar from "./components/AutocompleteSearchBar/AutocompleteSearchBar";
import EMICalculator from "./components/EMICalculator/EMICalculator";
import EmployeeDBMS from "./components/EmployeeDBMS/EmployeeDBMS";
import FileExplorer from "./components/FileExplorer/FileExplorer";
import FileStructure from "./components/FileExplorer/FileStructure";
import NestedCheckbox from "./components/NestedCheckbox/NestedCheckbox";
import OTPInput from "./components/OTPInput/otpInput";
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";
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
      {/* <Accordion/> */}
      {/* <EmployeeDBMS/> */}
      {/* <EMICalculator/> */}
      <PasswordGenerator/>
    </>
  );
}

export default App;
