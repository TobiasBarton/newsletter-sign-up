function subscribe(event) {
    event.preventDefault()
    const form = event.target;
    const data = new FormData(form)
    const object = {}
    data.forEach((value, key) => object[key] = value)

    let mainContainer = document.getElementById("main-container")
    let successContainer = document.getElementById("main-container-success")
    let emailTarget = document.getElementById("email-target")

    mainContainer.style.display = 'none';
    successContainer.style.display = 'block';
    emailTarget.innerHTML = object["email-address"] 
}

function dismiss() {
    let mainContainer = document.getElementById("main-container")
    let successContainer = document.getElementById("main-container-success")

    mainContainer.style.display = 'flex';
    successContainer.style.display = 'none';
}