// @ts-nocheck
import React from 'react';
import { LockOutlined, UserOutlined, DesktopOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import styles from './index.module.less'

export default ({
  onFinish,
  initialValues = {
    remember: true,
    port: 22
  }
}) => {
  const handleFinish = (values) => {
    console.log('Received values of form: ', values);
    onFinish?.(values)
  };

  return (
    <Form
      name="normal_login"
      className={styles["login-form"]}
      initialValues={initialValues}
      onFinish={handleFinish}
    >
      <Form.Item
        name="address"
        rules={[
          {
            required: true,
            message: 'Please input ssh host!',
          },
        ]}
      >
        <Input prefix={<DesktopOutlined className="site-form-item-icon" />} placeholder="IP" />
      </Form.Item>
      <Form.Item
        name="port"
        rules={[
          {
            required: true,
            message: 'Please input ssh port!',
          },
        ]}
      >
        <Input prefix={<DesktopOutlined className="site-form-item-icon" />} placeholder="IP" />
      </Form.Item>
      <Form.Item
        name="user"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="pwd"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
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

        <a className={styles["login-form-forgot"]} href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles["login-form-button"]}>
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};
