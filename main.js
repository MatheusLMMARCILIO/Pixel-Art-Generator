let container = document.querySelector(".container")
let gridButton = document.querySelector(".submit-grid")
let clearGridButton = document.querySelector(".clear-grid")
let gridWidth = document.querySelector(".width-Range")
let gridHeight = document.querySelector(".height-Range")
let colorButton = document.querySelector(".color-input")
let eraseBtn = document.querySelector(".erase-btn")
let paintBtn = document.querySelector(".paint-btn")
let widthValue = document.querySelector(".width-value")
let heightValue = document.querySelector(".height-Value")

let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup"
    },
    touch: {
        down: "touchstart",
        mobe: "touchmove",
        up: "touchend"
    },
}

let deviceType 