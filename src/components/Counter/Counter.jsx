import { useState } from 'react'
import Button from '../Buttons/Button';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Du har klickat {count} gånger.</p>
            <Button
                onClick={() => setCount(prev => prev + 1)}
                className='counter-btn'
                disabled={false}
            >
                Klicka här!
            </Button>
        </div>
    );

}

export default Counter;