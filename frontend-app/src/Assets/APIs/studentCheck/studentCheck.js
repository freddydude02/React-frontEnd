import addStudent from "../addStudent/addStudent";
import getStudent from "../getStudent/getStudent";
import updateStudent from "../updateStudent/updateStudent";

const studentCheck = async (fullName, cohort, inputId) => {
    if (inputId == "" || inputId == undefined) {
        addStudent(fullName, cohort);
        return;
    }

    const response = await getStudent(inputId);
    const responseId = response.id;

    if (responseId != inputId) {
        console.log("Their is no existing student with the given id");
        return;
    }
    updateStudent(fullName, cohort, responseId);
};
export default studentCheck;
