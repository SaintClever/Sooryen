let container = document.getElementById('container');
let container_module = document.getElementById('container_module');
let module_ = document.getElementById('module');
let remove_module_btn = document.getElementById('remove_module_btn');
let title = document.getElementById('title');
let input_title = document.getElementById('input_title');
let add_module_btn = document.getElementById('submit_module');
let nav = document.getElementById('nav');
let copy = document.getElementById('copy');


container.addEventListener('click', (e) => {
    // target clicked
    if (e.target.id === 'remove_module_btn') {
        // remove clicked
        console.log(e.target.parentNode.parentNode.remove())
    }

    // animation
    // if (e.target.id === 'nav') {
    //     console.log('hello');
    //     copy.classList.toggle('copy_anime');
    // }
}, false);

add_module_btn.addEventListener('click', (e) => {
    e.preventDefault();

        // create div
        let div = document.createElement('div');



        // assign module_.innerHTML to div
        div.innerHTML = module_.innerHTML;

        // append div
        container_module.appendChild(div);

        // sloppy title logic
        let title_ = container_module.lastElementChild.firstElementChild.firstElementChild
        if (input_title.value !== '') {
            title_.innerHTML = input_title.value;
            input_title.value = ''
        } else {
            title_.innerHTML = 'Title'
        }



}, false);