import FilterConstants from '../constants/filter.constants';

const initialState = {

  statusBuyNow: false,
  statusHasBids: false,
  statusHasOffers: false,
  statusOnAuction: false,
  collections: [],
  category: null,
  mediaType: null,
  groupType: 'all',
  sortBy: 'listedAt', // viewed
  attributes: {},
};

export function Filter(state = initialState, action) {
  
  switch (action.type) {
    case FilterConstants.UPDATE_STATUS_FILTER: {
      const newState = { ...state };
      newState[action.field] = action.selected;
      return newState;
    }
    
    case FilterConstants.UPDATE_COLLECTIONS_FILTER: {
      return {
        ...state,
        collections: action.collections,
      };
    }
    case FilterConstants.UPDATE_CATEGORIES_FILTER: {
      return {
        ...state,
        category: action.category,
      };
    }
    case FilterConstants.UPDATE_MEDIATYPE_FILTER: {
      return {
        ...state,
        mediaType: action.mediaType,
      };
    }
    case FilterConstants.UPDATE_GROUP_TYPE_FILTER: {
      return {
        ...state,
        groupType: action.groupType,
      };
    }
    case FilterConstants.UPDATE_SORT_BY_FILTER: {
      return {
        ...state,
        sortBy: action.sortBy,
      };
    }
    case FilterConstants.UPDATE_ATTRIBUTE_FILTER: {
      return {
        ...state,
        attributes: action.attributes,
      };
    }
    default: {
      return state;
    }
  }
}
