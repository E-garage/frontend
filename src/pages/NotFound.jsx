

const NotFound = () => {
  return (
    <div className="bg-white w-screen h-screen text-black">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-9xl text-indigo-600 font-semibold mt-4">404</h1>
        <h2 className="text-3xl font-semibold mt-4">Page not found!</h2>
        <p className="text-lg mt-4">The requested URL was not found on this server.</p>
      </div>
    </div>
  )
}

export default NotFound
