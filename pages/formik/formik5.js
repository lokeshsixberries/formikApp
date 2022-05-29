import { Form, Formik, Field } from "formik";
import { Col, Row } from "reactstrap";
import * as yup from "yup";

const initialvalue = {
  fname: "",
  lname: "",
  email: "",
  mobile: "",
};

const validate = yup.object().shape({
  fname: yup.string().required("fname is required"),
  lname: yup.string().required("lname is required"),
  email: yup.string().email().required("email is required"),
  mobile: yup
    .string()
    .required("mobile is required")
    .max(10, "maximum 10 digit"),
});

function Input({ ...props }) {
  return <input className="form-control" {...props} />;
}

export default function App() {
  return (
    <>
      <Formik
        initialValues={initialvalue}
        onSubmit={(vals) => console.log(vals)}
        validationSchema={validate}
      >
        {(formik) => {
          const { touched, errors, handleSubmit, values, handleChange } =
            formik;
          return (
            <>
              <Form onSubmit={handleSubmit}>
                <Row className="m-4 ">
                  <Col>
                    <Input
                      type="text"
                      name="fname"
                      placeholder="First name"
                      value={values.fname}
                      onChange={handleChange}
                    />
                    {touched.fname && errors.fname ? (
                      <p>{errors.fname}</p>
                    ) : null}
                  </Col>
                  <Col>
                    <Input
                      type="text"
                      name="lname"
                      placeholder="Last name"
                      value={values.lname}
                      onChange={handleChange}
                    />
                    {touched.lname && errors.lname ? (
                      <p>{errors.lname}</p>
                    ) : null}
                  </Col>
                  <Col>
                    <Input
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {touched.email && errors.email ? (
                      <p>{errors.email}</p>
                    ) : null}
                  </Col>
                  <Col>
                    <Input
                      type="text"
                      name="mobile"
                      placeholder="Mobile No"
                      value={values.mobile}
                      onChange={handleChange}
                    />
                    {touched.mobile && errors.mobile ? (
                      <p>{errors.mobile}</p>
                    ) : null}
                  </Col>
                </Row>

                <button className="btn btn-primary mx-5 my-5" type="submit">
                  Submit
                </button>
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
}
