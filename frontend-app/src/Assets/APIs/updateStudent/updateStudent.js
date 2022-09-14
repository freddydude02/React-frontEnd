const updateStudent = async (fullName, cohort, id) => {
    const payload = {
        fullname: fullName,
        cohort: cohort,
    };

    try {
        const response = await fetch(
            "http://backend-env.eba-d2upmfg3.ap-southeast-2.elasticbeanstalk.com/students/" +
                id,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            }
        );
        return response;
    } catch (e) {
        console.log(e);
    }
};
export default updateStudent;
