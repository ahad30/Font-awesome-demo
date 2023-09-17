import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Icon from "./Icon/Icon";
import icons from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";
import "./App.css";
import Footer from "./Footer/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems =icons.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Checkbox Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(icons, selected, query) {
    let filteredIcon = icons;

    // Filtering Input Items
    if (query) {
      filteredIcon = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredIcon = filteredIcon.filter(
        ({ category, company, title }) =>
          category === selected ||
          company === selected ||
          title === selected
      );
    }

    return filteredIcon.map(
      ({ img, title }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
         
        />
      )
    );
  }

  const result = filteredData(icons, selectedCategory, query);

  return (
    <>
    <Navigation query={query} handleInputChange={handleInputChange} />
    <Recommended handleClick={handleClick} />
    <div className="sidebar-icon">
    <div><Sidebar handleChange={handleChange} /></div>
    <div><Icon result={result} /></div>
   </div>
   <Footer/>
    </>
  );
}

export default App;
