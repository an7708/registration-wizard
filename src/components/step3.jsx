    function Step3({ watch, prevStep }) {
    const data = watch();

    return (
        <div className="space-y-6">

        <h2 className="text-xl font-semibold text-gray-800">
            Review Information
        </h2>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3 text-sm">

            <div className="flex justify-between">
            <span className="font-medium text-gray-600">First Name</span>
            <span className="text-gray-800">{data.firstName}</span>
            </div>

            <div className="flex justify-between">
            <span className="font-medium text-gray-600">Last Name</span>
            <span className="text-gray-800">{data.lastName}</span>
            </div>

            <div className="flex justify-between">
            <span className="font-medium text-gray-600">Date of Birth</span>
            <span className="text-gray-800">{data.dob}</span>
            </div>

            <div className="flex justify-between">
            <span className="font-medium text-gray-600">Email</span>
            <span className="text-gray-800">{data.email}</span>
            </div>

        </div>

        <div className="flex gap-3">
            <button
            type="button"
            onClick={prevStep}
            className="w-1/2 bg-gray-200 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-300 transition duration-200"
            >
            ← Back
            </button>

            <button
            type="submit"
            className="w-1/2 bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
            >
            Submit ✓
            </button>
        </div>

        </div>
    );
    }

export default Step3;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // function Step3({ watch, prevStep }) {
    // const data = watch();

    // return (
    //     <div>
    //     <h2>Review Information</h2>

    //     <p>First Name: {data.firstName}</p>
    //     <p>Last Name: {data.lastName}</p>
    //     <p>DOB: {data.dob}</p>
    //     <p>Email: {data.email}</p>

    //     <div>
    //         <button type="button" onClick={prevStep}>
    //         Back
    //         </button>

    //         <button type="submit">
    //         Submit
    //         </button>
    //     </div>
    //     </div>
    // );
    // }

    // export default Step3;