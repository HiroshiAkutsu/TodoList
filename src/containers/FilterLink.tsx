import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { setVisibilityFilter, SetVisibilityFilter } from '../actions/actions';
import Link from '../components/Link';

interface OwnProps {
    filter: string;
}
interface StateTypes {
    visibilityFilter: string;
}
const mapStateToProps = (state: StateTypes, ownProps: OwnProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
};
const mapDispatchToProps = (dispatch: Dispatch<SetVisibilityFilter>, ownProps: OwnProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    };
};

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink as React.ComponentClass<OwnProps>;