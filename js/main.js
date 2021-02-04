let Modal = {
    open(){
        /* This is where we'll set the modal to be active by allowing it to use the active class*/
        document.querySelector('.modal-overlay')
        .classList.add('active')
    },
    close(){

        /*This is where the modal will close, removing the activve class*/
        document.querySelector('.modal-overlay')
        .classList.remove('active')
    }
}