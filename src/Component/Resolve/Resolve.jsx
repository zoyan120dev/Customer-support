import ResolveCard from './ResolveCard';

function Resolve({ puchesButton = [] }) {
  return (
    
    <>
      <div className='space-y-2'>
          <h1 className='text-black text-2xl font-bold'>Resolved Task</h1>
      {puchesButton.length > 0 &&
        puchesButton.map((purchesitems) => (
          <ResolveCard key={purchesitems.id} purchesitems={purchesitems} />
        ))}
      </div>
    </>
  );
}

export default Resolve;
