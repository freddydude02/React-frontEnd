const getAllStudents = async () => {
    try {
        const response = await fetch(
            "http://backend-env.eba-d2upmfg3.ap-southeast-2.elasticbeanstalk.com/students",
            {
                method: "GET",
            }
        );
        console.log(response);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (e) {
        console.log(e);
    }
};

export default getAllStudents;
