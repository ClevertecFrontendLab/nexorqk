import Lottie from 'lottie-react';

import loaderAnimation from './loader.json';

export const Loader = () => (
    <div style={{ width: 200, height: 200, margin: '0 auto', display: 'none' }}>
        <Lottie animationData={loaderAnimation} />
    </div>
);
