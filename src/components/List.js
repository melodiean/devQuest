import React from "react";

const List = (props) => {
  const { qns } = props;
  if (!qns || qns.length === 0) return <p>Error: No Data Found!</p>;
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        <h3>Available Questions</h3>
        {qns.map((qn) => {
          return (
            <li key={qn._id} className="qn">
              <p>{qn.question}</p>
              <div className="qn_text">
                <div className="qn_info">
                  <i className="material-icons">access_time</i>
                  <span>{qn.dateCreated.substr(0, 10)}</span>
                </div>
                <div className="qn_info">
                  <i className="material-icons">person</i>
                  <span>{qn.createdBy}</span>
                </div>
                <div className="qn_info">
                  <button >
                  <i className="material-icons">comment</i>
                  <span>{qn.answer_info.length}</span>
                </button>
                </div>
                
              </div>
            </li>
          );
        })}
      </ul>
      {/* <div className="log">
        <input type="text" placeholder="Enter Question..." />
        <button
          className="btn-small waves-effect waves-light teal"
          onClick={addQn}
        >
          Add Question
        </button>
      </div> */}
    </div>
  );
};
export default List;
