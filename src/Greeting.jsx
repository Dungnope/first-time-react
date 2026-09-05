export function Hello() {
    return <h1>"I swear by my pretty floral bonnet, I will end you."</h1>
}

export function ListOfElement() {
    const animals = ["lions", "cow", "snake", "lizard"];
    return (
        <>
            <h1>Animals: </h1>
            <ul>
                {animals.map(animal => {
                    return <li key={animal}>{animal}</li>
                })}
            </ul>
        </>
    )
}
