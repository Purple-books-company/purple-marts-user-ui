import { useState, useEffect } from "react";
import axios from "axios";
import { BiSearchAlt2 } from "react-icons/bi";
import {
  Button,
  SearchContainer,
  SearchText,
} from "../../styles/widgets/widgets";

const Search = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (e) => {
    const request = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = request.data;
    setUsers(data);
  };

  const handleSearch = (e) => {
    if (searchQuery !== "") alert(searchQuery);
    else alert("Choose a product");
    setSearchQuery("");
  };

  return (
    <div>
      <SearchContainer className="input-group mb-3">
        <input
          className="form-control"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Type to search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <datalist id="datalistOptions" >
          {users.map((val) => (
            <option value={val.name} key={val.email} />
          ))}
        </datalist>
        <Button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleSearch}
        >
          <BiSearchAlt2 style={{ marginRight: "5px" }} />
          <SearchText>Search</SearchText>
        </Button>
      </SearchContainer>
    </div>
  );
};

export default Search;