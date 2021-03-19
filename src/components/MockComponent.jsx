import { useEffect, useState } from "react";
import NextQuoteButton from "./NextBtn";
import requestQuote from "./services/ApiRequest";
import QuoteText from "./QuoteText"

const Joke = () => {
  const [quoteInfo, setQuoteInfo] = useState({
    quote: '',
    author: ''
  })
  useEffect(() => {
    requestQuote(setQuoteInfo)
  }, [])

  const nextQuote = () => {
    requestQuote(setQuoteInfo)
  }

  return (
    <>
      <div >
        <div className="container" id="quote-box">
          <QuoteText quote={quoteInfo.quote} />
          <div className="joke-container" id="author">{quoteInfo.author}</div>
          <NextQuoteButton clickHandler={nextQuote} />
          <a href="twitter.com/intent/tweet" id="tweet-quote">Tweet quote</a>
        </div>
      </div>
    </>
  )
}

export default Joke;