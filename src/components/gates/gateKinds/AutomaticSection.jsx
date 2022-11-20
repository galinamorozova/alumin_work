import React from 'react';

import './../../../css/variabilities.scss';
import { NavLink } from 'react-router-dom';
import avtocontrol from '../../../images/double-leaf/avtocontrol.jpg';

export default function Garage() {

    return( 
        <section>
            <NavLink className='automaticSection' to='/automation'>
                <div>
                    <h4>АВТОМАТИКА</h4>
                    <p>автоматику, которую мы предлагаем, можно посмотреть здесь</p>
                    <i className="fas fa-hand-point-right"></i>
                </div>
                <div><img src={avtocontrol} alt='автоматика'/></div>
            </NavLink>

        </section>
    )
}