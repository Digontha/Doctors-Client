
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const AllBestDocCard = ({ doctor }) => {
    const { name, img, fee, specialty, rating } = doctor || {}
    return (
        <>
            <div className="card lg:w-3/4 w-full  bg-green-300 shadow-xl">
                <figure className='w-full h-[400px]'><img className='w-fit h-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Specialty: {specialty}</p>
                    <p>Fee: {fee}</p>
                    <div>
                        <Rating
                            initialRating={rating}
                            readonly
                            emptySymbol={<FontAwesomeIcon icon={solidStar} color="#ddd" />}
                            fullSymbol={<FontAwesomeIcon icon={solidStar} color="#C99630" />}
                        />
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn  text-green-600 btn-outline">Appointment</button>
                    </div>
                </div>
            </div>
        </>
    );

};

AllBestDocCard.propTypes = {
    doctor: PropTypes.shape({
        name: PropTypes.string,
        img: PropTypes.string,
        fee: PropTypes.number,
        specialty: PropTypes.string,
        rating: PropTypes.number,
    }),
};

export default AllBestDocCard;