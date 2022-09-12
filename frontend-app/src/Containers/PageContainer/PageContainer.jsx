import deleteStudent from "../../Assets/APIs/deleteStudent/deleteStudent";
import getAllStudents from "../../Assets/APIs/getAllStudents/getAllStudents";
import getStudent from "../../Assets/APIs/getStudent/getStudent";
import studentCheck from "../../Assets/APIs/studentCheck/studentCheck";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import React, { useState } from "react";

const PageContainer = () => {
    const [currentIdSearch, setCurrentIdSearch] = useState("");
    const [currentNameSearch, setCurrentNameSearch] = useState("");
    const [currentCohortSearch, setCurrentCohortSearch] = useState("");

    return (
        <div>
            <Input
                placeholder={"Student Id"}
                value={currentIdSearch}
                inputHandler={(e) => setCurrentIdSearch(e.target.value)}
            ></Input>
            <Input
                placeholder={"Full Name"}
                value={currentNameSearch}
                inputHandler={(e) => setCurrentNameSearch(e.target.value)}
            ></Input>
            <Input
                placeholder={"Cohort"}
                value={currentCohortSearch}
                inputHandler={(e) => setCurrentCohortSearch(e.target.value)}
            ></Input>
            <Button
                label={"Find Student"}
                clickHandler={() => getStudent(currentIdSearch)}
            ></Button>
            <Button
                label={"Add/Update"}
                clickHandler={() =>
                    studentCheck(
                        currentNameSearch,
                        currentCohortSearch,
                        currentIdSearch
                    )
                }
            ></Button>
            <Button
                label={"Delete"}
                clickHandler={() => deleteStudent(currentIdSearch)}
            ></Button>
            <Button label={"Search All"} clickHandler={getAllStudents}></Button>
        </div>
    );
};
export default PageContainer;
