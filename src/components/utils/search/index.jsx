import { useState, useEffect } from "react";
import { fetchResult } from "../../../services/api/get-services";
import { BiSearchAlt2 } from "react-icons/bi";
import { Button, SearchContainer } from "../../../styles/widgets/widgets";

const Search = (props) => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (e) => {
    let categories = [];
    categories = await fetchResult("categories");
    if (categories === null) categories = [];
    setUsers(categories);
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
          placeholder="Search for category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ backgroundColor: "#f5f5f6" }}
        />
        <datalist id="datalistOptions">
          {users.map((val) => (
            <option value={val.name} key={val.image} />
          ))}
        </datalist>

        <Button onClick={handleSearch}>
          <BiSearchAlt2 style={{ marginRight: "3px" }} />
        </Button>
      </SearchContainer>
    </div>
  );
};

export default Search;
