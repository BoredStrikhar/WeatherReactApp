import "./SearchLine.css";

function SearchLine() {
  
  
  return (
    <div className="search-wrapper">
      <input id="search"></input>
      <div id="search-button-wrapper">
        <button id="search-button" onclick="sendRequest()">
          Найти
        </button>
      </div>
    </div>
  );
}

export default SearchLine;
