import React, {useState} from "react";
import data from "../data.json"
import "./SearchFilter.css"

const SearchFilter = () => {
    const [searchTerm, setSearchTerm] = useState("");
    
  return (
    <div className="container">
        <h1>Search Filter</h1>
        <div className="input-container">
            <input className="search"  
            type="text" 
            placeholder="Enter your search..."
            onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
{console.log(setSearchTerm)}
        <div className="data-container">
            {
                data.filter((val) => {
                    if (searchTerm === "") {
                        return val;
                    } else if (val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return val;
                    }
                }).map((val) => {
                    return (
                        <div className="data" key={val.id}>
                            <img src={val.image} alt="img" />
                            <h3>{val.title}</h3>
                            <p>{val.desc}</p>

                        </div>
                    )
                })
            }
        </div>

    </div>
    );
};

export default SearchFilter;
