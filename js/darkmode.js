const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const colorPicker = document.getElementById('color-picker');
const colorBackground = document.getElementById('background-picker')
//document.body.classList.add('clase-ejemplo');

toggleThemeBtn.addEventListener('click', function(){
    //alert("me diste click");
    document.body.classList.toggle('dark');
})

colorPicker:addEventListener('change', function() {
document.body.style.color = colorPicker.value;
});

colorBackground:addEventListener('change', function() {
    document.body.style.background = colorBackground.value;
    });