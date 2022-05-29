import { Form, Formik, Field } from "formik";
import * as yup from "yup";

const initialValue = {
  name: "",
};

const validate = yup.object().shape({
  name: yup.string().required("Name is required"),
});

export default function App() {
  return (
    <>
      <Formik
        initialValues={initialValue}
        onSubmit={(vals) => console.log(vals)}
        validationSchema={validate}
      >
        {(formik) => {
          const { touched, errors } = formik;
          return (
            <>
              <Form>
                <Field name="name" type="text" />
                {errors.name && touched.name ? <p>{errors.name}</p> : null}
                <button type="submit">Submit</button>
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
}
