import React from 'react';
import './collection-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { connect } from 'react-redux';
import { selectCollectionForPreview } from '../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';

const CollectionOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
            {
                collections.map(({ id, ...otherCollectionProps }) => {
                    return <CollectionPreview key={id}  {...otherCollectionProps} />
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);