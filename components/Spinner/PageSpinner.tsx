export default function PageSpinner() {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <div className='w-16 h-16 border-t-4 border-b-4 border-gray-900 rounded-full animate-spin'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
}
