import React from 'react';

const Heading = ({heading}) => {
    return (
        <div className="bg-gray-800 w-[300px] mx-auto py-3 rounded-full my-5">
            <h1 className="text-3xl text-center  text-green-400 font-bold">{heading}</h1>
        </div>
    );
};

export default Heading;