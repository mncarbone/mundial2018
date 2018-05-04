app = {
  URL_PARTIDOS: 'http://api.football-data.org/v1/competitions/467/fixtures',
  API_TOKEN: '593cdb411dfd49cf8e3f48337f1606a3',
  map: {
    flag: {
      'ALEMANIA': 'de',
      'ALG': 'dz',
      'ARABIA SAUDITA': 'sa',
      'ARGELIA': 'dz',
      'ARG': 'ar',
      'ARGENTINA': 'ar',
      'AUSTRALIA': 'au',
      'AUS': 'au',
      'BEL': 'be',
      'BELGICA': 'be',
      'BÉLGICA': 'be',
      'BELGIUM': 'be',
      'BIH': 'ba',
      'BOL': 'bo',
      'BOLIVIA': 'bo',
      'BOSNIA-HERZEGOVINA': 'ba',
      'BRA': 'br',
      'BRASIL': 'br',
      'BRAZIL': 'br',
      'CAMERUN': 'cm',
      'CHI': 'cl',
      'CHILE': 'cl',
      'CIV': 'ci',
      'CMR': 'cm',
      'COL': 'co',
      'COLOMBIA': 'co',
      'COREA DEL SUR': 'kr',
      'CRC': 'cr',
      'CRO': 'hr',
      'COSTA DE MARFIL': 'ci',
      'COSTA RICA': 'cr',
      'CROACIA': 'hr',
      'CROATIA': 'hr',
      'DEN': 'dk',
      'DENMARK': 'dk',
      'DINAMARCA': 'dk',
      'ECU': 'ec',
      'ECUADOR': 'ec',
      'EGIPTO': 'eg',
      'EGY': 'eg',
      'EGYPT': 'eg',
      'ENG': 'england',
      'ENGLAND': 'england',
      'ESP': 'es',
      'ESPAÑA': 'es',
      'ESTADOS UNIDOS': 'us',
      'FRA': 'fr',
      'FRANCIA': 'fr',
      'FRANCE': 'fr',
      'GER': 'de',
      'GERMANY': 'de',
      'GHA': 'gh',
      'GHANA': 'gh',
      'GRECIA': 'gr',
      'GRE': 'gr',
      'HON': 'hn',
      'HAI': 'ht',
      'HAITI': 'ht',
      'HAITÍ': 'ht',
      'HOLANDA': 'nl',
      'HONDURAS': 'hn',
      'ICE': 'is',
      'ICELAND': 'is',
      'INGLATERRA': 'england',
      'IRAN': 'ir',
      'IRÁN': 'ir',
      'IRN': 'ir',
      'ISLANDIA': 'is',
      'ITA': 'it',
      'ITALIA': 'it',
      'JAM': 'jm',
      'JAMAICA': 'jm',
      'JAPAN': 'jp',
      'JAPON': 'jp',
      'JAPÓN': 'jp',
      'JPN': 'jp',
      'KOR': 'kr',
      'KOREA REPUBLIC': 'kr',
      'MARRUECOS': 'ma',
      'MOR': 'ma',
      'MOROCCO': 'ma',
      'MEX': 'mx',
      'MEXICO': 'mx',
      'MÉXICO': 'mx',
      'NED': 'nl',
      'NGA': 'ng',
      'NIGERIA': 'ng',
      'PAN': 'pa',
      'PANAMA': 'pa',
      'PANAMÁ': 'pa',
      'PAR': 'py',
      'PARAGUAY': 'py',
      'PER': 'pe',
      'PERU': 'pe',
      'PERÚ': 'pe',
      'POL': 'pl',
      'POLONIA': 'pl',
      'POLAND': 'pl',
      'POR': 'pt',
      'PORTUGAL': 'pt',
      'REPUBLICA DE COREA': 'kr',
      'RUS': 'ru',
      'RUSIA': 'ru',
      'RUSSIA': 'ru',
      'SAUDI ARABIA': 'sa',
      'SAU': 'sa',
      'SEN': 'sn',
      'SENEGAL': 'sn',
      'SER': 'si',
      'SERBIA': 'si',
      'SPAIN': 'es',
      'SUI': 'ch',
      'SUIZA': 'ch',
      'SUE': 'se',
      'SUECIA': 'se',
      'SWEDEN': 'se',
      'SWITZERLAND': 'ch',
      'TUN': 'tn',
      'TUNEZ': 'tn',
      'TÚNEZ': 'tn',
      'TUNISIA': 'tn',
      'URU': 'uy',
      'URUGUAY': 'uy',
      'USA': 'us',
      'VENEZUELA': 've'
    },
    code:{
        'de': 'GER',
        'dz': 'ALG',
        'sa': 'SAU',
        'ar': 'ARG',
        'au': 'AUS',
        'be': 'BEL',
        'ba': 'BIH',
        'bo': 'BOL',
        'br': 'BRA',
        'cm': 'CMR',
        'cl': 'CHI',
        'ci': 'CIV',
        'co': 'COL',
        'kr': 'KOR',
        'cr': 'CRC',
        'hr': 'CRO',
        'dk': 'DEN'    ,
        'ec': 'ECU',
        'eg': 'EGY',
        'england': 'ENG',
        'es': 'ESP',
        'us': 'USA',
        'fr': 'FRA',
        'gh': 'GHA',
        'gr': 'GRE',
        'hn': 'HON',
        'ht': 'HAI',
        'nl': 'NED',
        'is': 'ICE',
        'ir': 'IRN',
        'it': 'ITA',
        'jm': 'JAM',
        'jp': 'JPN',
        'ma': 'MOR',
        'mx': 'MEX',
        'ng': 'NGA',
        'pa': 'PAN',
        'py': 'PAR',
        'pe': 'PER',
        'pl': 'POL',
        'pt': 'POR',
        'ru': 'RUS',
        'sn': 'SEN',
        'si': 'SER',
        'ch': 'SUI',
        'se': 'SUE',
        'tn': 'TUN',
        'uy': 'URU',
        've': 'VEN'
    }
  },
  getPartidos: function (response) {
    return response.fixtures;
  },
  getFecha: function (unPartido) {
    return unPartido.date;
  },
  getDia: function (unPartido) {
    var date = new Date(this.getFecha(unPartido));
    return ('0' + date.getDate()).slice(-2)+ '/' +('0' + (date.getMonth() + 1)).slice(-2);
  },
  getHora: function (unPartido) {
    var date = new Date(this.getFecha(unPartido));
    return ('0' + date.getHours()).slice(-2)+ ':' +('0' + date.getMinutes()).slice(-2);
  },
  getLocal: function (unPartido) {
    return unPartido.homeTeamName;
  },
  getVisitante: function (unPartido) {
    return unPartido.awayTeamName;
  },
  getGolesLocal: function (unPartido) {
    return (unPartido.result.goalsHomeTeam)? unPartido.result.goalsHomeTeam : '-';
  },
  getGolesVisitante: function (unPartido) {
    return (unPartido.result.goalsAwayTeam)? unPartido.result.goalsAwayTeam : '-';
  },
  getBandera: function(nombre){
    return this.map.flag[nombre.toUpperCase()];;
  },
  getCodigo: function(nombre){
    return (nombre && nombre != 'TBD')? app.map.code[this.getBandera(nombre)] : '???';
  }
}

app.actualizarDatos = function (){
  $.ajax({
    headers: { 'X-Auth-Token': this.API_TOKEN },
    url: this.URL_PARTIDOS,
    dataType: 'json',
    type: 'GET',
  }).done(function(response) {
      app.cargarDatos(response);
  });
}

app.cargarDatos = function(response){
  var datosPartidos = this.getPartidos(response);
  this.torneo = new Torneo();
  this.torneo.cargarDatosPartidos(datosPartidos);
  this.mostrarPartidos();
}

app.mostrarPartidos = function(){
  $( "#lstpartidos" ).html('');
  var partidos = this.torneo.getPartidos();
  var ultimaFecha = '';
  for(idPartido in partidos) {
      partido = partidos[idPartido];
      if(partido.dia != ultimaFecha){
          this.mostrarSeparadorFecha(partido.dia);
          ultimaFecha = partido.dia;
      }
      this.mostrarPartido(partido)
  };
  $('#lstpartidos').trigger('create');
  $('#lstpartidos').listview('refresh');
}

app.mostrarSeparadorFecha = function(unaFecha){
  var txtLEV = '<span class="ui-li-count" style="color:gray;"> L | E | V </span>';
  $('#lstpartidos').append($('<li data-role="list-divider" >'+unaFecha+txtLEV+'</li>'));
}

app.mostrarPartido = function(unPartido){
  var txt = '<small>'+unPartido.hora+'</small>&nbsp;&nbsp;';
  txt += this.partidoHTML(unPartido);
  var tl = unPartido.cantApuestasPor('L');
  var te = unPartido.cantApuestasPor('E');
  var tv = unPartido.cantApuestasPor('V');
  txtApuestas = '<a href="#posiciones" onclick="filtrarApostadores(1,'+unPartido.id+')">&nbsp;'+tl+'&nbsp;</a> | ';
  txtApuestas+= '<a href="#posiciones" onclick="filtrarApostadores(0,'+unPartido.id+')">&nbsp;'+te+'&nbsp;</a> | ';
  txtApuestas+= '<a href="#posiciones" onclick="filtrarApostadores(-1,'+unPartido.id+')">&nbsp;'+tv+'&nbsp;</a>';
  txt += '<span class="ui-li-count">'+txtApuestas+'</span>';
  $('#lstpartidos').append($('<li><div>'+txt+'</div></li>'));
}

app.partidoHTML = function(unPartido){
  var txt = '';
  txt += '<img src="img/blank.gif" class="flag flag-'+unPartido.local.bandera+'"> ';
  txt += unPartido.local.codigo;
  txt += ' <big>' + unPartido.golesLocal + '</big> ';
  txt += ' : ';
  txt += ' <big>' + unPartido.golesVisitante + '</big> ';
  txt += unPartido.visitante.codigo;
  txt += ' <img src="img/blank.gif" class="flag flag-'+unPartido.visitante.bandera+'">';
  return txt;
}

//------------------

Torneo = function() {
  this.idPartido = 0;
  this.partidos = {};
}

Torneo.prototype.getPartidos = function(){
  return this.partidos;
}

Torneo.prototype.getId = function(){
  return this.idPartido++;
}

Torneo.prototype.cargarDatosPartidos = function(datosPartidos){
  var tot = datosPartidos.length;
  for(var i=0; i < tot; i++){
      datosPartido = datosPartidos[i];
      var partido = new Partido(this.getId(), datosPartido);
      this.partidos[partido.id] = partido;
  }
}

Partido = function(id, datosPartido){
  this.id = id;
  this.dia = app.getDia(datosPartido);
  this.hora = app.getHora(datosPartido);
  this.local = new Equipo(app.getLocal(datosPartido));
  this.visitante = new Equipo(app.getVisitante(datosPartido));
  this.golesLocal = app.getGolesLocal(datosPartido);
  this.golesVisitante = app.getGolesVisitante(datosPartido);
}

Partido.prototype.cantApuestasPor = function(unResultado){
  return 0;
}

function Equipo(unNombre){
  this.codigo = app.getCodigo(unNombre)
  this.bandera = app.getBandera(unNombre);
}
