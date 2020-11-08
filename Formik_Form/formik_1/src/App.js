import React from "react";
import { Formik, Form } from "formik";
import { loginFormValidationSchema } from "./utils/utils-validations";
import Dropzone from "react-dropzone";

import CheckBox from "./Form/CheckBox";
import SelectDrop from "./Form/SelectDrop";
import TextInput from "./Form/TextInput";

function App() {
  const uploadDocumentHanlder = (e) => {
    e.preventDefault();
    console.log("UPload Handler");
  };
  return (
    <div className="App">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          gender: "",
          terms: false,
          files: [],
        }}
        validationSchema={loginFormValidationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 5000);
        }}
      >
        {(props) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              minWidth: "400px",
              margin: "auto",
            }}
          >
            <h1 style={{ alignSelf: "center" }}>Login Form</h1>
            <TextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Enter name"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
            />
            <TextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
            />
            <TextInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.password}
            />
            <SelectDrop
              label="Gender"
              name="gender"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.gender}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </SelectDrop>

            <Dropzone
              onDrop={(acceptedFiles) => {
                // do nothing if no files
                if (acceptedFiles.length === 0) {
                  return;
                }
                console.log(acceptedFiles);
                // on drop we add to the existing files
                props.setFieldValue(
                  "files",
                  props.values.files.concat(acceptedFiles)
                );
              }}
              accept="image/jpeg"
            >
              {({
                getRootProps,
                getInputProps,
                isDragActive,
                isDragReject,
              }) => (
                <section
                  style={{ border: "1px dashed black", marginTop: "5px" }}
                >
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p style={{ textAlign: "center" }}>
                      {!isDragActive && "Click here or drop a file to upload!"}
                      {isDragActive &&
                        !isDragReject &&
                        "Drop it like it's hot!"}
                      {isDragReject && "File type not accepted, sorry!"}
                    </p>

                    <div
                      style={{
                        margin: "auto",
                        display: "flex",
                        flexWrap: "wrap",
                      }}
                    >
                      {props.values.files.map((file, i) => (
                        <div
                          key={file.name}
                          onClick={() => props.values.files.splice(i, 1)}
                        >
                          <img
                            src={URL.createObjectURL(file)}
                            style={{ width: "190px", margin: "0 3px 0 3px" }}
                            alt="preview"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}
            </Dropzone>

            <CheckBox
              lable="terms"
              name="terms"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.terms}
            >
              Terms & Condition
            </CheckBox>
            <button type="submit" disabled={props.isSubmitting}>
              {props.isSubmitting ? "Loading..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
