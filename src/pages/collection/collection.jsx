import React from "react";
import { connect } from "react-redux";

// import CollectionItem from "../../components/collection-item/collection-item";
import { selectCollection } from "../../redux/shop/shop.selector";

import "./collection.scss";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="category">
      <h2>CollectionPage</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
