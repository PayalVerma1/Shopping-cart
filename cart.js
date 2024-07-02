const bag = document.getElementsByClassName("bag");



let i = 0;
for (const key of Object.keys(localStorage)) {
    let item = localStorage.getItem(key);
    console.log(item);
    const element = bag[i];
    element.innerHTML=item;
    i++
}
