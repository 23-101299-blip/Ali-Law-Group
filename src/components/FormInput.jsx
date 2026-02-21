import React from 'react';
import './FormInput.css';

const FormInput = ({ label, type = 'text', name, value, onChange, placeholder, required = false, isTextArea = false }) => {
    return (
        <div className="form-group">
            {label && <label className="form-label">{label}</label>}
            {isTextArea ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className="form-control form-textarea"
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className="form-control"
                />
            )}
        </div>
    );
};

export default FormInput;
