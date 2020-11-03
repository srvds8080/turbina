import "./App.css";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main"
import {Article} from "./components/Article/Article";
import {
  articleAbout,
  articleThesis,
  articleHowItWork
} from "./utils/constants"

function App() {
  return (
    <div className="App">
      <Header/>
      <Main>
        <Article title={"О проекте"}
                 contentArray={articleAbout}/>
        <Article title={"Как это работает"}
                 contentArray={articleHowItWork}/>
        <Article title={"Тезисы"}
                 contentArray={articleThesis}/>
      </Main>
    </div>
  );
}

export default App;

