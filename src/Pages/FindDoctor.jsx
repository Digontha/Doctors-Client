import React from 'react';
import useDoctors from '../Hook/useDoctors';
import DoctorsCard from '../Elements/FindDoctorElements/DoctorsCard';
import Banner from '../Components/Banner';

const FindDoctor = () => {
    const [Doctors]=useDoctors()
    
    return (
      <>
       <Banner></Banner>
      <div className='grid lg:grid-cols-3 grid-cols-1 p-10 gap-10'>
        {
            Doctors?.map(doctor=><DoctorsCard key={doctor?._id} doctor={doctor}></DoctorsCard>)
        }
      </div>
      </>
    );
};

export default FindDoctor;