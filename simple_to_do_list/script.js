window.onload = function()
{
    let input = document.getElementById('input')
    let btn = document.getElementById('btn')
    let list = document.getElementById('list')

    btn.onclick = function()
    {
        
        /*let data = input.value
        let item = document.createElement('li')
        item.innerText = data
        let deletebtn = document.createElement('button')
        deletebtn.innerText = 'X'
        deletebtn.onclick = function(event)
        {
            event.target.parentElement.remove()
        }
        item.appendChild(deletebtn)        
        list.appendChild(item)
        input.value = ''*/

        let data = input.value
        if(data == '')
        {
            return
        }
        let item = document.createElement('li')
        let span = document.createElement('span')
        span.innerText = data
        let delbtn = document.createElement('button')
        delbtn.innerText = 'X'

        let upbtn = document.createElement('button')
        upbtn.innerText = 'up'

        let downbtn = document.createElement('button')
       downbtn.innerText = 'down' 

        upbtn.onclick = function(event)
        {
            let current = event.target.parentElement
            list.insertBefore(
                current,
                current.previousElementSibling
            )
        }

        downbtn.onclick = function(event)
        {
            let current = event.target.parentElement

            list.insertBefore(
                current.nextElementSibling,
                current
            )
        }

        delbtn.onclick = function(event)
        {
            event.target.parentElement.remove()
        }

        
        item.appendChild(upbtn)
        item.appendChild(downbtn)
        item.appendChild(delbtn)
        item.appendChild(span)
        list.appendChild(item)

        input.value = ''
    }
}