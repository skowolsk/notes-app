import {connect} from 'react-redux'
import TagsList from '../components/TagsList'
import {deleteTag} from '../actions'
import {changeFilter} from "../actions/index";

const mapStateToProps = (state) => {
    return {
        tags: state.tags,
        filter: state.filter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteTag: id => dispatch(deleteTag(id)),
        changeFilter: filter => dispatch(changeFilter(filter))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(TagsList)