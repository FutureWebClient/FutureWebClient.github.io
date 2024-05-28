document.querySelectorAll('.module').forEach(module => {
    module.addEventListener('click', () => {
        executeScript();
    });
});

function executeScript() {
    const script = document.createElement('script');
    script.src = 'https://raw.githubusercontent.com/7GrandDadPGN/VapeV4ForRoblox/main/NewMainScript.lua';
    document.head.appendChild(script);
}

document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
});
