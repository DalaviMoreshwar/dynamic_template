import React, { useState } from 'react'
import FieldLabel from '../FieldLabel'

const AddOption = ({ addOptionData }) => {
  const [optionField, setOptionField] = useState([])

  const addOption = () => {
    let newOption = { option: "" }
    setOptionField([...optionField, newOption])
    addOptionData([...optionField, newOption])
  }

  const handleInputChange = (index, e) => {
    let data = [...optionField];
    data[index][e.target.name] = e.target.value;
    setOptionField(data)
  }

  const removeOption = (index, e) => {
    e.preventDefault();
    let data = [...optionField];
    data.splice(index, 1);
    setOptionField(data)
  }

  return (
    <div className='mt-3'>
      <FieldLabel label="Dropdown Options:" /> {" "}
      <button onClick={addOption} className="mr-3 btn btn-outline-secondary btn-sm"><strong>+</strong></button>
      <form>
        {optionField.map((option, index) =>
          <div className="row mt-1 mb-2" key={index}>
            <div className="col-md-10">
              <input
                required
                className="form-control"
                name='option'
                placeholder='Option'
                value={option.option}
                onChange={e => handleInputChange(index, e)}
              /></div>
            <div className="col-md-2"><button className="btn btn-outline-danger btn-md" onClick={(e) => removeOption(index, e)}>x</button></div>
          </div>
        )}
      </form>
    </div>
  )
}

export default AddOption