let tempC = 0
Kitronik_VIEWTEXT32.clearDisplay()
Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "Hello!")
basic.forever(function () {
    Kitronik_VIEWTEXT32.clearDisplay()
    tempC = pins.i2cReadNumber(72, NumberFormat.Int16BE, false)
    tempC = tempC * 0.0078125
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "Temp: " + convertToText(tempC) + " C")
    basic.pause(500)
})
