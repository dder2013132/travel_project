export default function SmallIconBox() {
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-none h-full px-40 mb-16 rounded-lg">
            <div className="flex flex-row items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">A</span>
                </div>
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">B</span>
                </div>
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">C</span>
                </div>
            </div>
        </div>
    );
}