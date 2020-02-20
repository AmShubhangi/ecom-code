import React from 'react';
import CollectionOverview from '../collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import Collection from '../../pages/collection/collection.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
    state = {
        loading: true
    }

    componentDidMount() {
        const { updateCollections } = this.props;
        console.log(this.props);
        fetch('https://firestore.googleapis.com/v1/projects/crawn-db-4156d/databases/(default)/documents/users').then(res => res.json()).then(data => {
            console.log("adas", data);
        })
        // const collectionRef = firebase.collection('collections');

        // this.unsubscribeFromSnapShot = collectionRef.onSnapShot(async snapshot => {
        //     updateCollections(collectionsMap);
        //     // this.setState({ loading: false });
        // })
    }

    render() {
        const { match } = this.props;
        const loading = this.state;
        return (
            <div className="shop-page">

                <Route exact
                    render={(props) => <CollectionOverviewWithSpinner isLoading={false} {...props} />}
                    path={`${match.path}`} />
                <Route path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={false} {...props} />} />
            </div>
        )
    }
}

export default ShopPage;