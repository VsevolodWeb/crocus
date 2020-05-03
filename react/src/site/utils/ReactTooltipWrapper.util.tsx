import React from 'react';
import ReactTooltip from "react-tooltip";


type PropsType = {
	id: string
}

const ReactTooltipWrapper: React.FC<PropsType> = (props) => {
	return (
		<div className="tooltip">
			<span data-tip data-for={props.id}>
				<div className="tooltip__icon"/>
			</span>
			<ReactTooltip
				place="bottom"
				effect="solid"
				className="tooltip__content"
				textColor="var(--color-common)"
				backgroundColor="var(--tooltip-background-color)"
				id={props.id}
			>
				{props.children}
			</ReactTooltip>
		</div>
	)
};

export default ReactTooltipWrapper;