function calculatePrice(price, taxes, description) {
    //One way to verify undefined
    //taxes = taxes || 0.05

    //Second way to verify undefined
    if (taxes == null) {
        taxes = 0.05
    }
    description = description || "Default item"
    const total = price * (1 + taxes)
    console.log(
        `${description} With Tax: ${total}`
    )
}

calculatePrice(324, 0.23, "Digital NoteBook")
calculatePrice(276, 0.12, "1Tb Memory")
calculatePrice(120, 0.04, "Headphones")
calculatePrice(78, undefined, undefined)