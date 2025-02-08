function updateCounter() {
    fetch('https://api.countapi.xyz/update/anjarwati/counter1/?amount=1')
    // https://api.countapi.xyz/create?namespace=belajar1&key=tes1&value=0
    // https://api.countapi.xyz/get/belajar1/tes1
    // https://api.countapi.xyz/update/belajar1/tes1/?amount=1
        .then(res => res.json())
        .then(data => counterElement.innerHTML = data.value)
}

updateCounter()



counterElement = document.getElementsByClassName('count')[0];