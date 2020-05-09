import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {setCurrentLocationThunkCreator} from '../../../redux/user-reducer'
import Location from './Location';
import { AppStateType } from '../../../redux/store';


type MapStateToPropsType = {}
type MapDispatchToProps = {
	setCurrentLocation: () => void
}
type OwnType = {}
type PropsType = MapStateToPropsType & MapDispatchToProps & OwnType;


class LocationContainer extends React.Component<PropsType> {
	componentDidMount() {
		this.props.setCurrentLocation();
	}

	render() {
		return <Location />
	}
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
	return {}
};


export default connect<MapStateToPropsType, MapDispatchToProps, OwnType, AppStateType>(mapStateToProps, {
	setCurrentLocation: setCurrentLocationThunkCreator
})(LocationContainer)