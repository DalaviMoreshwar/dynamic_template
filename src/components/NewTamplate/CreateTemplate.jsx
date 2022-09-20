import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FieldLabel from "../FieldLabel";
import Preview from '../Preview';
import { Button, Checkbox } from 'antd'
import { _submitData } from '../../actions/submit.action';


const CreateTemplate = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [templateName, setTemplateName] = useState("")
  const [form, setForm] = useState([]);

  const handleAdd = () => {

    const inputState = {
      fieldName: "",
      fieldPlaceholder: "",
      isRequired: false
    }

    setForm(prev => [...prev, inputState])
  }

  const handleOnChange = (index, e) => {
    e.preventDefault();
    setForm(prev => {
      return prev.map((item, i) => {
        if (i !== index) {
          return item
        }

        return {
          ...item,
          [e.target.name]: e.target.value
        }

      })
    })
  }

  const handleCheck = (index, e) => {
    setForm(prev => {
      return prev.map((item, i) => {
        if (i !== index) {
          return item
        }

        return {
          ...item,
          [e.target.name]: e.target.checked,
        }

      })
    })
  }

  const removeField = (index) => {
    let data = [...form];
    data.splice(index, 1)
    setForm(data)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (templateName !== "") {
      let obj = {
        templateName,
        temps: form
      }
      dispatch(_submitData(obj))
    }

    navigate("/");
  }
  return (
    <>
      <div className="row g-0 mt-3 ">
        <div className="col-6 col-md-3 p-3">
          <div className="card">
            <div className="card-body d-grid">
              <h5 className="text-center">Tool Box</h5>
              <Button
                type="primary"
                block
                onClick={handleAdd}
              >
                Text Field
              </Button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-7 p-3">
          <h3 className="text-center">Create Template</h3>
          <hr />
          <form>
            <div style={{ height: "70vh", overflow: "scroll" }}>
              <FieldLabel label="Template Name:" />
              <input
                id="templateName"
                className="form-control"
                type="text"
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
                required
              />
              <hr />
              {form.map((item, index) =>
                <div className='card p-2 mt-4 mb-4' key={`item-${index}`}>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Button type="primary" danger size="small" shape="circle" onClick={() => removeField(index)}>X</Button>
                  </div>
                  <div className="d-flex justify-content-between">

                    <FieldLabel label="Field Name:" />
                    <div>
                      <Checkbox name="isRequired" onChange={(e) => handleCheck(index, e)}>Required</Checkbox>
                      {" "}

                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="fieldName"
                    value={item.fieldName}
                    onChange={(e) => handleOnChange(index, e)} required />

                  <FieldLabel label="Placeholder:" />
                  <input
                    type="text"
                    className="form-control"
                    name="fieldPlaceholder"
                    value={item.fieldPlaceholder}
                    onChange={(e) => handleOnChange(index, e)} required />
                </div>
              )}
            </div>
            <div className="fixed-bottom bg-light p-2 mt-5">
              <div className="d-grid gap-2 d-md-flex justify-content-center form-footer container">
                <Preview form={form} /> {" "}
                <Button type="secondary" disabled={templateName === ""} onClick={e => handleSubmit(e)}>submit</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateTemplate