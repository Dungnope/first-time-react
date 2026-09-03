import { createElement } from "react";

const foodImgs = [
    {
        title: "Hamburger",
        imgLink: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        alt: "Hamburger",
        id: 1
    },
    {
        title: "BBQ",
        imgLink: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "BBQ",
        id: 2
    },
    {
        title: "Salad",
        imgLink: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Salad",
        id: 3
    }
];
function FoodGallery(){

    const listFoods = foodImgs.map(food => 
        <li key={food.id}>
            <p>{food.title}</p>
            <img src={food.imgLink} alt={food.alt} />
        </li>
    )

    return (
        <div>
            <ul>{listFoods}</ul>
            <p>test</p>
        </div>
    );
}

//create component with createElement
function Testing(){
    return (
        <>
        <div>
          <h1>Test title</h1>
          <svg>
            <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
          </svg>
          <form>
            <input type="text"/>
          </form>
        </div>
       
        </>
    )
}

function TodoList() {
  return (
    <>
        <h1>Hedy Lamarr's Todos</h1>
        <img
          src="https://react.dev/images/docs/scientists/yXOvdOSs.jpg"
          alt="Hedy Lamarr"
          className="photo"
          
        />
        <ul>
            <li>Invent new traffic lights</li>
            <li>Rehearse a movie scene</li>
            <li>Improve the spectrum technology</li>
        </ul>
    </>
  )
}

function DoubleCurlies(){
  return (
    <ul style={{
      backgroundColor: 'pink',
      color: 'green'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}

export {FoodGallery, Testing, TodoList, DoubleCurlies};