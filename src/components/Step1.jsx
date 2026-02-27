    function Step1({ register, errors, nextStep }) {
    return (
        <div>
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
            </label>
            <input
            {...register("firstName")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter first name"
            />
        </div>
        <p>{errors.firstName?.message}</p>

        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
            </label>
            <input
            {...register("lastName")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter last name"
            />
        </div>
        <p>{errors.lastName?.message}</p>

        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth
            </label>
            <input
            type="date"
            {...register("dob")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
        </div>
        <p>{errors.dob?.message}</p>

        <button
            type="button"
            onClick={nextStep}
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
        >
            Next →
        </button>
        </div>
    );
    }

    export default Step1;