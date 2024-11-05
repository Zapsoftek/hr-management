import Head from 'next/head';

export default function Signup() {
  return (
    <>
      <Head>
        <title>HR Signup</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden w-full max-w-5xl mx-4 md:mx-0">
          
          {/* Left Section */}
          <div className="bg-blue-50 p-10 md:w-1/2 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4 text-blue-800">Step into the Future of HR</h1>
            <p className="text-gray-600 mb-6">
              The complete HR suite to help enterprises elevate People, Profit, and Planet.
            </p>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Discover More!
            </button>
          </div>
          
          {/* Right Section - Signup Form */}
          <div className="p-8 md:w-1/2 flex flex-col justify-center">
            <div className="flex flex-col items-center mb-6">
              <img src="/logo.jpeg" alt="Logo" className="w-32 mb-4" />
              <h2 className="text-xl text-black font-semibold">Sign Up</h2>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-2">Company Code</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Employee Code</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Confirm Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4"
              >
                Sign Up
              </button>
              <div className="text-center mt-4">
                <p className="text-gray-600">Already have an account? <a href="/" className="text-blue-500">Login</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
