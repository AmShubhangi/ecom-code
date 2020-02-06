import React from 'react';
import CollectionOverview from '../collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import Collection from '../../pages/collection/collection.component';

const ShopPage = ({ match }) => {
    return (
        <div className="shop-page">
            <Route component={CollectionOverview} exact path={`${match.path}`} />
            <Route path={`${match.path}/:collectionId`} component={Collection} />
        </div>
    )
}

export default ShopPage;