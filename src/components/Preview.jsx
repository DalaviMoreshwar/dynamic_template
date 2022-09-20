import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import FieldLabel from './FieldLabel';

const Preview = ({ form }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="primary" success onClick={showModal} disabled={form.length === 0}>
                Preview
            </Button>
            <Modal title="Template Privew" centered open={isModalOpen} onCancel={handleCancel} footer="">
                {form.map((item, index) =>
                    <div key={`field-${index}`}>
                        <FieldLabel label={item.fieldName} />
                        {item.isRequired ? <span style={{ color: "red" }}>*</span> : ""}
                        <input
                            className="form-control"
                            name={item.fieldPlaceholder}
                            placeholder={item.fieldPlaceholder}
                            required={item.isRequired}
                        />
                    </div>
                )}
            </Modal>
        </>
    )
}

export default Preview