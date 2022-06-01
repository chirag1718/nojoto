import { Form, Input, Modal } from "antd";

const UpdatedUserForm = ({ visible, onSubmit, onCancel, user }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Form"
      okText="OK"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            onSubmit(values);
          })
          .catch((info) => {
            console.log("Validation Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        name="updatedUser"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{
          name: user.name,
          email: user.email,
          phone: user.phone,
          website: user.website,
        }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Website"
          name="website"
          rules={[{ required: true, message: "Required" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdatedUserForm;