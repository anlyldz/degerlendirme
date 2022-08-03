(function () {
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    const btn = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
        
    }
    function createCustomer(img, name, text) {
        let Img = `./img/${img}.jpg`
        let customer = new Customer(Img, name, text)
        customers.push(customer)
    }
    createCustomer(1,'Ahmet','Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, vero voluptatum vel aperiam facilis atque odit minima necessitatibus non nemo nulla nihil ipsa consectetur asperiores, nostrum, quia harum dolore. Fugiat?')
    createCustomer(2,'Mehmet','Lorem, 123aegaeıgjpdjobğzdobğsoejbğsebsesbd')
    createCustomer(3,'Can','12345678946984548654684')

    btn.forEach(function (button) {
        button.addEventListener('click',function (e) {
            if(e.target.parentElement.classList.contains('prevBtn')){
                if(index === 0 ){
                    index = customers.length

                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text

            }
            if(e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index === customers.length){
                    index = 0
                }
                
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text

            }
        })
    })
})()

