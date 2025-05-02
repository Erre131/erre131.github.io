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
const categorie = ['Cereali e derivati', 'Spezie e condimenti', 'Frutta e Verdure', 'Latte e derivati', 
  'Carne Pesce Uova', 'Prodotti da forno', 'Scatolame', 'Pasti pronti', 'Snack e merendine', 
  'Surgelati', 'Bevande', 'Cibo per bambini', 'Cibo per Animali', 'Cura della persona', 'Farmaci' ];

//Creo i prodotti campione
const p1= new Product('Latte intero Centrale del Latte', "1 litro", 2, ["Entro il 7 maggio 2025", "Entro il 23 aprile 2025"], "Latte", "Contiene latte", 3);
const p2= new Product('Burro tradizionale del Piemonte Terre d\'Italia', '250 grammi', 1, ['Preferibilmente entro il 27 aprile 2025, consumabile fino al 27 maggio 2025'], 'Panna fresca di centrifuga (latte)','Contiene LATTE', 3);
const p3= new Product('Grana Padano DOP 16 mesi grattugiato', '100 grammi', 1, ['Preferibilmente entro il 26 maggio 2025, Consumabile fino al 30 maggio 2025'], 'Latte, sale, caglio, lisozima d\'uovo (conservante)', 'Contiene UOVA, LATTE', 3);
const p4= new Product('Pesto alla Genovese DOP Barilla', '190 grammi', 1, ['Entro il 5 novembre 2025'], 'olio oliva, olio girasole, basilico fresco 30%, ANACARDI, parmigiano reggiano DOP 5% (LATTE), fibra di mais, siero di LATTE in polvere, sale, proteine del LATTE, olio extra vergine di oliva, zucchero, estratto di basilico, aromi naturali (LATTE), correttore di acidità: acido lattico, aglio. Può contenere tracce di altra frutta a guscio.', 'Contiene ANACARDI, LATTE, Può contenere FRUTTA A GUSCIO', 1);
const p5= new Product('Fettine sottilissime di pollo Aia', '250 grammi', 2, ['Entro il 4 maggio 2025','Scadenza assente'], 'Pollo','POLLO', 4);
const p6= new Product('Insalata iceberg Bonduelle', '200 grammi', 2, ['Entro il 27 aprile 2025','Entro il 10 maggio 2025'], 'Lattuga iceberg', 'LATTUGA', 2);
const p7= new Product('Mele Fuji', '4 mele', 2, ['Scadenza assente'], 'mele','', 2);
const p8= new Product('Baguette', '200 grammi', 1, ['Entro 3 giorni dall\'apertura'], 'Semola rimacinata di Grano duro (60%), acqua, farina di GRANO tenerotipo 0,lievito, sale, destrosio.', 'Può contenere tracce di SOIA, SESAMO, LATTE, LATTOSIO.', 5);
const p9= new Product('Coca Cola Original','2 litri',1 ,['Entro il 23 maggio 2028'],'Acqua, zucchero, anidride carbonica, colorante E150d, acidificante acido fosforico, aromi naturali inclusa caffeina','CARAMELLO E150D', 10);
const p10= new Product('Pisellini primavera Findus','700 grammi', 1,['Preferibilmente entro il 3 febbraio 2027, Consumabile fino al 3 maggio 2027'],'Pisellini primavera','PISELLI',9);
const p11= new Product('Balsamo lisci effetto seta Pantene Pro-V','200 milligrammi', 1 ,['Preferibilmente entro il 5 giugno 2030, Da consumare entro un anno dall\'apertura'],'Acqua, Sodium lauryl sulfato, dimethicone, glycol distearato, provitamina B5, acido citrico, cloridio di sodio, PROFUMO','PROFUMO',12 );
const p12= new Product('Fusilli numero 34 De Cecco','500 grammi', 1, ['Preferibilmente entro il 2 dicembre 2035, Consumabile fino al 2 marzo 2036'], 'Semola di grano duro, Acqua','Può contenere SENAPE e SOIA',0);
const p13= new Product('Arachidi tostate e salate Cameo Snack Friends','500 grammi',1,['Preferibilmente entro il 4 gennaio 2027, Consumabili fino al 22 gennaio 2027'],'ARACHIDI, Olio di semi di girasole, sale', 'Contiene ARACHIDI, Può contenere FRUTTA A GUSCIO',8);
const p14= new Product('Tachipirina 1000 mg compresse', '', 1,['Entro il 31 agosto 2032'], 'Paracetamolo','',14)


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
campionario.set(p11.name, p11);
campionario.set(p12.name, p12);


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
  let randtime = Math.floor(Math.random() * 15000);
  setTimeout(
            ()=>{window.location='expnotification.html'},
              //aggiungi popup alla pagina =non funziona non prende la grafica popup jquery
            //   document.body.innerHTML += '<div id="exp-notification" title="Attenzione i seguenti prodotti sono in scadenza:"><p id="p-notification"></p></div>';
            //   p=document.getElementById('p-notification');
            //   p.innerHTML+='<span class="ui-icon ui-icon-alert" style="float:left; margin:12px 12px 20px 0;"></span><div class="product-preview"><h1 id="exp-product-name">Latte intero Centrale del Latte</h1><h2>Scade il 3 aprile 2025 </h2></div>';
            // },

            5000
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


