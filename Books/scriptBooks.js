    document.addEventListener('DOMContentLoaded', function() {
        // Carrega o HTML da navbar
        fetch('../Navbar/navBar.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header-container').innerHTML = data;
    
                 // Após carregar a navbar, adicione os listeners para o menu hambúrguer
                const hamburgerMenu = document.querySelector('.hamburger-menu');
                const tudo = document.querySelector('.tudo');
                const closeButton = document.querySelector('.close-button');
    
                hamburgerMenu.addEventListener('click', () => {
                    tudo.classList.add('active');
                });
    
                closeButton.addEventListener('click', () => {
                    tudo.classList.remove('active');
                });
            });
    
    
    
    });