import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import Typography from "@mui/material/Typography";
import bgVid from "../Assets/loginVideo.mp4";

import '../Components/css/LoginForm.css'

const LoginForm = () => {
  let navigate = useNavigate();

  const onFinish = (values) => {
    let userData = JSON.parse(localStorage.getItem("userData"));
    userData.filter((item) => {
      if (
        item.email === values["username"] &&
        item.password === values["password"]
      ) {
        localStorage.setItem("loggedInUser", JSON.stringify(item));
        navigate("/MainNews");
      } else
        alert(
          "Invalid Email or Password.  if you are not registered with us, sign up to continue"
        );
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="loginForm">
      <video autoPlay loop muted id="myVid">
        <source src={bgVid} type="video/mp4" />
      </video>
      <Typography
        variant="h3"
        gutterBottom
        textAlign="center"
        marginBottom="10rem"
        marginTop="2rem"
        color="white"
      >
        Welcome to The Developer's News Application
      </Typography>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ width: "400px", margin: "auto" }}
      >
        <Form.Item
          label="Email/Username"
          width="auto"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="User Password"
          style={{ width: "auto" }}
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button color="white" htmlType="submit">
            Login
          </Button>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            style={{ color: "white" }}
            onClick={() => navigate("/SignUp")}
            htmlType="submit"
          >
            Not a user ? Click here to sign Up
          </Button>
        </Form.Item>
      </Form>
      <button
        id="guestLogin"
        onClick={() => {
          localStorage.setItem("loggedInUser", JSON.stringify(  {
            Name: "Guest User",
            confirm: "123",
            email: "shivanshrawat587@gmail.com",
            gender: "male",
            password: "123",
            phone: "09557667604",
            prefix: "91"
          }
));
        
          navigate("/MainNews");
        }}
        htmlType="submit"
      >
        Guest Login
      </button>
    </div>
  );
};
export default LoginForm;
