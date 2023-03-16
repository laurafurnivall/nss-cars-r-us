const database = {
    colors: [
        {id: 1, color: "Silver", price: 1000},
        {id: 2, color: "Midnight Blue", price: 2000},
        {id: 3, color: "Firebrick Red", price: 3000},
        {id: 4, color: "Spring Green", price: 4000}
    ],
    interiors: [
        {id: 1, interior: "Beige Fabric", price: 1000},
        {id: 2, interior: "Charcoal Fabric", price: 2000},
        {id: 3, interior: "White Leather", price: 3000},
        {id: 4, interior: "Black Leather", price: 4000}
    ],
    technologies: [
        {id: 1, package: "Basic Package", price: 1000},
        {id: 2, package: "Navigation Package", price: 2000},
        {id: 3, package: "Visibility Package", price: 3000},
        {id: 4, package: "Ultra Package", price: 4000}
    ],
    wheels: [
        {id: 1, wheel: "17-inch Pair Radial", price: 1000},
        {id: 2, wheel: "17-inch Pair Radial Black", price: 2000},
        {id: 3, wheel: "18-inch Pair Spoke Silver", price: 3000},
        {id: 4, wheel: "18-inch Pair Spoke Black", price: 4000}
    ],
    customOrders: [
        {
            id: 1,
            colorId: 1,
            interiorId: 1,
            packageId: 1,
            wheelId: 1,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {

    }
}

export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setColor = (id) => {
    database.orderBuilder.colorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.packageId = id
}

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))}