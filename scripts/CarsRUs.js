import { Wheels } from "./Wheels.js"
import { Technologies } from "./Technologies.js"
import { Colors } from "./Colors.js"
import { Interiors } from "./Interiors.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./database.js"


document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target
        if (itemClicked.id.startsWith("orderButton")) {
            addCustomOrder()
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1>Cars R' Us</h1>

        <article class="choices">
            <section class="choices__wheels options">
                ${Wheels()}
            </section>
            <section class="choices__technoligies options">
                ${Technologies()}
            </section>
            <section class="choices__colors options">
                ${Colors()}
            </section>
            <section class="choices__interiors options">
                ${Interiors()}
        </section>
        </article>

        
        <article>
            <button id="orderButton">Create Custom Car</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
        `
}