

function openCloseModal() {
    let modal = document.querySelector(".modal");
    if (modal.style.display === "none") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
}





// document.addEventListener (
//     "click",
//     function(event) {
//         if (
//             event.target.matches('.fa-solid.fa-square-xmark') ||
//             event.target.matches('.close-btn') ||
//             !event.target.closest('.modal')
//         ) {
//             closeModal();
//         }
//     }, 
//     false
// )

// function closeModal() {
//     document.querySelector('.modal').style.display = 'none';
// }

