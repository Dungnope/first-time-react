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

function ListItem(props) {
    return <li>{props.kid}</li>
}

function List(props){
    return (
        <ul> 
            {props.animals.map((animal) => {
                return animal.startsWith("L") ? <ListItem key={animal} kid = {animal} /> : null;
            })}
        </ul>
    )
}

export function MainListApp() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];

    return (
        <div>
            <h1>Animals: </h1>
            <List animals = {animals} />
        </div>
    )
}
