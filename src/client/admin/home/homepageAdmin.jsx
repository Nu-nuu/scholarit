import React from 'react'
import { Outlet } from 'react-router-dom';

import '../style/global.scss'
import NavbarAdmin from '../components/navbarAdmin/navbarAdmin';
import FooterAdmin from '../components/footerAdmin/footerAdmin';
import MenuAdmin from '../components/menuAdmin/menuAdmin';

const HomepageAdmin = () => {
    return (
        <div className="mainAdmin">
            <NavbarAdmin />
            <div className="containerAdmin">
                <div className="menuContainerAdmin">
                    <MenuAdmin/>
                </div>
                <div className="contentContainerAdmin">
                    <Outlet />
                </div>
            </div>
            <FooterAdmin />
        </div>
    );
}

export default HomepageAdmin