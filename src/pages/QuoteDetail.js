import React from "react";
import { useContext } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighLightedQuote from "../components/quotes/HighlightedQuote";
import DataContext from "../components/store/data-context";

function QuoteDetail() {
  const context = useContext(DataContext);
  const DATA = context.data;
  const param = useParams();
  const quotes = DATA.find((val) => val.id === param.quoteid);
  if (!quotes) {
    return <h1>Error finding the quotes</h1>;
  }
  return (
    <>
      <HighLightedQuote text={quotes.text} author={quotes.author} />
      <Route path={`/quotes/${param.quoteid}/comments`}>
        <Comments />
      </Route>
    </>
  );
}
//this is a demo page for learning react-router all the best man
export default QuoteDetail;
