import React from 'react';
import PropTypes from 'prop-types';

const DoctorsCard =({doctor})=> {
    console.log(doctor);
    const {name,specialty} =doctor||{}
    return (
        <>
            <div className="card bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>specialty: {specialty}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Accept</button>
                        <button className="btn btn-ghost">Deny</button>
                    </div>
                </div>
            </div>
        </>
    );
};

DoctorsCard.propTypes = {
    doctor: PropTypes.shape({
        name: PropTypes.string,
        specialty: PropTypes.string,
    }),
};

export default DoctorsCard;