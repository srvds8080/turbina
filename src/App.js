import "./App.css";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main"
import {Article} from "./components/Article/Article";
import {
  articleAbout,
  articleThesis,
  articleHowItWork
} from "./utils/constants"
import {Form} from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <Header/>
      {/*<div className={styles.background}>*/}
        <Main>
          <Article title={"О проекте."}
                   contentArray={articleAbout}/>
          <Article title={"Как это работает?"}
                   contentArray={articleHowItWork}/>
          <Article title={"Тезисы."}
                   contentArray={articleThesis}/>
          <Form/>
        </Main>
      {/*</div>*/}

    </div>
  );
}

export default App;

