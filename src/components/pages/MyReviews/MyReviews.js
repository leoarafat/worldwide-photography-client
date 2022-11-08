import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UserReview from '../UserReview/UserReview';

const MyReviews = () => {
    const serviceReview = useLoaderData();
    
    return (
        <div>
            {serviceReview.map((review) => <UserReview rev={review}/> )}
        </div>
    );
};

export default MyReviews;