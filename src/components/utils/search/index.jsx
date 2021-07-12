import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { fetchResult } from "../../../services/api/loaded-services";
import { BiSearchAlt2 } from "react-icons/bi";
import { Button, SearchContainer } from "../../../styles/widgets/widgets";

const Search = () => {
  let history = useHistory();
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (e) => {
    let subcategories = [];
    subcategories = await fetchResult("subcategories");
    if (subcategories === null) subcategories = [];
    setData(subcategories);
  };

  const handleSearch = (e) => {
    let array = searchQuery.split("/");
    let category = array[0];
    let subcategory = array[1];

    if (searchQuery !== "")
      history.push("/category/" + category + "/" + subcategory);
      
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
          {data.map((val) => (
            <option
              value={val.category + "/" + val.slug}
              key={val.image}
              onClick={handleSearch}
            />
          ))}
        </datalist>

        <Button onClick={handleSearch}>
          <BiSearchAlt2 size="23" style={{ marginRight: "3px" }} />
        </Button>
      </SearchContainer>
    </div>
  );
};

export default Search;
