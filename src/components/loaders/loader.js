import "./loader.css"

const Loader = ()=>{


    return (
        <div className='w-screen flex items-center justify-center h-screen bg-darkff'>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader