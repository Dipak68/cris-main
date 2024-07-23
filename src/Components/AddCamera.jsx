import React from 'react'

const AddCamera = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Add Camera</h2>
        <form onSubmit={""} className="space-y-4">
          <div>
            <label htmlFor="cameraName" className="block text-sm font-medium text-gray-700">Email ID </label>
            <input
              type="text"
              id="cameraName"
              name="cameraName"
              
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="cameraIP" className="block text-sm font-medium text-gray-700">Camera ID</label>
            <input
              type="text"
              id="cameraIP"
              name="cameraIP"
              
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Camera
            </button>
          </div>
        </form>
      </div>
    </div>
    
    </>
  )
}

export default AddCamera