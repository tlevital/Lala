'use strict'
console.log('touch the nums')

function init() {
    const board = createBoard()
    renderBoard(board)
    renderNextNum(1)
}



function renderBoard(board) {
    let strHTML = ''
    board.forEach(line => {
        strHTML += '<tr>'
        line.forEach(num => {
            strHTML += `<td onclick="onNumClick(${num})" >${num}</td>`
        })
        strHTML += '</tr>'
    })
    document.querySelector('tbody').innerHTML = strHTML
}

function onNumClick(num) {
    const isCorrectNum = checkNumClick(num)
    if(!isCorrectNum) return
    renderNextNum(++num)
}


function renderNextNum(nextNum) {
    document.querySelector('span').innerText = nextNum
}