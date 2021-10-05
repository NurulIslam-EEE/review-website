import { useEffect, useState } from "react";


const useCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return [courses];
}
export default useCourses;
