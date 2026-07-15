import SearchBar from "../Components/SearchBar";
import Tabs from "../Components/Tabs";
import ResultGrid from "../Components/ResultGrid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { query } = useSelector((store) => store.search);
  return (
    <div>


      <SearchBar />

      {query != "" ? (<div><Tabs /><ResultGrid /></div>) : ("")}</div>
  );
};

export default HomePage;
