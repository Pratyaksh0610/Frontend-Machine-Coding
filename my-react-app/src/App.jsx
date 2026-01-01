import "./App.css";
import AutocompleteSearchBar from "./components/AutocompleteSearchBar/AutocompleteSearchBar";
import FileExplorer from "./components/FileExplorer/FileExplorer";
import FileStructure from "./components/FileExplorer/FileStructure";
import OTPInput from "./components/OTPInput/otpInput";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import { FileStructureData } from "./constants/componentConstants";
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
      <OTPInput inputSize={5} />
    </>
  );
}

export default App;
