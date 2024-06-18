// import React from "react";
// import { Button, Form, Input, InputNumber } from "antd";
// import '../loginForm/login.css';
// import { useSelector } from "react-redux";


// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };

// /* eslint-disable no-template-curly-in-string */
// const validateMessages = {
//   required: "${label} is required!",
//   types: {
//     email: "${label} is not a valid email!",
//     number: "${label} is not a valid number!",
//   },
//   number: {
//     range: "${label} must be between ${min} and ${max}",
//   },
// };
// /* eslint-enable no-template-curly-in-string */

// const onFinish = (values) => {
//   console.log(values);
// };
// const SignupForm = ({formStatus , formToggle}) => (
//   <div className={formStatus ? "signupForm flex" : "signupForm"}>
//   <Form
//     {...layout}
//     name="nest-messages"
//     onFinish={onFinish}
//     style={{
//       maxWidth: 600,
//     }}
//     validateMessages={validateMessages}
//   >
//     <Form.Item
//       name={["user", "name"]}
//       label="Name"
//       rules={[
//         {
//           required: true,
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>
//     <Form.Item
//       name={["user", "email"]}
//       label="Email"
//       rules={[
//         {
//           type: "email",
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       name={["user", "address"]}
//       label="Address"
//       rules={[
//         {
//           required: true,
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       name={["user", "phone"]}
//       label="Phone"
//       rules={[
//         {
//           type: "number",
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       name={["user", "password"]}
//       label="Password"
//       rules={[
//         {
//           required: true,
//           message: "Please input your password!",
//         },
//         {
//           min: 6,
//           message: "Password must be at least 6 characters long!",
//         },
//       ]}
//     >
//       <Input.Password />
//     </Form.Item>

//     <Form.Item
//       wrapperCol={{
//         ...layout.wrapperCol,
//         offset: 8,
//       }}
//     >
//       <Button type="primary" htmlType="submit">
//         SignUp
//       </Button>
//     </Form.Item>
//   </Form>
//   </div>
// );
// export default SignupForm;



import React from "react";
import { Button, Form, Input } from "antd";
import { useSelector } from "react-redux";
import '../loginForm/login.css';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const SignupForm = () => {
  const { signupFormOpen } = useSelector((state) => state.home);

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className={signupFormOpen ? "signupForm flex" : "signupForm"}>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={["user", "address"]}
          label="Address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={["user", "phone"]}
          label="Phone"
          rules={[
            {
              type: "number",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={["user", "password"]}
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              min: 6,
              message: "Password must be at least 6 characters long!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignupForm;
