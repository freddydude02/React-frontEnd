const addStudent = async (fullName, cohort) => {
    if (fullName == "" || cohort == "") {
        console.log("Full Name and Cohort cannot be empty");
        return;
    }

    const payload = {
        fullname: fullName,
        cohort: cohort,
    };
    try {
        const response = await fetch(
            "http://backend-env.eba-d2upmfg3.ap-southeast-2.elasticbeanstalk.com/students",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            }
        );
        console.log(payload);
        return response;
    } catch (e) {
        console.log(e);
    }
};
export default addStudent;
