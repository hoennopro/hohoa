import React from "react";
import { useParams } from "react-router-dom";

const Team: React.FC = () => {
  const { teamId } = useParams<{ teamId: string }>();

  return (
    <div>
      <h2>Team Detail Page</h2>
      <p>Details for team: {teamId}</p>
    </div>
  );
};

export default Team;
