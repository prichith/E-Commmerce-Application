import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useSelector ,useDispatch } from "react-redux";
import { setLoginFormOpen } from '../../redux/landingPage';
import { setSignupFormOpen } from '../../redux/landingPage';

const App = () => {
    const { loginFormOpen } = useSelector((state) => state.home);
    const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  function openSignupForm(){
    console.log('button clicked');
    dispatch(setLoginFormOpen(false));
    // signupForm();
    dispatch(setSignupFormOpen(true));

  }
  // function signupForm(){
  //   dispatch(setSignupFormOpen(true));

  // }

  return (
    <Form
      name="normal_login"
      className={loginFormOpen ? "login-form loginForm flex" : "login-form loginForm"}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <span onClick={openSignupForm}><a>register now!</a></span>
      </Form.Item>
    </Form>
  );
};

export default App;
