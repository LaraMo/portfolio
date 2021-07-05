import React from 'react';
import Title from '../../atoms/Title/Title';
import Slide from 'react-reveal/Slide';

//css
import './mainTitle.scss';

const MainTitle = (props) => {
    const { type } = props;
    return (
        <div>
            <Title type={type} title="Lara Mo" />
            <Slide top className="mainTitle-sub">aka super woman in shorts</Slide>
        </div>
    )
}

export default MainTitle;