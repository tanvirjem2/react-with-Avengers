

const Card = ({ actor, handleSelectActor }) => {

    const { image, name, salary, role } = actor;

    return (
        <div className="border-2 space-y-6 rounded-lg p-6 shadow-lg">
            <img className="rounded-full mx-auto w-20" src={image} alt="" />
            <p className="text-center text-2xl">Name: {name}</p>
            <p className="text-center text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ad?</p>
            <div className="flex justify-evenly font-bold">
                <p>Salary: {salary} $</p>
                <p>Role: {role}</p>
            </div>
            <div onClick={() => handleSelectActor(actor)} className="text-center border-2 p-3 rounded-lg hover:bg-slate-400 font-semibold">
                <button>Select</button>
            </div>
        </div>
    );
};

export default Card;