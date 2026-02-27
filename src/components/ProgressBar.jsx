function ProgressBar({ step }) {
    const percentage = (step / 3) * 100;

    return (
        <div className="mb-6">

        <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium text-gray-700">
            Step {step} of 3
            </p>
            <span className="text-sm text-gray-500">
            {percentage}%
            </span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">

            <div
            className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${percentage}%` }}
            />

        </div>
        </div>
    );
    }

    export default ProgressBar;