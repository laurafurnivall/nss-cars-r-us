import { getColors, getInteriors, getOrders, getTechnologies, getWheels } from "./database.js";

const buildOrderListItem = (order) => {
    const colors = getColors()
    const interiors = getInteriors()
    const wheels = getWheels()
    const techs = getTechnologies()

    const foundColor = colors.find(
        (color) => {
            return color.id === order.colorId
        }
    )
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    const foundTechnologies = techs.find(
        (tech) => {
            return tech.id === order.packageId
        }
    )

    const totalCost = foundColor.price + foundInterior.price + foundWheel.price + foundTechnologies.price
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} will cost ${costString}
        </li>`
}

export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}