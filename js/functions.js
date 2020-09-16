
const crossCoins = document.getElementById("crossCoins");
/*- VALIDATE INPUT QUANTITY ONLY NUMBERS -*/
var RegExp = new RegExp(/^\d*\.?\d*$/); 
const quantity = document.getElementById("quantity");
var val = quantity.value;         
quantity.addEventListener('input', function() {
  if (RegExp.test(quantity.value)) { 
    val = quantity.value;
    } else { 
      quantity.value = val;
  }
});
        const arrayCurrency = [{id:'ALL', currencyName: 'Lek albanes', flag: '🇦🇱'},{id:'XCD', currencyName: 'Dolar del Caribe Oriental', flag: '🇧🇶'},{id:'EUR', currencyName: 'Euro', flag: '💶'},{id:'BBD', currencyName: 'Dolar de Barbados', flag: '🇧🇧'},{id:'BTN', currencyName: 'Ngultrum butanes', flag: '🇧🇹'},{id:'BND', currencyName: 'Dolar bruneano', flag: '🇧🇳'},{id:'XAF', currencyName: 'Franco CFA de Africa Central', flag: '🇨🇫'},{id:'CUP', currencyName: 'Peso cubano', flag: '🇨🇺'},{id:'USD', currencyName: 'Dolar estadounidense', flag: '🇺🇸'},{id:'FKP', currencyName: 'Libra de las Islas Malvinas', flag: '🇫🇰'},{id:'GIP', currencyName: 'Libra de Gibraltar', flag: '🇬🇮'},{id:'HUF', currencyName: 'Forint hungaro', flag: '🇭🇺'},{id:'IRR', currencyName: 'Rial irane', flag: '🇮🇷'},{id:'JMD', currencyName: 'Dolar jamaiquino', flag: '🇯🇲'},{id:'AUD', currencyName: 'Dolar australiano', flag: '🇦🇺'},{id:'LAK', currencyName: 'Lao Kip', flag: '🇱🇦'},{id:'LYD', currencyName: 'Dinar libio', flag: '🇱🇾'},{id:'MKD', currencyName: 'Denar macedonio', flag: '🇲🇰'},{id:'XOF', currencyName: 'Franco CFA de Africa Occidental', flag: '🇨🇮'},{id:'NZD', currencyName: 'Dolar neozelandes', flag: '🇳🇿'},{id:'OMR', currencyName: 'Rial omane', flag: '🇴🇲'},{id:'PGK', currencyName: 'Kina de Papua Nueva Guinea', flag: '🇵🇬'},{id:'RWF', currencyName: 'Franco ruandes', flag: '🇷🇼'},{id:'WST', currencyName: 'Tala Samoa', flag: '🇼🇸'},{id:'RSD', currencyName: 'Dinar serbio', flag: '🇷🇸'},{id:'SEK', currencyName: 'Corona sueca', flag: '🇸🇪'},{id:'TZS', currencyName: 'Chelen tanzano', flag: '🇹🇿'},{id:'AMD', currencyName: 'Dram armenio', flag: '🇦🇲'},{id:'BSD', currencyName: 'Dolar de las Bahamas', flag: '🇼🇸'},{id: 'BAM', currencyName: 'Marco convertible Bos y Herz', flag: '🇧🇦' },{id: 'CVE', currencyName: 'Escudo caboverdiano', flag: '🇨🇻' },{id: 'CNY', currencyName: 'Yuan chino', flag: '🇨🇳' },{id: 'CRC', currencyName: 'Colon costarricense', flag: '🇨🇷' },{id: 'CZK', currencyName: 'Corona checa', flag: '🇨🇿' },{id: 'ERN', currencyName: 'Eritrean Nakfa', flag: '🇪🇷' },{id: 'GEL', currencyName: 'Lari georgiano', flag: '🇬🇪' },{id: 'HTG', currencyName: 'Gourde haitiano', flag: '🇭🇹' },{id: 'INR', currencyName: 'Rupia india', flag: '🇮🇳' },{id: 'JOD', currencyName: 'Dinar jordano', flag: '🇯🇴' },{id: 'KRW', currencyName: 'Won surcoreano', flag: '🇰🇷' },{id: 'LBP', currencyName: 'Lira libanesa', flag: '🇱🇧' },{id: 'MWK', currencyName: 'Kwacha malaue', flag: '🇲🇼' },{id: 'MRO', currencyName: 'Ouguiya Mauritania', flag: '🇲🇷' },{id: 'MZN', currencyName: 'Metical mozambiqueño', flag: '🇲🇿' },{id: 'ANG', currencyName: 'Gulden de las Antillas Holandesas', flag: '🇧🇶' },{id: 'PEN', currencyName: 'Nuevo Sol Peruano', flag: '🇵🇪' },{id: 'QAR', currencyName: 'Riyal de Qatar', flag: '🇶🇦' },{id: 'STD', currencyName: 'Dobra Santo Tome y Principe', flag: '🇸🇹' },{id: 'SLL', currencyName: 'Sierra Leona Leone', flag: '🇸🇱' },{id: 'SOS', currencyName: 'Chelen Somale', flag: '🇸🇴' },{id: 'SDG', currencyName: 'Libra Sudanesa', flag: '🇸🇩' },{id: 'SYP', currencyName: 'Libra Siria', flag: '🇸🇾' },{id: 'AOA', currencyName: 'Kwanza Angoleño', flag: '🇦🇴' },{id: 'AWG', currencyName: 'Florin Arubeño', flag: '🇦🇼' },{id: 'BHD', currencyName: 'Dinar Bahreine', flag: '🇧🇭' },{id: 'BZD', currencyName: 'Dolar de Belice', flag: '🇧🇿' },{id: 'BWP', currencyName: 'Botswana Pula', flag: '🇧🇼' },{id: 'BIF', currencyName: 'Franco de Burundi', flag: '🇧🇮' },{id: 'KYD', currencyName: 'Dolar de las Islas CaimAn', flag: '🇰🇾' },{id: 'COP', currencyName: 'Peso colombiano', flag: '🇨🇴' },{id: 'DKK', currencyName: 'Corona danesa', flag: '🇩🇰' },{id: 'GTQ', currencyName: 'Quetzal guatemalteco', flag: '🇬🇹' },{id: 'HNL', currencyName: 'Lempira hondureño', flag: '🇭🇳' },{id: 'IDR', currencyName: 'Rupia indonesia', flag: '🇮🇩' },{id: 'ILS', currencyName: 'Nuevo sheqel israele', flag: '🇮🇱' },{id: 'KZT', currencyName: 'Tenge kazajo', flag: '🇰🇿' },{id: 'KWD', currencyName: 'Dinar kuwaite', flag: '🇰🇼' },{id: 'LSL', currencyName: 'Loti Reino de Lesotho', flag: '🇱🇸' },{id: 'MYR', currencyName: 'Ringgit de Malasia', flag: '🇲🇾' },{id: 'MUR', currencyName: 'Rupia de Mauricio', flag: '🇲🇺' },{id: 'MNT', currencyName: 'Tugrik mongol', flag: '🇲🇳' },{id: 'MMK', currencyName: 'Kyat birmano Myanmar', flag: '🇲🇲' },{id: 'NGN', currencyName: 'Naira nigeriana', flag: '🇳🇬' },{id: 'PAB', currencyName: 'Balboa Panameño', flag: '🇵🇦' },{id: 'PHP', currencyName: 'Peso filipino', flag: '🇵🇭' },{id: 'RON', currencyName: 'Leu rumano', flag: '🇷🇴' },{id: 'SAR', currencyName: 'Riyal saude', flag: '🇸🇦' },{id: 'SGD', currencyName: 'Dolar de Singapur', flag: '🇸🇬' },{id: 'ZAR', currencyName: 'Rand sudafricano', flag: '🇿🇦' },{id: 'SRD', currencyName: 'Dolar de Surinam', flag: '🇸🇷' },{id: 'TWD', currencyName: 'Nuevo dolar taiwanes', flag: '🇹🇼' },{id: 'TOP', currencyName: 'Paanga', flag: '🇹🇴' },{id: 'VEF', currencyName: 'Bolevar venezolano', flag: '🇻🇪' },{id: 'DZD', currencyName: 'Dinar argelino', flag: '🇩🇿' },{id: 'ARS', currencyName: 'Peso argentino', flag: '🇦🇷' },{id: 'AZN', currencyName: 'Manat azerbaiyano', flag: '🇦🇿' },{id: 'BYR', currencyName: 'Rublo bielorruso', flag: '🇧🇾' },{id: 'BOB', currencyName: 'Boliviano de Bolivia', flag: '🇧🇴' },{id: 'BGN', currencyName: 'Lev bulgaro', flag: '🇧🇬' },{id: 'CAD', currencyName: 'Dolar canadiense', flag: '🇨🇦' },{id: 'CLP', currencyName: 'Peso Chileno', flag: '🇨🇱' },{id: 'CDF', currencyName: 'Franco congoleño', flag: '🇨🇩' },{id: 'DOP', currencyName: 'Peso dominicano', flag: '🇩🇴' },{id: 'FJD', currencyName: 'Dolar fiyiano', flag: '🇫🇯' },{id: 'GMD', currencyName: 'Dalasi de Gambia', flag: '🇬🇲' },{id: 'GYD', currencyName: 'Dolar de Guyana', flag: '🇬🇾' },{id: 'ISK', currencyName: 'Corona islandesa', flag: '🇮🇸' },{id: 'IQD', currencyName: 'Dinar iraque', flag: '🇮🇶' },{id: 'JPY', currencyName: 'Yen japones', flag: '🇯🇵' },{id: 'KPW', currencyName: 'Won norcoreano', flag: '🇰🇵' },{id: 'LVL', currencyName: 'Latvian Lats', flag: '🇱🇻' },{id: 'CHF', currencyName: 'Franco suizo', flag: '🇨🇭' },{id: 'MGA', currencyName: 'Ariary malgache', flag: '🇲🇬' },{id: 'MDL', currencyName: 'Leu moldavo', flag: '🇲🇩' },{id: 'MAD', currencyName: 'Dirham marroque', flag: '🇲🇦' },{id: 'NPR', currencyName: 'Rupia nepale', flag: '🇳🇵' },{id: 'NIO', currencyName: 'Cordoba nicaragüense', flag: '🇳🇮' },{id: 'PKR', currencyName: 'Rupia paquistane', flag: '🇵🇰' },{id: 'PYG', currencyName: 'Guarane paraguayo', flag: '🇵🇾' },{id: 'SHP', currencyName: 'Libra de Santa Helena', flag: '🇸🇭' },{id: 'SCR', currencyName: 'Rupia de Seychelles', flag: '🇸🇨' },{id: 'SBD', currencyName: 'Dolar de las Islas Salomon', flag: '🇸🇧' },{id: 'LKR', currencyName: 'Rupia de Sri Lanka', flag: '🇱🇰' },{id: 'THB', currencyName: 'Baht tailandes', flag: '🇹🇭' },{id: 'TRY', currencyName: 'Nueva lira turca', flag: '🇹🇷' },{id: 'AED', currencyName: 'Dirham de los Emiratos Arabes Unidos', flag: '🇦🇪' },{id: 'VUV', currencyName: 'Vanuatu Vatu', flag: '🇻🇺' },{id: 'YER', currencyName: 'Rial yemene', flag: '🇾🇪' },{id: 'AFN', currencyName: 'afgano afgano', flag: '🇦🇫' },{id: 'BDT', currencyName: 'Taka bangladese', flag: '🇧🇩' },{id: 'BRL', currencyName: 'Real brasileño', flag: '🇧🇷' },{id: 'KHR', currencyName: 'Riel camboyano', flag: '🇰🇭' },{id: 'KMF', currencyName: 'Franco comorano', flag: '🇰🇲' },{id: 'HRK', currencyName: 'Kuna croata', flag: '🇭🇷' },{id: 'DJF', currencyName: 'Franco de Yibuti', flag: '🇩🇯' },{id: 'EGP', currencyName: 'Libra egipcia', flag: '🇪🇬' },{id: 'ETB', currencyName: 'Birr eteope', flag: '🇪🇹' },{id: 'XPF', currencyName: 'Franco CFP', flag: '🇵🇫' },{id: 'GHS', currencyName: 'Cedi de Ghana', flag: '🇬🇭' },{id: 'GNF', currencyName: 'Franco guineano', flag: '🇬🇳' },{id: 'HKD', currencyName: 'Dolar de Hong Kong', flag: '🇭🇰' },{id: 'XDR', currencyName: 'Derechos especiales de giro', flag: '🏴󠁤󠁯' },{id: 'KES', currencyName: 'Chelen de Kenia', flag: '🇰🇪' },{id: 'KGS', currencyName: 'Som kirgues', flag: '🇰🇬' },{id: 'LRD', currencyName: 'Dolar liberiano', flag: '🇱🇷' },{id: 'MOP', currencyName: 'Pataca de Macao', flag: '🇲🇴' },{id: 'MVR', currencyName: 'Rufiyaa de Maldivas', flag: '🇲🇻' },{id: 'MXN', currencyName: 'Peso mexicano', flag: '🇲🇽' },{id: 'NAD', currencyName: 'Dolar de Namibia', flag: '🇳🇦' },{id: 'NOK', currencyName: 'Corona noruega', flag: '🇳🇴' },{id: 'PLN', currencyName: 'Zloty polaco', flag: '🇵🇱' },{id: 'RUB', currencyName: 'Rublo ruso', flag: '🇷🇺' },{id: 'SZL', currencyName: 'Swazi Lilangeni', flag: '🇸🇿' },{id: 'TJS', currencyName: 'TayikistAn Somoni', flag: '🇹🇭' },{id: 'TTD', currencyName: 'Dolar de Trinidad y Tobago', flag: '🇹🇹' },{id: 'UGX', currencyName: 'Chelen ugandes', flag: '🇺🇬' },{id: 'UYU', currencyName: 'Peso uruguayo', flag: '🇺🇾' },{id: 'VND', currencyName: 'Dong vietnamita', flag: '🇻🇳' },{id: 'TND', currencyName: 'Dinar tunecino', flag: '🇹🇳' },{id: 'UAH', currencyName: 'Grivna ucraniana', flag: '🇺🇦' },{id: 'UZS', currencyName: 'Som uzbeko', flag: '🇺🇿' },{id: 'TMT', currencyName: 'Manat de Turkmenistan', flag: '🇹🇲' },{id: 'GBP', currencyName: 'Libra esterlina', flag: '🇬🇧' },{id: 'ZMW', currencyName: 'Kwacha zambiano', flag: '🇿🇲' },{id: 'BTC', currencyName: 'Bitcoin', flag: '₿' },{id: 'BYN', currencyName: 'Nuevo rublo bielorruso', flag: '🇧🇾' },{id: 'BMD', currencyName: 'Dolar de las Bermudas', flag: '🇧🇲' },{id: 'GGP', currencyName: 'Libra de Guernsey', flag: '🇬🇬' },{id: 'CLF', currencyName: 'Unidad de Cuenta Chilena', flag: '🇨🇱' },{id: 'CUC', currencyName: 'Peso convertible cubano', flag: '🇨🇺' },{id: 'IMP', currencyName: 'Libra de la Isla de Man', flag: '🇮🇲' },{id: 'JEP', currencyName: 'Libra de Jersey', flag: '🇯🇪' },{id: 'SVC', currencyName: 'Colon salvadoreño', flag: '🇸🇻' },{id: 'ZMK', currencyName: 'Antiguo Kwacha de Zambia', flag: '🇿🇲' },{id: 'XAG', currencyName: 'Plata (onza troy)', flag: '🥈' },{id: 'ZWL', currencyName: 'Dolar de Zimbabue', flag: '🇿🇼' }];

        //console.log(arrayCurrency);

        /*fetch('https://free.currconv.com/api/v7/currencies?apiKey=d4cf3228112bfb5a29f5')
        .then(function(response) {
          return response.json();
        })
      .then(function(myJson) {

        //console.log(myJson);
        
        //console.log(Object.keys(myJson.results).length);
        
        Object.keys(myJson.results).forEach(function(k){
          //console.log(k + ' - ' + myJson.results[k].currencyName + ' ' + myJson.results[k].currencySymbol+ ' '+myJson.results[k].id);
          //console.log(myJson.results[k]);
          var addNameFlag = arrayCurrency.find( country => country.id  == myJson.results[k].id); 
          //console.log(addNameFlag);
          myJson.results[k].nameflag = addNameFlag.currencyName+' '+addNameFlag.flag;
          //console.log(myJson.results[k]);

      });
        
      }); */


      /* WORKM WITH API RAPIDAPI */

      var data = null;

    /*fetch("https://fixer-fixer-currency-v1.p.rapidapi.com/symbols", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "fixer-fixer-currency-v1.p.rapidapi.com",
        "x-rapidapi-key": "2611875c0bmsh9b35a5a17080b8ap11c469jsna53a75cefe8a"
      }
    })
    .then(response => {
      //console.log("Todo bien");
      //console.log(response);

      return response.text().then(function(text) {
        var json = JSON.parse(text);
            const myJson = json;
      
            data = myJson;

            Object.keys(myJson.symbols).forEach(function(k){
              console.log(k +" "+ myJson.symbols[k] );
            });
        });
    })
    .catch(err => {
      console.log('Ocurrió un error');
      console.log(err);
    });*/


var index = -1;
var liSelected;

var indexC = -1;
var liSelectedC;
/* INPUTS TEXT DIVISAS */
var inputText = document.getElementById("myInput");
var inputTextC = document.getElementById("inputConverter");
var toValue = document.getElementById('quantityConverter');

const myFunctions = {
  arrowPress: function(e){
    var li = document.querySelectorAll('#allItems li');
    var len = li.length - 1;

      if(li.length > 0){
        
        if(e == 40) {
          index++;
          //console.log(index);
            //down 
            if (liSelected) {
                liSelected.classList.remove('background');
                next = li[index];
                if(typeof next !== undefined && index <= len) {
                          liSelected = next;
                      } else {
                        index = 0;
                           liSelected = li[0];
                      }
                      liSelected.classList.add('background');
                      //console.log(liSelected.innerHTML);
              }else {
              index = 0;
              
               liSelected = li[0];
                 liSelected.classList.add('background');
                 //console.log(liSelected.innerHTML);
              }
              
            }else if (e == 38) {
    
            //up
              if (liSelected) {
                liSelected.classList.remove('background');
                index--;
                //console.log(liSelected.innerHTML);
                next = li[index];
                if(typeof next !== undefined && index >= 0) {
                          liSelected = next;
                      } else {
                          index = len;
                           liSelected = li[len];
                      }
                      liSelected.classList.add('background');
                      //console.log(liSelected.innerHTML);
              }
              else {
              index = 0;
               liSelected = li[len];
                liSelected.classList.add('background');
                //console.log(liSelected.innerHTML);
              }
            }

        //console.log(selected);
        }    
  },
  arrowPressC: function(e){
    var li = document.querySelectorAll('#allItemsC li');
    var len = li.length - 1;
    if(li.length > 0){
        if(e == 40) {
          indexC++;
          //console.log(indexC);
            //down 
            if (liSelectedC) {
                liSelectedC.classList.remove('background');
                next = li[indexC];
                if(typeof next !== undefined && indexC <= len) {
                          liSelectedC = next;
                      } else {
                        indexC = 0;
                           liSelectedC = li[0];
                      }
                      liSelectedC.classList.add('background');
                      //console.log(liSelectedC.innerHTML);
                }else {
                  indexC = 0;
              
                  liSelectedC = li[0];
                  liSelectedC.classList.add('background');
                 //console.log(liSelectedC.innerHTML);
                }
              
        }else if (e == 38) {
            //up
          if (liSelectedC) {
              liSelectedC.classList.remove('background');
              indexC--;
                //console.log(liSelectedC.innerHTML);
              next = li[indexC];
              if(typeof next !== undefined && indexC >= 0) {
                  liSelectedC = next;
              }else {
                  indexC = len;
                  liSelectedC = li[len];
              }
                
              liSelectedC.classList.add('background');
                      //console.log(liSelectedC.innerHTML);
          }else {
              indexC = 0;
               liSelectedC = li[len];
                liSelectedC.classList.add('background');
                //console.log(liSelectedC.innerHTML);
          }
        }
        //console.log(selected);
    }
  },
  converter: function(fromCurrency, toCurrency, currencies){
    //console.log(fromCurrency+' '+toCurrency+' '+currencies);
    
    fetch(`https://free.currconv.com/api/v7/convert?apiKey=d4cf3228112bfb5a29f5&q=${fromCurrency}_${toCurrency}&compact=y`)
        .then((response)=>response.json())
        .then((rate)=> {
          //console.log(rate);
          toValue.value = (currencies * rate[`${fromCurrency}_${toCurrency}`].val).toFixed(2)
        }).catch((e)=>console.log(e))
  }

}


arrayCurrency.forEach(function(element, k){
  arrayCurrency[k].currencyName = element.currencyName.toUpperCase();
});


var divList = document.getElementById("allItems");
var allItems = '';


function selectItem(element){
  //console.log(element.dataset.id);
  inputText.value = element.innerHTML;
  inputText.dataset.currency = element.dataset.id;
  inputText.select();
  divList.style.display = "none";
}

function filterFunction(event) {

  allItems = '';

  //console.log(event.keyCode);

  if (event.keyCode == 40 || event.keyCode == 38) { 
    myFunctions.arrowPress(event.keyCode); 
  }else if(event.keyCode == 13){
    var selectEnter = document.querySelectorAll('li.background');
    //console.log(selectEnter[0]);
    inputText.value = selectEnter[0].innerHTML;
    inputText.dataset.currency = selectEnter[0].dataset.id;
    divList.innerHTML = '';
    divList.style.display = 'none';
  }else{

    //console.log(divList.style.display );
    if(divList.style.display == 'none'){
      divList.style.display = 'block';
    }

    var filter = inputText.value.toUpperCase();

    let b = arrayCurrency.filter(function(obj) {
      
      return Object.keys(obj).some(function(key) {

        return obj[key].includes(filter);
      });

    });
    
    b.forEach(function(item){

      allItems += `<li data-id='${item.id}' onclick='selectItem(this)'>${item.currencyName} ${item.flag}</li>`; 
      index = -1;
      liSelected;
    });

    divList.innerHTML = allItems;
  }
}


/* FUNCTIONS ELEMENTS CONVERT */


var divListC = document.getElementById("allItemsC");
var allItemsC = '';


function selectItemC(element){
  //console.log(element.dataset.id);
  inputTextC.value = element.innerHTML;
  inputTextC.dataset.currency = element.dataset.id;
  inputTextC.select();
  divListC.style.display = "none";
  indexC = -1;
  liSelectedC;
}

function filterConverter(){

  allItemsC = '';

  //console.log(event.keyCode);

  if (event.keyCode == 40 || event.keyCode == 38) { 
    myFunctions.arrowPressC(event.keyCode); 
  }else if(event.keyCode == 13){
    var selectEnter = document.querySelectorAll('li.background');
    //console.log(selectEnter[0]);
    inputTextC.value = selectEnter[0].innerHTML;
    inputTextC.dataset.currency = selectEnter[0].dataset.id;
    divListC.innerHTML = '';
    divListC.style.display = 'none';
    indexC = -1;
    liSelectedC;
  }else{

    //console.log(divListC.style.display );
    if(divListC.style.display == 'none'){
      divListC.style.display = 'block';
    }

    var filter = inputTextC.value.toUpperCase();

    let b = arrayCurrency.filter(function(obj) {
      
      return Object.keys(obj).some(function(key) {

        return obj[key].includes(filter);
      });

    });
    
    b.forEach(function(item){

      allItemsC += `<li data-id='${item.id}' onclick='selectItemC(this)'>${item.currencyName} ${item.flag}</li>`; 
      indexC = -1;
      liSelectedC;
    });

    divListC.innerHTML = allItemsC;
  }


}

const buttonConverter = document.getElementById("converter");
var toastHTML;
buttonConverter.addEventListener('click', function(){
  var q = quantity.value;
  var currencyBase = inputText.dataset.currency;
  var currencyTo = inputTextC.dataset.currency;

  if(currencyBase == undefined ){
    toastHTML = `<span>Debes seleccionar ${inputText.dataset.message}</span>`;
    M.toast({html: toastHTML, classes: 'rounded'});
    inputText.focus();
  }else if(q == ''){
    toastHTML = `<span>Debes introducir ${quantity.dataset.message}</span>`;
    M.toast({html: toastHTML, classes: 'rounded'});
    quantity.focus();
  }else if(currencyTo == undefined){
    toastHTML = `<span>Debes seleccionar ${inputTextC.dataset.message}</span>`;
    M.toast({html: toastHTML, classes: 'rounded'});
    inputTextC.focus();
  }else {
    //console.log('Ahora si biene lo chido');
    myFunctions.converter(currencyBase, currencyTo, q);
    crossCoins.classList.remove('hidde');
    crossCoins.classList.add('show');
  }

});

crossCoins.addEventListener('click', function(){
  var currencyBaseC = inputText.dataset.currency;
  var currencyToC = inputTextC.dataset.currency;
  var currencyBaseValue = inputText.value;
  var currencyToValue = inputTextC.value;
  inputText.dataset.currency = currencyToC;
  inputTextC.dataset.currency = currencyBaseC;
  inputText.value = currencyToValue;
  inputTextC.value = currencyBaseValue;
  buttonConverter.click();

});