import React from 'react'
import Sidebar from './sidebar'
import { Row ,Col} from 'react-bootstrap'

function AdminDashboard() {
    return (
        <>
            <Sidebar />
            <div style={{ backgroundColor: "#FAFAFA" }} className='p-lg-5 p-2 content'>
                <h2 className='dash-heading'>
                    Dashboard
                </h2>
                <div className='mt-md-5'>
                    <Row>
                        <Col md={3}>
                        <div className='dash-card'>
                           <h5>Total Users</h5>
                            <h3>433</h3>
                            <span>View user</span>
                        </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard