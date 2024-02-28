import classNames from 'classnames';
import Lottie from 'lottie-react';
import React from 'react';

import loaderAnimation from '@assets/animations/loader.json';

import classes from './loader.module.css';

type LoaderProps = {
    loading: boolean;
};

export const Loader: React.FC<LoaderProps> = ({ loading }) => (
    <div className={classNames(classes.loaderWrapper, { [classes.hide]: !loading })}>
        <Lottie className={classes.loader} animationData={loaderAnimation} />
    </div>
);
