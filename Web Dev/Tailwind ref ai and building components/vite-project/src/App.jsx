import Test from './component/Test';
import './index.css'; 
function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-blue-600 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Hello, Tailwind CSS!</h1>
        <p className="text-lg">If you see styled text, Tailwind is working!</p>
        <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          Test Button
        </button>
      </div>
      <Test/>
    </div>
  );
}

export default App;