import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Article } from "./components/Article/Article";
import { Form } from "./components/Form/Form";
import { Footer } from "./components/Footer/Footer";
import {
  articleAbout,
  articleThesis,
  articleHowItWork,
} from "./utils/constants";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Article title="О проекте" contentArray={articleAbout} />
        <Article title="Как это работает?" contentArray={articleHowItWork} />
        <Article title="Тезисы" contentArray={articleThesis} />
        <Form title="Форма"
        subTitle="Заполняя эту форму, вы становитесь частью проекта."
        textButton="Отправить форму"/>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
