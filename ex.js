function addContact() {
    const div = document.getElementById('contacts')

    const newUl = document.createElement('ul')
    
    const name = document.createElement('li')
    name.innerText = 'Name: '

    const phone = document.createElement('li')
    phone.innerText = 'Phone: '

    const adress = document.createElement('li')
    adress.innerText = 'Adress: '

    const title = document.createElement('h4')
    title.innerText = 'Contact'

    const phoneInput = document.createElement('input')
    phoneInput.type = 'number'
    phoneInput.name = 'input'
    phone.appendChild(phoneInput)
   
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'input'
    name.appendChild(nameInput)
    
    const adressInput = document.createElement('input')
    adressInput.type = 'text'
    adressInput.name = 'input'
    adress.appendChild(adressInput)
    div.append(title, newUl) 
    newUl.append(name, phone, adress)
}

function RemoveContact() {
    const contactDiv = document.getElementById('contacts')

    const titles = document.getElementsByTagName('h4')
    const contacts = document.getElementsByTagName('ul')

    contactDiv.removeChild(titles[titles.length - 1])
    contactDiv.removeChild(contacts[contacts.length - 1])
}