import { useState } from "react";
import { searchForShows } from "../api/tvmaze";
import SearchForm from "../components/SearchForm";

const Home = () => {
  const [apiData, setApiData] = useState(null);

  const onSearch = async (ev) => {
    ev.preventDefault();
  };

  const renderApiData = () => {
    if (apiData) {
      return apiData.map((data) => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }
    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      {/* <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <label>
          shows
          <input
            type="radio"
            name="search-option"
            value="shows"
            checked={searchOption === "shows"}
            onChange={onRadioChange}
          />
        </label>

        <label>
          actors
          <input
            type="radio"
            name="search-option"
            value="actors"
            checked={searchOption === "shows"}
            onChange={onRadioChange}
          />
        </label>
        <button type="submit">Search</button>
      </form> */}
      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;
