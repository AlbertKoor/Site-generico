document.addEventListener('DOMContentLoaded', () => {
    const modalContainer = document.querySelector(".modal__container");
    const openModalBtns = document.querySelectorAll(".modal__openbtn");
    const closeModalBtn = document.querySelector(".modal__closebtn");
    
    openModalBtns.forEach(button => {
        button.addEventListener("click", () => {
            modalContainer.showModal();
        });
    });

    closeModalBtn.addEventListener("click", () => {
        modalContainer.close();
    });
});
