import React from 'react'
import { singleAdmin } from '../../constants/dbUser'
import AdminSingle from '../../components/adminSingle/adminSingle'

const AdminProfile = () => {
    return (
        <div className='user'>
            <AdminSingle
                id={singleAdmin.id}
                img={singleAdmin.img}
                title={singleAdmin.title}
                info={singleAdmin.info}
                chart={singleAdmin.chart}
                activities={singleAdmin.activities}
            />
        </div>
    )
}

export default AdminProfile