import { Route, Switch, Redirect } from "react-router-dom";
import Allquotes from "./pages/Allquotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import { DataContextProvider } from "./components/store/data-context";
import Error from "./pages/Error";
function App() {
  return (
    <DataContextProvider>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <Allquotes />
          </Route>
          <Route path="/quotes/:quoteid">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Layout>
    </DataContextProvider>
  );
}

export default App;
