const Cart = ({ selectedActors, totalCost, remaining }) => {

    console.log(selectedActors);

    return (
        <div>
            <h1 className="text-4xl p-6 text-center">Cart: {selectedActors.length}</h1>
            <div className="flex items-center justify-evenly font-semibold p-4 m-4">
                <h3 className="border-2 p-3 rounded-lg">Remaining: {remaining}</h3>
                <h3 className="border-2 p-3 rounded-lg">Total Cost: {totalCost}</h3>
            </div>
            <div>
                {selectedActors.map(actor => (
                    <li key={actor.id} className="border-2 p-4 m-4 rounded-lg shadow-lg">{actor.name}</li>
                ))}
            </div>
        </div>
    );
};

export default Cart;