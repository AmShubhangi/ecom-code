import React from 'react';
import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preivew">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4).map((item) => {     //for displaying only 4 items from each section as a frontier
                        return <CollectionItem key={item.id} item={item} />
                    })
                }
            </div>
        </div>
    )
}


export default CollectionPreview;