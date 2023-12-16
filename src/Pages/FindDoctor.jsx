import React from 'react';
import useDoctors from '../Hook/useDoctors';

const FindDoctor = () => {
    const [Doctors]=useDoctors()
    console.log(Doctors);
    return (
        <div>
            FindDoctor page
        </div>
    );
};

export default FindDoctor;