import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'antd'
import { useSelector } from "react-redux";
import Preview from "../components/Preview";


const Home = () => {
  const templates = useSelector(state => state.formDataReducer.data)
  return (
    <div>
      <div className="mt-5 d-flex justify-content-between">
        <div>Tempates</div>
        <div className="d-flex">
          <Link to="/create-template" className="d-flex">
            <Button type="primary">
              Create
            </Button>
          </Link>
        </div>
      </div>
      <hr />
      {templates.map((temp, index) => <div key={`temp-${index}`}>
        <div className="card">
          <div class="card-body">
            <h4 class="card-title">{temp.templateName}</h4>
            <ol className="mt-5 d-flex justify-content-between">
              {temp.temps.map((item, i) => {
                return <li key={`list-${i}`}>
                  {item.fieldName}</li>
              })}
              <Preview form={temp.temps} />
            </ol>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Home;
