    function Success() {
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-6 py-6">


        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
            <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
        </div>

        <div>
            <h2 className="text-2xl font-semibold text-gray-800">
            Registration Successful!
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
            Your account has been created successfully.
            </p>
        </div>

        <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
        >
            Go to Home
        </button>

        </div>
    );
    }

    export default Success;