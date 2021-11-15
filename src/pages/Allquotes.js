import { React, useContext } from "react";
import QuoteList from "../components/quotes/QuoteList";
import DataContext from "../components/store/data-context";

function Allquotes() {
  const context = useContext(DataContext);
  const DATA = context.data;
  return <QuoteList quotes={DATA} />;
}

export default Allquotes;
