// 1. npm i and npm run seed
// 2. Create NewStudentForm.js with 3 input fields (firstName, lastName, email) and a submit button

import React from "react";

const NewStudentForm = () => {
  return (
    <form>
      <label>
        First Name:
        <input type="text" name="firstName" />
      </label>
      <label>
        LastName:
        <input type="text" name="lastName" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewStudentForm;

// 3. Create Main.js and go into it