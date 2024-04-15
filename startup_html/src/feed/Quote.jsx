import React from 'react';

export function Quote() {
    const [quote, setQuote] = React.useState('Loading...');
    const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

    // fetch(url)
    // .then((x) => x.json())
    // .then((response) => {
    //     document.querySelector("#quote").textContent = JSON.stringify(response.content, null, " ") + " -" + response.author;
    // })


    React.useEffect(() => {
        fetch("https://api.quotable.io/random")
            .then((response) => response.json())
            .then((data) => {
                setQuote(data.content);
                setQuoteAuthor(data.author);
            })
            .catch(() => {
                console.log("Error: quote fetch request failed");
                setQuote("Do or do not, there is no try.");
                setQuoteAuthor("Yoda");
            })
    }, [])

    return (
        <div id="quote_div">{quote} -{quoteAuthor}</div>
    );
}