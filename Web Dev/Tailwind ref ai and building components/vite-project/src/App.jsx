import './index.css'; 
function App() {
  return (
    <>
    <div className='lg:grid grid-cols-10 sm:flex-row'>
      <div className='bg-amber-300 lg:col-span-4 rounded'>Hi there this is first div</div>
      <div className='bg-amber-600 lg:col-span-4 rounded-2xl'>Hi there I am div number two</div>
      <div className='bg-amber-950 lg:col-span-2'>Hello Everyone div three this side</div>
    </div>
    </>
  );
}

export default App;