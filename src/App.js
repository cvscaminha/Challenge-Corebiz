import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Products from "./components/Products/Products";
import Newsletter from "./components//Newsletter/Newsletter";
import SucessNews from "./components/SucessNews/SucessNews";

function App() {
  return (
    /* Retorna os componentes do APP */
    <BrowserRouter>
      <Switch>
        <div>
          <Route
            path="/"
            exact
            render={() => (
              <>
                <Header />
                <Main />
                <Products />
                <Newsletter />
                <Footer />
              </>
            )}
          />
          <Route
            path="/SucessNews"
            render={() => (
              <>
                <Header />
                <Main />
                <Products />
                <SucessNews />
                <Footer />
              </>
            )}
          />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
