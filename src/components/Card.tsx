import React from "react";
import "../estilos/Card.css";

interface CardProps {
  title: string;
  value: string;
  style?: React.CSSProperties;
}

function Card({ title, value, style }: CardProps) {
  return (
    <div className="card" style={style}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default Card;
