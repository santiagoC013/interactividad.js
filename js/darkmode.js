const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const colorPicker = document.getElementById('color-picker');
const colorBackground = document.getElementById('background-picker')
//document.body.classList.add('clase-ejemplo');

toggleThemeBtn.addEventListener('click', function(){
    //alert("me diste click");
toggleTheme()
})
function toggleTheme(){
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        toggleThemeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        
    } else {
        toggleThemeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>'
    }
}

colorPicker.addEventListener('change', function() {
document.body.style.color = colorPicker.value;
})

colorBackground.addEventListener('change', function() {
    document.body.style.backgroundColor = colorBackground.value;
    });