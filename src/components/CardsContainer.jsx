import { meals } from "../utils/mealData"
import Card from "./Card"

function CardsContainer() {

  return (
    <div id="menu" className="content-wrapper">
        {meals.map((meal, id) => {
            return <Card 
            image={meal.image}
            title={meal.title}
            price={meal.price}
            description={meal.description}
            />
        })}
    </div>
  )
}

export default CardsContainer