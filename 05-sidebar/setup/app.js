const sidebar = document.querySelector('.sidebar');
const closebtn = document.querySelector('.close-btn');
const toggleSidebar = document.querySelector('.sidebar-toggle');

toggleSidebar.addEventListener('click', () => {
    //Toogle Sidebar 
    sidebar.classList.toggle('show-sidebar');
})

closebtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
})