// 3. via NewStudentForm.js
import { useEffect } from "react";
import NewStudentForm from "./NewStudentForm";

// 4. Create an "Add New Student" button that toggles form visibility

const Main = (props) => {
  // 4a. useState hook for toggling visibility
  const [displayForm, setDisplayForm] = useState(false);

  useEffect(() => {
    // 4b. put toggleVisibility in a useEffect hook
    const toggleVisibility = () => {
      setDisplayForm(!displayForm);
    };
  });

  return (
    <div>
      {/* 4c. Pass in toggleVisibilty as a prop to button and render its visiblity */}
      <button onClick={toggleVisibility}>Add New Student</button>
      {displayForm ? <NewStudentForm /> : null}
    </div>
  );
};

export default Main;
