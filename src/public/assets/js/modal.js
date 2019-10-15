const modal = document.querySelector(".modal");
const deleteFormList = document.querySelectorAll(".delete-form");
const deleteConfirm = document.querySelector(".delete-confirm");
const deleteAbort = document.querySelector(".delete-abort");


deleteFormList.forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        modal.style.display = "block";
    
        deleteConfirm.addEventListener("click", () => {
            form.submit();
        });
    
        deleteAbort.addEventListener("click", () => {
            modal.style.display = "none";
        })
    });
});