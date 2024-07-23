import React from 'react'


const Home = () => {
  return (
    <>
    
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <header className="bg-blue-600 w-full py-4">
        <h1 className="text-3xl text-white text-center">Welcome to the Home Page</h1>
      </header>
      <main className="flex-grow flex flex-col justify-center items-center">
        <p className="text-xl text-gray-700 mb-4">This is a simple homepage created using React and Tailwind CSS.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Get Started
        </button>
      </main>
      <footer className="bg-gray-800 w-full py-4">
        <p className="text-center text-white">&copy; 2024 Your Company</p>
      </footer>
    </div>
    
    </>
  )
}

export default Home