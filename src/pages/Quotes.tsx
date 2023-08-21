import { useEffect, useRef, useState } from "react"

const Quotes = () => {

  type Quote = {
    id:number,
    quote:string,
    author:string
  }
  const loading = useRef<boolean>(true)
  const [quotes, setQuotes] = useState<Array<Quote> | undefined>(undefined);
  const [quote, setQuote] = useState<Quote | undefined>(undefined)
  useEffect(() => {
    fetch('https://dummyjson.com/quotes?limit=100')
      .then(data => data.json())
      .then(response => setQuotes(response.quotes))
      .then(() => loading.current = false)
  }, [])
  const assignQuote = ():void => {
    quotes ? setQuote(quotes[Math.floor(Math.random() * 100) + 1]) : console.log("indéfini")
  } 

  

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div className="text-center w-[700px]">
        {loading.current ? "Chargement..." : 
        <>
          {quote === undefined ? <button onClick={assignQuote}>Générer une citation</button> : 
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
              <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
            </svg> 
            <div className="min-h-[80px] flex flex-col justify-between ">
              <p className="text-justify italic">{quote.quote}</p>
              <p className="text-end text-slate-400 font-thin text-xs uppercase">{quote.author}</p>
            </div>
            <button onClick={assignQuote}>Nouvelle citation</button>
          </>
          }
        </>
        }
      </div>
    </div>
  )
}

export default Quotes