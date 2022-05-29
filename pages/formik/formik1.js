import { Form, Formik, useFormik } from "formik";
import * as yup from "yup";

export default function formik() {
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      branch: "",
    },
    onSubmit: (vals) => console.log(vals),
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <input
          name="age"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        <input
          name="branch"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.branch}
        />
        <button type="submit"> Submit</button>
      </form>
    </>
  );
}
