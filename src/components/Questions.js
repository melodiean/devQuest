import React, { useEffect, useState } from "react";
import List from "./List";
import Navbar from "./Navbar";
import withListLoading from "./WithListLoading";

function Questions() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    qns: null,
  });

  useEffect(() => {
    setAppState({ loading: true });

    const apiUrl = "https://devquestapi.herokuapp.com/api/v1/questions";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((qns) => {
        setAppState({ loading: false, qns: qns });
      })
      .catch((er) => console.log(er));
  }, [setAppState]);

  const [quest, setQuestion] = useState("");

  const handleChange = (el) => {
    let qq = el.target.value;
    setQuestion(qq);
    console.log(qq);
  };

  const handleSubmit = (elm) => {
    const url = "https://devquestapi.herokuapp.com/api/v1/questions";

    const Qdata = {
      question: quest,
    };

    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Qdata),
    };

    fetch(url, reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((er) => console.log(er));

    elm.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <div>
        <ListLoading isLoading={appState.loading} qns={appState.qns} />
      </div>

      <form onSubmit={handleSubmit} className="log">
        <input
          type="text"
          placeholder="Enter Question..."
          value={quest}
          name="qqq"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn-small waves-effect waves-light teal"
        >
          Add Question
        </button>
      </form>
    </div>
  );
}
export default Questions;
