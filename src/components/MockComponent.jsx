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
          <NextQuoteButton clickHandler={nextQuote} />
          <a href="twitter.com/intent/tweet" id="tweet-quote">Tweet quote</a>
        </div>
      </div>
    </>
  )
}

export default Quote;