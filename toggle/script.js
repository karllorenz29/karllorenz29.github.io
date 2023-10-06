let togglePrice = document.querySelector('input');

togglePrice.onclick = () => {
    togglePrice.classList.toggle('active');

    if (togglePrice.classList.contains('active')) {
        document.querySelector('.one').innerHTML = "19.99";
        document.querySelector('.two').innerHTML = "24.99";
        document.querySelector('.three').innerHTML = "39.99";
    }else {
        document.querySelector('.one').innerHTML = "229.99";
        document.querySelector('.two').innerHTML = "289.99";
        document.querySelector('.three').innerHTML = "469.99";
    }
}