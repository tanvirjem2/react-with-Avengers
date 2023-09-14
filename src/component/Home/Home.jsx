import { useState } from 'react'
import { useEffect } from 'react'
import Card from '../Card/Card';
import Cart from '../Cart/Cart';

const Home = () => {

    // First State
    const [allActors, setAllActors] = useState([]);

    useEffect(() => {
        fetch('../../../public/Data.json')
            .then(res => res.json())
            .then(data => setAllActors(data))
    }, [])


    // second State
    const [selectedActors, setSelectedActors] = useState([]);

    // third State
    const [remaining, setRemaining] = useState(0);

    // Fourth State
    const [totalCost, setTotalCost] = useState(0)

    // Function writing 
    const handleSelectActor = (actor) => {

        // Checking isExist
        const isExist = selectedActors.find(item => item.id == actor.id);

        let count = actor.salary;

        if (isExist) {
            return alert('Existed')
        } else {

            selectedActors.forEach(element => {
                count = count + element.salary;
            })
            // console.log(count)
            const totalRemaining = 20000 - count;

            if (count > 20000) {
                return alert('Not Enough money')
            }

            // Use the third State
            setRemaining(totalRemaining);

            // Use the Fourth State
            setTotalCost(count);

            setSelectedActors([...selectedActors, actor]);
        }
    }

    // console.log(selectedActors)

    return (
        <div className='flex gap-6 container mx-auto mt-12'>

            <div className='w-2/3'>
                {/* Show the length */}
                <h1 className="text-4xl text-center p-6">Home: {allActors.length}</h1>

                {/* Map the allActors */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    {allActors.map(actor => <Card key={actor.id} actor={actor} handleSelectActor={handleSelectActor}></Card>)}
                </div>
            </div>

            <div className="w-1/3 border-2">
                <Cart selectedActors={selectedActors} totalCost={totalCost} remaining={remaining}></Cart>
            </div>

        </div>
    );
};

export default Home;