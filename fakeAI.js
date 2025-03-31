// window.onload = function(){
//     localStorage.clear();
// }

//Definisco classe Prodotto

//Ho units che è int: 
// qty è sempre la stessa per semplificare sennò sarebbe da differenziare es latte da 500ml e quello da 1l,
// expiration è una lista di scadenze (pos 1 scad unità 1 ecc)
class Product{
    //stringa, stringa (contiene es litri o gr), int, array, string, string
    constructor(name, qty, units, expiration, ingredients, allergens, category){
    this.name=name;
    this.qty=qty;
    this.units=units;
    this.expiration=expiration;
    this.ingredients=ingredients;
    this.allergens=allergens;
    this.category=category
    }

    //metodo per aggiungere un'unità di prodotto con eventualmente expiration date
    addUnit([exp]){
        this.units=units++;
        this.expiration.push(exp);
    }

    //metodo per aggiornare scadenza unità
    uploadUnit(u,exp){
        this.expiration[u]=exp;
    }
}
//Array categorie (posizione=id categoria)
const categorie = ['Cereali e farine', 'Spezie e condimenti', 'Frutta e verdure', 'Latte e derivati', 
  'Carne pesce uova', 'Prodotti da forno', 'Scatolame', 'Pasti pronti', 'Cibo secco', 'Snack e merendine', 
  'Surgelati', 'Bevande', 'Cibo per bambini', 'Cibo per Animali', 'Cura della persona', 'Farmaci' ];

//Creo i prodotti campione
const p1= new Product('Latte intero Centrale del Latte', "1 litro", 2, ["Entro il 2 marzo 2025", "Entro il 23 aprile 2025"], "Latte", "Contiene latte", 3);
const p2= new Product('Burro tradizionale del Piemonte Terre d\'Italia', '250 grammi', 1, ['Preferibilmente entro il 27 aprile 2025'], 'Panna fresca di centrifuga (latte)','Contiene latte', 3);
const p3= new Product('Grana Padano DOP 16 mesi grattugiato', '100 grammi', 1, [], 'Latte, sale, caglio, lisozima d\'uovo (conservante)', 'Contiene Uova, Latte', 3);
const p4= new Product('Pesto alla Genovese DOP Barilla', '190 grammi', 1, [], 'olio oliva, olio girasole, basilico fresco 30%, anacardi, parmigiano reggiano DOP 5% (latte), fibra di mais, siero di latte in polvere, sale, proteine del latte, olio extra vergine di oliva, zucchero, estratto di basilico, aromi naturali (latte), correttore di acidità: acido lattico, aglio. Può contenere tracce di altra fturra a guscio.', 'Contiene anacardi, latte, Potrebbe contenere Frutta a guscio', 1);
const p5= new Product('Fettine sottilissime di pollo Aia', '250 grammi', 2, ['Entro il 4 aprile 2025'], '','', 4);
const p6= new Product('Insalata iceberg Bonduelle', '200 grammi', 2, ['Entro il 13 aprile 2025'], 'Lattuga iceberg', '', 2);
const p7= new Product('Mele Fuji', '4 mele', 2, [], 'mele','', 2);
const p8= new Product('Baguette', '200 grammi', 1, [], 'Semola rimacinata di Grano duro (60%), acqua, farina di GRANO tenerotipo 0,lievito, sale, destrosio.', 'Può contenere tracce di soia, sesamo, latte, lattosio e derivati.', 5);
const p9= new Product('Coca Cola Original','2 litri',1 ,['Entro il 23 maggio 2028'],'Acqua, zucchero, anidride carbonica, colorante E150d, acidificante acido fosforico, aromi naturali inclusa caffeina','', 11);
const p10= new Product('Pisellini primavera Findus','700 grammi', 1,['Preferibilmente entro il 3 febbraio 2027'],'Pisellini primavera','',10);
const p11= new Product('Balsamo lisci effetto seta Pantene Pro-V','200 milligrammi', 1 ,['Preferibilmente entro il 5 giugno 2030'],'','',14 );

//Metto i prodotti campione in una lista String nomemarca:Product datidelprodotto
const campionario = new Map();

campionario.set(p1.name, p1);
campionario.set(p2.name, p2);
campionario.set(p3.name, p3);
campionario.set(p4.name, p4);
campionario.set(p5.name, p5);
campionario.set(p6.name, p6);
campionario.set(p7.name, p7);
campionario.set(p8.name, p8);
campionario.set(p9.name, p9);
campionario.set(p10.name, p10);


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
      }
    }
  });
} );


//Per andare nella pagina indicata nell'url dopo aver "usato l'AI per individuare qualcosa" 
//(quindi dopo che l'AI simulata ha finito di parlare dopo tot msec)
// function infoFound(url,msec){
//     setTimeout(
//         ()=>{window.location=url},
//         msec
//     );
// }

//Fa partire l'audio AI e un timer che quando l'audio finisce porta alla pagina corrispondente
function startAI(audiofile, url, msec){
    //Individua prodotto randomico, porta poi in pagina corrispondente??
    //se sto in scadenza devo passargli prodotto attuale per avviare audio corrispondente
    var audio= new Audio(audiofile);
    audio.play();
    var playbutton = document.getElementById("play-AI");
    playbutton.disabled=true;
    setTimeout(
        ()=>{window.location=url},
        msec
    );
}

//Fa comparire dopo tot tempo la notifica che un prodotto è scaduto o in scadenza
//tramite finestra di dialogo popup -> ACCESSIBILE???
function expNotify(){
  //setta timer randomico dopo il quale far partire la notifica
  let randtime = Math.floor(Math.random() * 30000);
  setTimeout(
            ()=>{
              //aggiungi popup alla pagina
              document.body.innerHTML += '<div id="exp-notification" title="Attenzione i seguenti prodotti sono in scadenza:"><p><span class="ui-icon ui-icon-alert" style="float:left; margin:12px 12px 20px 0;"></span><div class="product-preview"><h1 id="exp-product-name">Latte intero Centrale del Latte</h1><h2>Scade il 3 aprile 2025 </h2></div></p></div>';
            },
            10000
        );
}



//Popola la pagina prodotto a seconda della preview prodotto che si è cliccata
function loadDataProduct(){
    //Se Ha allergeni metti segnalino
    //Se scaduto o in scadenza metti segnalino

    const prodcliccato = localStorage.getItem('selectedProduct').trim();
    console.log("prodcliccato"+prodcliccato);

    let prodotto = new Product();
    prodotto = campionario.get(prodcliccato);
    //console.log(campionario);

    if (prodotto) {
        console.log(prodotto.name);  // Accedi al nome del prodotto
        
      } else {
        console.log("Prodotto non trovato!");
        return "Prodotto non trovato!";
      }

    nome=document.getElementById("productname");
    nome.innerHTML = prodcliccato; //prodotto.name;
    qta=document.getElementById("quantity");
    qta.innerHTML =prodotto.units +" unità da " +prodotto.qty;

    exp=document.getElementById("expirationdate");
    //devo farlo div o simile
    listascadenze="";
    for (let u = 0; u < prodotto.units; u++) {
        listascadenze += "<h3> Unità "+ (u+1) + "</h3> <p>"+ prodotto.expiration[u]+"</p> <br>";       
        }
    exp.innerHTML=listascadenze;  
    ingr=document.getElementById("ingredients");
    ingr.innerHTML = prodotto.ingredients;
    //come gestisco i miei allergeni?? deve essere solo esempio
    all=document.getElementById("allergens");
    all.innerHTML = prodotto.allergens;

} 

//Popola la pagina Category selected con i prodotti corrispondenti a seconda della categoria che si è cliccata
function loadCategoryProducts(){
  //Se Ha allergeni metti segnalino
  //Se scaduto o in scadenza metti segnalino

  const catcliccata = localStorage.getItem('selectedCategory').trim();
  console.log("catcliccata"+catcliccata);
  //Scrivo nome categoria cliccata
  cat=document.getElementById("categoryname");
  cat.innerHTML = catcliccata;
  //Estraggo id categoria dalla sua posizione nell'array di categorie
  catid = categorie.indexOf(catcliccata);
  //Raccolgo i prodotti per categoria
  const result = Map.groupBy(campionario.values(), product => product.category);

  //Estraggo solo quelli della categoria cliccata
  const catproducts = result.get(catid);
  console.log(catproducts);
  
  //estraggo div in cui scrivere
  lista=document.getElementById("preview-list");

   //Se non ci sono prodotti di quella categoria scrivo non ce ne sono
  if(typeof(catproducts)=='undefined'){
    lista.innerHTML = "Nessun prodotto in questa categoria";
    return;
  }
   

  for(let i = 0; i < catproducts.length; i++){
    nome=catproducts[i].name;
    //scorro su scadenze scad=catproducts[i].exp;
    lista.innerHTML += '<button class="product-preview" type="button" >'+nome+'</button>';
  }
  
 

} 


