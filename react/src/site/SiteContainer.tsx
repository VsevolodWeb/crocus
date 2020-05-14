import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {setCurrentLocationThunkCreator} from '../redux/user-reducer'
import Site from './Site';
import { AppStateType } from '../redux/store';


type MapStateToPropsType = {}
type MapDispatchToProps = {
	setCurrentLocation: () => void
}
type OwnType = {}
type PropsType = MapStateToPropsType & MapDispatchToProps & OwnType;


const SiteContainer: React.FC<PropsType> = props => {
	const {setCurrentLocation} = props;

	useEffect(() => {
		setCurrentLocation();
	}, [setCurrentLocation]);

	return <Site />
};


const mapStateToProps = (): MapStateToPropsType => {
	return {}
};


export default connect<MapStateToPropsType, MapDispatchToProps, OwnType, AppStateType>(mapStateToProps, {
	setCurrentLocation: setCurrentLocationThunkCreator
})(SiteContainer)