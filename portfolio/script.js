const links = document.getElementsByClassName('active-link');
const tabs = document.getElementsByClassName('active-tab');

openTab = (tabName) => {
    for (link of links) {
        link.classList.remove('active-link');
    }
    for (tab of tabs) {
        tab.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}


const sideBar = document.getElementById('side-bar');

openBar = () => {
    sideBar.style.right = "0";
}

closeBar = () => {
    sideBar.style.right = "-200px";
}
