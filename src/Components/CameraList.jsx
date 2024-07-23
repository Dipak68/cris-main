import React, { useEffect, useState } from 'react'
import {cameraData} from '../../src/Data/CameraList'
import { Link } from 'react-router-dom'


const CaneraList = () => {

    const [cameraListData,setCameraListData] = useState([])
    const [cameraStatusData,setCameraStatusData] = useState([])

    async function fetchUser() {
        try {
            const response = await fetch('http://192.168.1.49:5000/api/camera/fetch/all', {
                headers: {
                    'Auth-token': localStorage.getItem('authToken')
                }
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
    
            const data = await response.json();
            console.log("data camera list",data?.camera?.camera_detail);
            console.log(data)
            
           setCameraListData(data?.camera?.camera_detail);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    async function CameraStatus() {

        

        try {
            // const response = await fetch(`http://192.168.1.49:5000/api/cameras-status/cameras-status/${cameraListData?.cameraid}`, {
                const response = await fetch(`http://192.168.1.49:5000/api/camerastatus/camera-status/CAM001`, {

                headers: {
                    'Auth-token': localStorage.getItem('authToken')
                }
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
    
            const data = await response.json();
            console.log("data from camerastatus",data);
            
        //    setCameraListData(data?.camera?.camera_detail);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    useEffect(() => {
        fetchUser();
        CameraStatus();
    }, [])


    
    
  return (
    <>
       <div className="h-screen pt-20">
            <div className="container mx-auto p-4 h-full flex flex-col">
                <h1 className="text-2xl font-bold mb-4">Camera List</h1>
                <Link to='/addcamera'>Add Camera</Link>
                
            
                <div className="bg-white shadow-md rounded-lg overflow-hidden flex-grow flex flex-col">
                    <div className="overflow-hidden flex-grow flex flex-col">
                        <div className="overflow-y-scroll flex-grow">
                            <table className="min-w-full bg-white">
                                <thead className="bg-gray-800 text-white sticky top-0">
                                    <tr>
                                        <th className="w-1/6 py-3 h-12 px-4 uppercase font-semibold text-sm">ID</th>
                                        <th className="w-1/6 py-3 h-12 px-4 uppercase font-semibold text-sm">Email</th>
                                        {/* <th>Camara</th> */}
                                        <th className="w-1/6 py-3 h-12 px-4 uppercase font-semibold text-sm">Location</th>
                                        <th className="w-1/6 py-3 h-12 px-4 uppercase font-semibold text-sm">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    {cameraListData.map((cameraInfo) => (
                                        <tr key={cameraInfo?._id} className="w-1/6 py-3 px-4 my-9 text-center">
                                            <td>{cameraInfo?.cameraid}</td>
                                            <td>{cameraInfo?.cameraname}</td>
                                            {/* <td>{user.cam_id}</td> */}
                                            <td>location</td>
                                            <td>{cameraInfo?.islive}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CaneraList