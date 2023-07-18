import React from 'react'
import Tabs from 'react-bootstrap/Tabs';
import { Tab } from 'bootstrap';
import Thumbnail from './Thumbnail';
import VideoTable from './VideoTable';
import AudioTable from './AudioTable';
import { IoFilmOutline, IoMusicalNotesOutline } from 'react-icons/io5';

function Table({ data }) {
    return (
        <div className="container">
            <div className="row">
                <div className=" col-md-6 ">

                    <Thumbnail data={data} />

                </div>
                <div className="col-md-6">
                    {
                        data && (
                            <>
                                <Tabs style={{ fontSize: "20px" }}
                                    // defaultActiveKey="home"
                                    transition={false}
                                    id="noanim-tab-example"
                                    className="mb-3"
                                >
                                    <Tab eventKey="video" title={<span style={{display: 'flex', alignItems: 'center', fontSize: '30px'}}><IoFilmOutline /> Video</span>}>
                                        <table className="table table-bordered " style={{ marginTop: "5px" }}>
                                            <thead>
                                                <tr>
                                                    <th>Quality</th>
                                                    <th>File size</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <VideoTable data={data} />

                                            </tbody>
                                        </table>
                                    </Tab>
                                    <Tab eventKey="audio" title={<span style={{display: 'flex', alignItems: 'center', fontSize: '30px'}}><IoMusicalNotesOutline /> Audio</span>}>
                                        <table className="table table-bordered " style={{ marginTop: "5px" }}>
                                            <thead>
                                                <tr>
                                                    <th>Quality</th>
                                                    <th>File size</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                        
                                                <AudioTable data={data} />

                                            </tbody>
                                        </table>
                                    </Tab>
                                </Tabs>
                            </>
                        )}
                </div>

            </div>


        </div>
    )
}

export default Table