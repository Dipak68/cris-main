import React from 'react'
import {cameraData} from '../../src/Data/CameraList'
import { Link } from 'react-router-dom'

const CaneraList = () => {
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
                                    {cameraData.map((user, index) => (
                                        <tr key={index} className="w-1/6 py-3 px-4 my-9 text-center">
                                            <td>{index+1}</td>
                                            <td>{user.name}</td>
                                            {/* <td>{user.cam_id}</td> */}
                                            <td>{user.location}</td>
                                            <td>{user.status}</td>
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