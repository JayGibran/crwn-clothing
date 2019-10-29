import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collections-overview.styles.scss';
import CollectionPreview 
from '../../components/collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({collections}) => (
  <div className='collections-overview'>
    {collections.map(collection => (
      <CollectionPreview id={collection.id} {...collection} />
    ))}
  </div>
);

const mapStateToProps  = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);