const deleteStudent = async (id) => {
    try {
        const response = await fetch(
            "http://backend-env.eba-d2upmfg3.ap-southeast-2.elasticbeanstalk.com/students/" +
                id,
            {
                method: "Delete",
            }
        );

        return response;
    } catch (e) {
        console.log(e);
    }
};
export default deleteStudent;
