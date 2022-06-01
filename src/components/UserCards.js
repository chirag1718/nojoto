import { useState } from "react";
import { useUserContext } from "../UserContext";
import UpdatedUserForm from "./UpdatedUserForm";
import { Button, Card, Typography } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartOutlined,
  EditOutlined,
  DeleteFilled,
  HeartFilled,
} from "@ant-design/icons";
import "antd/dist/antd.min.css";


const { Title } = Typography;

const UserCards = ({ user }) => {
  const [visible, setVisible] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { users, setUsers } = useUserContext();

  const onSubmit = (formValues) => {
    const newUsers = [...users];
    const index = users.findIndex((u) => u.id === user.id);
    newUsers[index] = { ...formValues, username: user.username };
    setUsers(newUsers);
    setVisible(false);
  };

  return (
    <>
      <UpdatedUserForm
        user={user}
        visible={visible}
        onSubmit={onSubmit}
        onCancel={() => {
          setVisible(false);
        }}
      />
      <Card
        cover={
          <img
            alt={`${user.name}`}
            src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
            style={{
              backgroundColor: "#F5F5F5",
              height: "200px",
              borderWidth: "1px 1px 0px 1px",
              borderColor: "#E8E8E8",
              borderStyle: "solid",
            }}
          />
        }
        actions={[
          <Button
            icon={
              isFavorite ? (
                <HeartFilled style={{ fontSize: "130%" }} />
              ) : (
                <HeartOutlined style={{ fontSize: "130%" }} />
              )
            }
            style={{
              border: "none",
              boxShadow: "none",
              color: "#FF0000",
            }}
            onClick={() => {
              setIsFavorite(!isFavorite);
            }}
          />,
          <Button
            icon={<EditOutlined style={{ fontSize: "120%" }} />}
            style={{
              border: "none",
              boxShadow: "none",
              color: "#8A8A8A",
            }}
            onClick={() => {
              setVisible(true);
            }}
          />,
          <Button
            icon={<DeleteFilled style={{ fontSize: "120%" }} />}
            style={{
              border: "none",
              boxShadow: "none",
              color: "#8A8A8A",
            }}
            onClick={() => {
              setUsers(users.filter((u) => u !== user));
            }}
          />,
        ]}
        style={{ border: "1px solid #E8E8E8" }}
      >
        <div>
          <Title level={5}>{user.name}</Title>
          <div>
            <MailOutlined
              style={{
                fontSize: "125%",
                margin: "0 .6em .4em 0",
                color: "#595959",
              }}
            />
            {user.email}
          </div>
          <div>
            <PhoneOutlined
              style={{
                fontSize: "125%",
                margin: "0 .6em .4em 0",
                color: "#595959",
              }}
            />
            {user.phone}
          </div>
          <div>
            <GlobalOutlined
              style={{
                fontSize: "125%",
                margin: "0 .6em .4em 0",
                color: "#595959",
              }}
            />
            http://{user.website}
          </div>
        </div>
      </Card>
    </>
  );
};

export default UserCards;
