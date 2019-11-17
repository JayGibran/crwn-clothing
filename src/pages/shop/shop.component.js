import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionsOverviewContainer 
from '../../components/collections-overview/collection-overview.container';

import CollectionContainer from '../../pages/collection/collection.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
  
  state = {
    loading: true
  }
  
  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
  }  

  render(){
    
    const { match } = this.props;

    return(
      <div className='shop-page'>
        <Route exact path={`${match.path}`} 
               component={CollectionsOverviewContainer} 
        />
        <Route path={`${match.path}/:collectionId`} 
               component={CollectionContainer} 
        /> 
      </div>
    );
  }
}


const mapDispatchToProps = dispatch  => ({
  fetchCollectionsStartAsync: collections => dispatch(fetchCollectionsStart()) 
})

export default connect(null, mapDispatchToProps)(ShopPage);