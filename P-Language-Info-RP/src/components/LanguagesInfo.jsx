import React, {useState} from "react";
import './LanguagesInfo.css';
import data from '../data.js'

const LanguagesInfo = () => {

  const [languages, setLanguages] = useState(data);
  

  return (
    <main>
      <section className="container">
        <h3>Languages Dates</h3>

        {languages.map((language) => {
          return (
            <div className="language" key={language.id}>
              <img src={language.img} alt='img' />
              <div>
                <p>{language.title}</p>
                <p>{language.date}</p>
              </div>

            </div>
          )
        })}

        <button onClick={() => setLanguages("")}>Clear All</button>

      </section>
    </main>
  )
  
};

export default LanguagesInfo;
