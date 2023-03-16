import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
            if (event.target.id ==="interiror") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    let html = "<h2>Interiors</h2>"

    html += '<select id="interiror">'
    html += '<option value="0">Select an interior package</option>'

    const arrayOfOptions = interiors.map((interiror) => {
        return `<option value="${interiror.id}">${interiror.interior}</option>`
    }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}