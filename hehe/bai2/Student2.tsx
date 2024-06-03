import React from "react";
import { useParams } from "react-router-dom";

type Params = {
  name: string;
};

function Student() {
  const { name } = useParams<Params>();

  return (
    <div>
      <h1>Student Detail</h1>
      <p>Student Name: {name}</p>
    </div>
  );
}

export default Student;
