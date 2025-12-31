import "./App.css";
import AutocompleteSearchBar from "./components/AutocompleteSearchBar/AutocompleteSearchBar";
import FileExplorer from "./components/FileExplorer/FileExplorer";
import FileStructure from "./components/FileExplorer/FileStructure";
import { FileStructureData } from "./constants/componentConstants";
// import Pagination from './components/Pagination/Pagination'
// import Tab from './components/TabsForm/Tab'

function App() {
  return (
    <>
      {/* <Tab/> */}
      {/* <Pagination/> */}
      {/* <AutocompleteSearchBar /> */}
      <FileStructure />
    </>
  );
}

export default App;
