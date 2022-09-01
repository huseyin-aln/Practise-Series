import React, {useState} from "react";
import data from "../data.json"
import "./SearchFilter.css"

const SearchFilter = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [readMore, setReadMore] = useState(false);
    
    
  return (
    <div className="container">
        <h1>Search Filter</h1>
        <div className="input-container">
            <input className="search"  
            type="text" 
            placeholder="Enter your search..."
            onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>

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
                            <p>
                                {/* <p>{readmore ? info : `${info.substring(0,200)}...`} */}
                                {readMore ? val.desc : val.desc.slice(0,200) + "..."}
                                <button onClick={() => setReadMore(!readMore)}>
                                    {readMore ? 'show less' : 'read more'}
                                </button>
                            </p>
                        
                        </div>
                    )
                })
            }
        </div>

    </div>
    );
};

export default SearchFilter;
