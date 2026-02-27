    import { useState } from "react";

    function Step2({ register, errors, nextStep, prevStep }) {
    const [show, setShow] = useState(false);

    return (
        <div className="space-y-4">
        <div>
        <h2>Account Details</h2>

        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
            </label>
            <input
            type="email"
            {...register("email")}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.email && (
            <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
            </p>
            )}
        </div>

        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
        </label>

        <div className="relative">
            <input
                type={show ? "text" : "password"}
                {...register("password")}
                placeholder="Enter password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-2 text-sm text-gray-500 hover:text-gray-700"
            >
                {show ? "Hide" : "Show"}
            </button>
            </div>
            {errors.password && (
            <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
            </p>
            )}
    </div>

    <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
            </label>
            <input
            type={show ? "text" : "password"}
            {...register("confirmPassword")}
            placeholder="Confirm password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
            </p>
            )}
    </div>

        <div className="flex gap-3 pt-2">
            <button
            type="button"
            onClick={prevStep}
            className="w-1/2 bg-gray-200 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-300 transition duration-200"
            >
            ← Back
            </button>

            <button
            type="button"
            onClick={nextStep}
            className="w-1/2 bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
            >
            Next →
            </button>
    </div>

        </div>
        </div>
    );
    }

    export default Step2;