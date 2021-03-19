import { useEffect, useState } from "react";
import NextQuoteButton from "./NextBtn";
import requestQuote from "./services/ApiRequest";
import QuoteText from "./QuoteText";
import AuthorText from "./Author";

const Quote = () => {
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
          <AuthorText author={quoteInfo.author} />
          <div className="buttons-container">
            <a href="https://twitter.com/intent/tweet" target="_blank" id="tweet-quote">Tweet quote</a>
            <NextQuoteButton clickHandler={nextQuote} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Quote;