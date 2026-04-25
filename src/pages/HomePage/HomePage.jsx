import { useState, useEffect } from "react";
// import cls from "./HomePage.module.css";
// import { QuestionCard } from "../../components/QuestionCard";
import { API_URL } from "../../constants";
import { QuestionCardList } from "../../components/QuestionCardList";
import { Loader } from "../../components/Loader";
// import { delayFn } from "../../helpers/delayFn";
import { useFetch } from "../../hooks/useFetch";

export const HomePage = () => {
  const [questions, setQuestions, error] = useState([]);
  const [getQuestions, isLoading] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const questions = await response.json();

    setQuestions(questions);
    return questions;
  });

  useEffect(() => {
    getQuestions("react");
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <QuestionCardList cards={questions} />
    </>
  );
};
