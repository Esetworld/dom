const form = document.querySelector('#addForm')
const itemList = document.querySelector('#items')

// form submit event
form.addEventListener('submit', addItem)
// delete event
itemList.addEventListener('click', removeItem)
// filter event
filter.addEventListener('keyup', filterItems)

// add item
function addItem(e){
    e.preventDefault()

    // get input value
    const newItem = document.querySelector('#item').value

    // create new li element
    const li = document.createElement('li')

    // add class
    li.className = 'list-group-item'
    
    // add text node with input value
    li.appendChild(document.createTextNode(newItem))
    
    // create del button element
    const deleteBtn = document.createElement('button')

    // add class to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

    // Create text node to btn
    deleteBtn.appendChild(document.createTextNode('X'))

    // append button to li
    li.appendChild(deleteBtn)

    // append li to list
    itemList.appendChild(li)
}
// remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
}
// filter items
function filterItems(e){ 
    //convert text to lowercase
    const text = e.target.value.toLowerCase()
    // get lis
    const items = itemList.getElementsByTagName('li')
    // convert to an array
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}


