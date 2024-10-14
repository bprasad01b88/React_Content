import React from 'react'

const Question1 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
     console.log("Component Rendered Successfully");
    }, []);
    
   return (
     <>
       <div className=''>
         <Button className="btn btn-primary" onClick={() => setCount(count + 1)}>Click Me</Button>
         <h1>Count: {count}</h1>
       </div>
     </>
   )
}

export default Question1