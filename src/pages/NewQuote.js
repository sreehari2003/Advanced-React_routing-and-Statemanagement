import { React, useContext } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import DataContext from "../components/store/data-context";
import { useHistory } from "react-router";

function NewQuote() {
  const context = useContext(DataContext);
  const history = useHistory();
  const onAddQuote = (data) => {
    context.addData(data);
    history.push("/quotes");
  };
  return <QuoteForm onAddQuote={onAddQuote} />;
}

export default NewQuote;
