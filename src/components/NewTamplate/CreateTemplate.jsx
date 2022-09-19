import React, { useState } from "react";
import FieldLabel from "../FieldLabel";
import AddOption from "./AddOption";

var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "10px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
}

var formFooter = {
  display: 'block',
  padding: '10px',
  height: '60px',
  width: '100%',
}

const CreateTemplate = () => {
  const [templateName, setTemplateName] = useState("")
  const [inputFields, setInputFields] = useState([])

  const handleFormChange = (index, e) => {
    let data = [...inputFields];
    data[index][e.target.name] = e.target.value;
    setInputFields(data)
  }

  const addField = () => {
    let newField = { fiedlLable: "", options: [{ option: "" }] }
    setInputFields([...inputFields, newField])
  }

  const removeField = (index) => {
    let data = [...inputFields];
    data.splice(index, 1)
    setInputFields(data)
  }



  const submit = (e) => {
    e.preventDefault();
    console.log(inputFields)
  }

  return (
    <>
      <div className="row g-0 mt-3 ">
        <div className="col-6 col-md-3 p-3">
          <div className="card">
            <div className="card-body d-grid">
              <h5 className="text-center">Tool Box</h5>
              <button
                type="text"
                block
                className="btn btn-outline-primary btn-md"
                onClick={addField}
              >
                Dropdown
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-7 p-3">
          <h3 className="text-center">Create Template</h3>

          <hr />

          <FieldLabel label="Template Name:" />
          <input
            id="templateName"
            className="form-control"
            type="text"
            value={templateName}
            onChange={(e) => setTemplateName(e.target.value)} />

          <hr />

          <form>
            {inputFields.map((input, index) => {
              return (
                <div class="card mb-3" key={index} >
                  <div class="card-body">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      <span className=" btn btn-danger btn-md" onClick={() => removeField(index)}>x</span>
                    </div>
                    <div className="card-body">
                      <div className="mb-1">
                        <FieldLabel label="Field Lable:" />
                        <input
                          className="form-control"
                          name='fiedlLable'
                          placeholder='Lable Name'
                          value={input.labelName}
                          onChange={e => handleFormChange(index, e)}
                        />
                      </div>
                      <AddOption handleFormChange={handleFormChange} inputFields={inputFields} setInputFields={setInputFields} />
                    </div>
                  </div>
                </div>
              )
            })}
            <div style={formFooter} />
            <div style={style}>
              <div className="d-grid gap-2 d-md-flex justify-content-center form-footer container">
                <button className="btn btn-outline-success btn-md" >Privew</button> {" "}
                <button className="btn btn-outline-secondary btn-md" onClick={submit}>submit</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTemplate;
