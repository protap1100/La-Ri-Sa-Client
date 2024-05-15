import image from '../../assets/images/offer.jpg'

const OfferModal = ({closeModal}) => {
    return (
        <div className='font-Cave text-2xl'>
            <div className='flex p-5 flex-col lg:flex-row bg-blue-200 rounded-xl'>
            <div><img className='h-[500px] w-[500px]' src={image} alt="" /></div>
            <div className='flex flex-col gap-5 justify-center items-center w-96'>
                <h1 className=' text-3xl font-bold'>Offer For 20 May to 25 May</h1>
                <p className='text-center'>
                Special offer valid from May 20th to May 25th! Don t miss out on exclusive deals and discounts. 
                </p>
                <button className="p-2 bg-btn hover:bg-btn-hover rounded text-white font-bold" onClick={closeModal}>Close This</button>
            </div>
        </div>
        </div>
    );
};

export default OfferModal;