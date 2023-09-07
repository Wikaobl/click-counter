// let number = 0;

// const add = () => {
//     number++;
//     document.body.textContent = `aktualny stan licznika: ${number}`;
// }
// document.addEventListener('click', add)



// licznik ale z uzyciem domkniec (closure)

const add = (start = 0) => {
    let number = start;
    return () => {
        number++;
        document.body.textContent = `aktualny stan licznika kliknięć: ${number}`;
    }
}

const counter = add();
document.addEventListener('click', counter);