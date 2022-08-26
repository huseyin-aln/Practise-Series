import React, {useState, useEffect} from 'react'

const Quote = () => {

  const [quote, setQuote] = useState("")

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
    let randomNum = Math.floor(Math.random() * data.length);
    setQuote(data[randomNum])
    })
  }

  useEffect(() => {
    getQuote()
  }, [])
    return (
      <div className='container'>
        <div className='quote'>
            <p>{quote.text}</p>
            <p>{quote.author}</p>
            <div className='btn-container'>
                <button className='btn' onClick={getQuote}>Get Quote</button>

            </div>

        </div>
        
      </div>
    )
  }

export default Quote