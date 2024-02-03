import React from 'react'
import Linechart from "./linechart"
import './header.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import avatar from "./avatar.jpg"
import Card from "./Card"
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import 'bootstrap/dist/css/bootstrap.min.css';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import VerifiedIcon from '@mui/icons-material/Verified';
import RotateRightIcon from '@mui/icons-material/RotateRight';


function Dashboard() {
    


    return (
        <dashboard className="ml-5">

            <div class="container-fluid pb-3">
                <div class="row align-items-center">
                    <div class="col">
                        <h1>Welcome Back, Luciano</h1>
                    </div>

                    <div class="col-auto">
                        <span class="notification-icon"><NotificationsNoneIcon /></span>
                        <div class="btn-group">
                            <div type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <Avatar alt="Name Surname" src={avatar} />
                            </div>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <li><hr class="dropdown-divider"></hr></li>
                                <li><a class="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between info_container '>
                <Card
                    icon={PeopleOutlineIcon}
                    title={'Total Users'}
                    total={'87,394'}
                    persents={"1.01"}

                />
                <Card
                    icon={WorkOutlineIcon}
                    title={'Total products '}
                    total={'23,283.5'}
                    persents={"0.49"}
                />
                <Card
                    icon={VerifiedIcon}
                    title={'Total Users'}
                    total={'46,827'}
                    persents={"0,91"}
                />
                <Card
                    icon={RotateRightIcon}
                    title={'Refunded'}
                    total={'87,394'}
                    persents={"1.51"}
                />
            </div>

            <Linechart />

        </dashboard >
    )
}

export default Dashboard