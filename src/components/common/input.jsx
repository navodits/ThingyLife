import React from "react";
import "../forms/form.css";

const Input = ({ name, error, label, isTextArea, ...rest }) => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      {!isTextArea && (
        <input
          {...rest}
          className="form-control"
          name={name}
          autoFocus
          id={name}
        />
      )}
      {isTextArea && (
        <textarea
          {...rest}
          rows={8}
          name={name}
          autoFocus
          id={name}
          className="textarea"
        />
      )}

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
