
document.getElementById("myForm").addEventListener("submit", function(event) {
    items = []
    event.preventDefault();
    items.push(document.getElementById("to-do-task").value);

    var to_do = document.querySelector(".to-do-items")

    items.forEach(item => {
        var div = document.createElement('div')
        div.classList.add("item-container")

        var itemmmm = document.createElement('div')
        itemmmm.classList.add("item")
        itemmmm.textContent = item;

        var button = document.createElement("button")
        button.classList.add("removeButton")
        button.textContent = '-'

        to_do.appendChild(div)
        div.appendChild(itemmmm)
        div.appendChild(button)

    });

    var buttonsss = document.querySelectorAll(".removeButton")

    buttonsss.forEach(buton => {
        buton.addEventListener("click", (event)=>{
            event.target.parentElement.remove();
        }
        )
        
    });

});
