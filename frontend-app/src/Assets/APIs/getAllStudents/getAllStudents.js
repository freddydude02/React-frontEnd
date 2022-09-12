const getAllStudents = async () => {
    try {
        const response = await fetch(
            "http://firstspring-env.eba-rum5wjtm.ap-southeast-2.elasticbeanstalk.com/students",
            {
                method: "GET",
            }
        );
        const result = await response.json();
        console.log(result);
        return result;
    } catch (e) {
        console.log(e);
    }
};

export default getAllStudents;
