//Per raggruppare le funzioni da importare a fine body
//event listener, se un bottone con class="product-preview" viene cliccato 
//Salva il nome e passa alla pagina del prodotto
const btns=document.querySelectorAll('.product-preview');
btns.forEach(button => 
    {
        button.addEventListener('click', function() {
            //Salvo nome prodotto cliccato e lo salvo
            let prodcliccato=this.innerHTML;
            localStorage.setItem('selectedProduct', prodcliccato);
            //va nella pagina coi dati del prodotto
            window.location = 'productdata.html';

        });
});


//event listener, se cliccato bottone con class="" 
  //Salva il nome in catcliccata  e passa a pagina prodotti
  const btns1=document.querySelectorAll('.sub-category');
  btns1.forEach(button => 
      {
          button.addEventListener('click', function() {
              //Salvo nome categoria cliccata e lo salvo
              let catcliccata=this.innerHTML;
              localStorage.setItem('selectedCategory', catcliccata.trim());
              //va nella pagina coi prodotti della categoria
              window.location = 'categoryselected.html';
  
          });
  });

  
//Definisce la struttura della finestra di notifica per prodotto in scadenza
$( function() {
    $( "#exp-notification" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Visualizza prodotto": function() {
          $( this ).dialog( "close" );
          //salva il prodotto come selectedProduct nel localStorage
          let prodcliccato = document.getElementById('exp-product-name').innerHTML;
          localStorage.setItem('selectedProduct', prodcliccato);
          //va nella pagina coi dati del prodotto
          window.location = 'productdata.html';
        },
        "Lista prodotti in scadenza": function(){
          $( this ).dialog( "close" );
          window.location = 'expiredproductlist.html';
        },
        Chiudi: function() {
          $( this ).dialog( "close" );
          window.history.go(-1);
        }
      }
    });
  } );
  