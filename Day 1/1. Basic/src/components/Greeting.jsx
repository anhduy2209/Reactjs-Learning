const Greeting = () => {
    const greet = "Hi, I'm Duy";
    const date = new Date().toLocaleDateString();

    return (
        <div>
            <h1>{greet}</h1>
            <p>Date: {date}</p>
        </div>
    )
}

export default Greeting