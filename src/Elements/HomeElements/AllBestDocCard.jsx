import React from 'react';

const AllBestDocCard = ({ doctor }) => {
    const {name,img,fee,specialty,rating} = doctor||{}
    return (
        <>
            <div className="card  bg-base-100 shadow-xl">
                <figure className='w-full h-[400px]'><img className='w-fit h-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{specialty}?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllBestDocCard;