const theme = document.querySelector('html')
const logo = document.getElementById('header-logo')

function changeTheme() {
    if (theme.className === 'light') {
        theme.className = 'dark'
        logo.src = 'reverse-logo.png'
        document.getElementById('current-theme').innerHTML = 'dark_mode'
    } else if (theme.className === 'dark') {
        theme.className = 'light'
        logo.src = 'logo.png'
        document.getElementById('current-theme').innerHTML = 'light_mode'
    }
}