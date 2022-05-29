import { Formik, Form } from "formik";
import * as yup from "yup";

const initialValue = {
  email: "",
  password: "",
  address1: "",
  address2: "",
  city: "",
  zipCode: "",
  check: "",
  //   option: "",
};

const validate = yup.object().shape({
  email: yup.string().required("Email is required to fill !!!"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "password should be more then 6 "),
  address1: yup.string().required("address is required to fill !!!"),
  city: yup.string().required("city is required to fill !!!"),
  zipCode: yup.string().max(6).min(6).required("zip code is reuired"),
  check: yup.boolean().required("check box is not filled"),
  //   option: yup.string().required("must select one"),
});

export default function App() {
  return (
    <>
      <Formik
        initialValues={initialValue}
        validationSchema={validate}
        onSubmit={(vals) => console.log(vals)}
      >
        {(formik) => {
          const { values, handleChange, touched, errors } = formik;
          return (
            <>
              <Form>
                <div className="row g-3 container">
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {touched.email && touched.email ? (
                      <p>{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                    />
                    {touched.password && touched.password ? (
                      <p>{errors.password}</p>
                    ) : null}
                  </div>
                  <div className="col-12">
                    <label for="inputAddress" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="1234 Main St"
                      name="address1"
                      value={values.address1}
                      onChange={handleChange}
                    />
                    {touched.address1 && touched.address1 ? (
                      <p>{errors.address1}</p>
                    ) : null}
                  </div>
                  <div className="col-12">
                    <label for="inputAddress2" className="form-label">
                      Address 2
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apartment, studio, or floor"
                      name="address2"
                      value={values.address2}
                      onChange={handleChange}
                    />
                    {touched.address2 && touched.address2 ? (
                      <p>{errors.address2}</p>
                    ) : null}
                  </div>
                  <div className="col-md-6">
                    <label for="inputCity" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                    />
                    {touched.city && touched.city ? <p>{errors.city}</p> : null}
                  </div>
                  <div className="col-md-4">
                    <label for="inputState" className="form-label">
                      State
                    </label>
                    <select
                      className="form-select"
                      name="options"
                      value={values.option}
                      onChange={handleChange}
                    >
                      <option selected>Choose...</option>
                      <option>first</option>
                      <option>second</option>
                      <option>third</option>
                      <option>forth</option>
                      <option>fifth</option>
                    </select>
                    {touched.option && touched.option ? (
                      <p>{errors.option}</p>
                    ) : null}
                  </div>
                  <div className="col-md-2">
                    <label for="inputZip" className="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="zipCode"
                      value={values.zipCode}
                      onChange={handleChange}
                    />
                    {touched.zipCode && touched.zipCode ? (
                      <p>{errors.zipCode}</p>
                    ) : null}
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="check"
                        value={values.check}
                        onChange={handleChange}
                      />

                      <label className="form-check-label" for="gridCheck">
                        Check me out
                      </label>
                      {touched.check && touched.check ? (
                        <p>{errors.check}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Sign in
                    </button>
                  </div>
                </div>
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
}
