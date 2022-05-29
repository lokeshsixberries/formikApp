import { useField, Form, Formik, FormikProps } from "formik";

const initalValue = {
  name: "",
  age: "",
  branch: "",
};

function Input({ ...props }) {
  const [field] = useField(props);
  console.log(field);
  return (
    <>
      <input {...field} {...props} />
    </>
  );
}

function Btn({ ...props }) {
  return (
    <>
      <button type={props.type}>{props.name}</button>
    </>
  );
}

export default function App() {
  return (
    <>
      <Formik
        initialValues={initalValue}
        onSubmit={(vals) => console.log(vals)}
      >
        {() => {
          return (
            <>
              <Form>
                <Input name="name" type="text" />
                <Input name="age" type="text" />
                <Input name="branch" type="text" />
                <Btn name="submit" type="submit" />
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
}
