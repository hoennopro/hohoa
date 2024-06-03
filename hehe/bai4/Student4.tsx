import React from "react";
import { useSearchParams } from "react-router-dom";

const Student: React.FC = () => {
  const [searchParams] = useSearchParams();
  const studentName = searchParams.get("studentName");

  return (
    <div>
      <h1>Student Detail</h1>
      <p>Student Name: {studentName}</p>
    </div>
  );
};

export default Student;
