import React from 'react';
import MainHeader from '../components/MainHeader';

function SiteLayout(Component, options) {
    return function WithSiteLayout(props) {
        return (
            <>
                <MainHeader />
                <Component {...props} />
            </>
        );
    }
}

export default SiteLayout;