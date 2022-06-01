import UserCards from "./UserCards";
import { Col, Row } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "antd/dist/antd.min.css";
import { useUserContext } from "../UserContext";

const Users = () => {
  const { isLoading, users } = useUserContext();
  return (
    <>
      {isLoading ? (
        <LoadingOutlined
          style={{
            margin: "auto",
            width: "100%",
            marginTop: "4em",
            fontSize: "500%",
          }}
        />
      ) : (
        <Row
          gutter={[30, 30]}
          style={{ padding: "1.09em 0 1em", overflow: "hidden" }}
        >
          {users.map((user) => (
            <Col xs={24} md={8} xl={6} key={user.username}>
              <UserCards user={user} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Users;
