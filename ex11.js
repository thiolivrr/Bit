const arrul = []

function Escalar() {
    const player = confirm('Quer mesmo escalar esse jogador?')
    if (player) {
        const shirt = document.getElementById('shirt').value
        const name = document.getElementById('name').value
        const positon = document.getElementById('positon').value

        const div = document.getElementById('show')


        const newUl = document.createElement('ul')
        newUl.id = 'ulid'

        const newShirt = document.createElement('li')
        newShirt.innerText = 'Camisa: '

        const newName = document.createElement('li')
        newName.innerText = 'Nome: '

        const newPosition = document.createElement('li')
        newPosition.innerText = 'Posição: '

        const shirtInput = document.createElement('input')
        shirtInput.type = 'number'
        shirtInput.name = 'input'
        shirtInput.value = shirt
        shirtInput.className = 'shirtclass'

        const nameInput = document.createElement('input')
        nameInput.type = 'text'
        nameInput.name = 'input'
        nameInput.value = name

        const positionInput = document.createElement('input')
        positionInput.type = 'text'
        positionInput.name = 'input'
        positionInput.value = positon

        div.appendChild(newUl)
        newShirt.appendChild(shirtInput)
        newName.appendChild(nameInput)
        newPosition.appendChild(positionInput)
        newUl.append(newName, newPosition, newShirt)
        arrul.push(newUl)
    }
}

function Remover() {
    const remShirt = document.getElementById('remnum').value
    const shirtclass = document.getElementsByClassName('shirtclass')

    let index = 0

    for (let i = 0; i < shirtclass.length; i++) {
        if (remShirt == shirtclass[i].value) {
            index = i
        }
    }

    const div = document.getElementById('show')

    const players = document.getElementsByTagName('ul')

    div.remove(index)
}



