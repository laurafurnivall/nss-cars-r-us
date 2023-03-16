import { getColors, setColor } from "./database.js"

let colors = getColors()

document.addEventListener(
    "change",
    (event) => {
            if (event.target.id ==="color") {
            setColor(parseInt(event.target.value))
        }
    }
)


export const Colors = () => {
    let html =  "<h2>Colors</h2>"

    html += '<select id="color">'
    html += '<option value="0">Select a paint package</option>'

    const arrayOfOptions = colors.map((color) => {
        return `<option value="${color.id}">${color.color}</option>`
    }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}