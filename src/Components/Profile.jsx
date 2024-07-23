import React from 'react'


const Profile = () => {
  return (
    <>
     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md my-60">
      <h1 className="text-2xl font-bold mb-6 text-center">My Profile</h1>
     
      
                  
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
        
            className="w-full px-3 py-2 border rounded-lg "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input readOnly
            type="email"
            name="email"
            
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700"> Password:</label>
          <input
            type="Password"
            name="firstName"
            
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contact:</label>
          <input
            type="text"
            name="contact"
            
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address:</label>
          <input
            type="text"
            name="address"
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Update Profile
        </button>
      </form>
    </div>
    </>
  )
}

export default Profile