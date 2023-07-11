import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/activities.css';
import GroupIcon from '@mui/icons-material/Group';

function Activities() {

    const [activities, setActivities] = useState([]);

    return (
        <div className='activities'>

            <div className='activity-header'>
                <h2>Activity</h2>
                <Link to='' className='viewBtn'>VIEW ALL</Link>
            </div>

            <div className='activitiesList'>
                <div className='activity'>
                    <div className='activityImage'>
                        <GroupIcon className='icon'/>
                    </div>
                    <div className='info'>
                        <h5>Dongle Assigned from John Doe to Daniel</h5>
                        <h5>20 Dec 2016</h5>
                    </div>
                </div>
                <div className='activity'>
                    <div className='activityImage'>
                        <GroupIcon className='icon'/>
                    </div>
                    <div className='info'>
                        <h5>Dongle Assigned from John Doe to Daniel</h5>
                        <h5>20 Dec 2016</h5>
                    </div>
                </div>
                <div className='activity'>
                    <div className='activityImage'>
                        <GroupIcon className='icon'/>
                    </div>
                    <div className='info'>
                        <h5>Dongle Assigned from John Doe to Daniel</h5>
                        <h5>20 Dec 2016</h5>
                    </div>
                </div>
                <div className='activity'>
                    <div className='activityImage'>
                        <GroupIcon className='icon'/>
                    </div>
                    <div className='info'>
                        <h5>Dongle Assigned from John Doe to Daniel</h5>
                        <h5>20 Dec 2016</h5>
                    </div>
                </div>
                <div className='activity'>
                    <div className='activityImage'>
                        <GroupIcon className='icon'/>
                    </div>
                    <div className='info'>
                        <h5>Dongle Assigned from John Doe to Daniel</h5>
                        <h5>20 Dec 2016</h5>
                    </div>
                </div>
                <div className='activity'>
                    <div className='activityImage'>
                        <GroupIcon className='icon'/>
                    </div>
                    <div className='info'>
                        <h5>Dongle Assigned from John Doe to Daniel</h5>
                        <h5>20 Dec 2016</h5>
                    </div>
                </div>
                <div className='activity'>
                    <div className='activityImage'>
                        <GroupIcon className='icon'/>
                    </div>
                    <div className='info'>
                        <h5>Dongle Assigned from John Doe to Daniel</h5>
                        <h5>20 Dec 2016</h5>
                    </div>
                </div>
                <div className='activity'>
                    <div className='activityImage'>
                        <GroupIcon className='icon'/>
                    </div>
                    <div className='info'>
                        <h5>Dongle Assigned from John Doe to Daniel</h5>
                        <h5>20 Dec 2016</h5>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default Activities;
