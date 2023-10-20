import React from "react";
import { Card } from "antd";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./Card.css"; // Import the CSS file

function CardComponent({ title, description, buttonText }) {
  return (
    <Card className="card">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          <UserOutlined style={{ marginRight: "5px" }} />
          {buttonText}
        </a>
      </div>
    </Card>
  );
}

export default CardComponent;