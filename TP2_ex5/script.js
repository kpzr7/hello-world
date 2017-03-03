
$( document ).ready(function($){

    /* Quand je clique sur l'icône hamburger je rajoute une classe au body */
    $('#menu-icon').click(function(e){
        $('#burger').toggle();
    });

    /* Je veux pouvoir masquer le menu si on clique sur le cache */
    $('#site-cache').click(function(e){
    $('body').removeClass('with--sidebar');
    })
});

