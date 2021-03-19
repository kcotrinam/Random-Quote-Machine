const requestQuote = async (setQuote) => {
  try {
    const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";
    const response = await fetch(url);
    const json = await response.json();
    setQuote({
      quote: json.quotes[0].text,
      author: json.quotes[0].author
    })
  } catch (error) {
    throw Error('Not quote returned')
  }

}

export default requestQuote;