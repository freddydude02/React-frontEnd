const deleteStudent = async (id) => {
    try {
        const response = await fetch(
            "http://firstspring-env.eba-rum5wjtm.ap-southeast-2.elasticbeanstalk.com/students/" +
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
