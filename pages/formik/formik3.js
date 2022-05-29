import { Field, Form, Formik } from "formik";

const initialValue = {
  name: "",
};

export default function App() {
  return (
    <>
      <Formik
        initialValues={initialValue}
        onSubmit={(vals) => console.log(vals)}
      >
        {() => {
          return (
            <Form>
              <Field name="name" type="text" />
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
