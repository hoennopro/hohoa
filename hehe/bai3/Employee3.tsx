import React, { useState } from "react";

const Employee: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log(`Searching for employee: ${searchTerm}`);
  };

  return (
    <div>
      <h1>Employee Search</h1>
      <input
        type="text"
        placeholder="Enter employee name"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Employee;
