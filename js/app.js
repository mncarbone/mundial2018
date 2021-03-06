$.fn.template = function(data) {
  return $(this).html().replace(
    /{{(\w*)}}/g,
    function( m, key ){
      return data.hasOwnProperty( key ) ? data[ key ] : "";
    }
  );
}

app = {
  URL_PARTIDOS: 'http://api.football-data.org/v2/competitions/2000/matches',
  URL_PARTIDOS_ORIGINAL: 'http://api.football-data.org/v2/competitions/2000/matches',
  URL_PARTIDOS_ALT: 'https://jsonblob.com/api/jsonBlob/56d529cf-500c-11e8-91fd-9bf4817e5e9d',
  URL_GRUPOS: 'http://api.football-data.org/v2/competitions/2000/standings',
  URL_GRUPOS_ALT: 'https://jsonblob.com/api/jsonBlob/28cefd39-5011-11e8-91fd-cdcf5cb3d77a',
  URL_APUESTAS: 'https://jsonblob.com/api/jsonBlob/1be165fb-6e77-11e8-b3c1-d94a81719b43',
  API_HEADER: 'X-Auth-Token',
  API_TOKEN: '593cdb411dfd49cf8e3f48337f1606a3',
  PUNTOS_POR_RESULTADO: 1,
  PUNTOS_POR_GOLES: 2,
  apuestasFiltradas: false,
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
  getHeaders: function (response) {
    var headers = {}
    headers[this.API_HEADER] = this.API_TOKEN;
    return headers;
  },
  getPartidos: function (response) {
    return response.matches;
  },
  getGrupos: function (response) {
    let posiciones = response.standings.filter(g => g.type == 'TOTAL');
    let grupos = {};
    posiciones.forEach(p=>{
      grupos[p.group.substr(-1)] = p.table;
    });
    return grupos;
  },
  getUsuarios: function (response) {
    return response.usuarios;
  },
  getIdPartido: function (datosApuesta) {
    return (datosApuesta.id_partido == 33)? 33 : ((datosApuesta.id_partido == 34)? 32 : datosApuesta.id_partido - 1);
  },
  getFecha: function (unPartido) {
    return unPartido.utcDate;
  },
  getDia: function (unPartido) {
    var date = new Date(this.getFecha(unPartido));
    var weekday = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    var dia = weekday[date.getDay()];
    return dia + " " + ('0' + date.getDate()).slice(-2)+ '/' +('0' + (date.getMonth() + 1)).slice(-2);
  },
  getHora: function (unPartido) {
    var date = new Date(this.getFecha(unPartido));
    return ('0' + date.getHours()).slice(-2)+ ':' +('0' + date.getMinutes()).slice(-2);
  },
  getLocal: function (unPartido) {
    return unPartido.homeTeam.name;
  },
  getVisitante: function (unPartido) {
    return unPartido.awayTeam.name;
  },
  getGolesLocal: function (unPartido) {
    return (unPartido.score.fullTime.homeTeam === null)? '-' : (
      (unPartido.score.extraTime.homeTeam === null)? unPartido.score.fullTime.homeTeam : unPartido.score.extraTime.homeTeam);
  },
  getGolesVisitante: function (unPartido) {
    return (unPartido.score.fullTime.awayTeam === null)? '-' : (
      (unPartido.score.extraTime.awayTeam === null)? unPartido.score.fullTime.awayTeam : unPartido.score.extraTime.awayTeam);
  },
  getEstado: function(unPartido){
    return (unPartido.status == 'FINISHED')? 'FINALIZADO' : ((unPartido.status == 'IN_PLAY')? 'INICIADO' : 'PENDIENTE');
  },
  getBandera: function(nombre){
    return (nombre)? this.map.flag[nombre.toUpperCase()] : '';
  },
  getCodigo: function(nombre){
    return (nombre && nombre != 'TBD')? app.map.code[this.getBandera(nombre)] : nombre;
  }
}

app.actualizarDatos = function(){
  app.actualizarGrupos(function() {
    app.actualizarPartidos(function() {
      //app.actualizarPosiciones(function() {
        app.actualizarUi()
      //});
    });
  });
}

app.actualizarUi = function(){
  app.mostrarPartidos();
  app.mostrarGrupos();
  app.mostrarPosiciones();
}

app.actualizarPartidos = function (alCargar){
  $.ajax({
    headers: this.getHeaders(),
    url: this.URL_PARTIDOS,
    dataType: 'json',
    type: 'GET',
  }).done(function(response) {
      if(false && response.no_cargar){
        app.URL_PARTIDOS = app.URL_PARTIDOS_ORIGINAL;
        app.actualizarPartidos(alCargar)
        app.URL_PARTIDOS = app.URL_PARTIDOS_ALT;
      }
      else {
          app.cargarDatosPartidos(response);
          alCargar();
      }
  });
}

app.actualizarGrupos = function (alCargar){
  $.ajax({
    headers: this.getHeaders(),
    url: this.URL_GRUPOS,
    dataType: 'json',
    type: 'GET',
  }).done(function(response) {
      app.cargarDatosGrupos(response);
      alCargar();
  });
}

app.actualizarPosiciones = function (alCargar){
  $.ajax({
    headers: this.getHeaders(),
    url: this.URL_APUESTAS,
    dataType: 'json',
    type: 'GET',
  }).done(function(response) {
      app.cargarDatosUsuarios(response);
      alCargar();
  });
}

app.cargarDatosPartidos = function(response){
  var datosPartidos = this.getPartidos(response);
  this.torneo.cargarDatosPartidos(datosPartidos);
}

app.cargarDatosGrupos = function(response){
  var datosGrupos = this.getGrupos(response);
  this.torneo.cargarDatosGrupos(datosGrupos);
}

app.cargarDatosUsuarios = function(response){
  var datosUsuarios = this.getUsuarios(response);
  this.torneo.cargarDatosUsuarios(datosUsuarios);
}

app.filtrarApostadores = function(resultado, idPartido){
  var partido = this.torneo.getPartido(idPartido);
  this.mostrarPosiciones(partido, resultado);
}

app.quitarFiltroApostadores = function(){
  if(this.apuestasFiltradas){
    this.mostrarPosiciones();
  }
}

app.mostrarApuestasDeUsuario = function(idUsuario){
  var usuario = this.torneo.getUsuario(idUsuario);
  $( "#lstapuestas" ).html('');
  app.mostrarEncabezadoApuestas(usuario);
  for(idApuesta in usuario.apuestas) {
    var apuesta = usuario.apuestas[idApuesta];
    this.mostrarApuesta(apuesta);
  }
  $('#lstapuestas').trigger('create');
  $('#lstapuestas').listview().listview('refresh');
}

app.mostrarEncabezadoApuestas = function(usuario){
  $('#lstapuestas').append($('#apuestas template.separador').template({
    nombre: usuario.nombre.replace('&rsquo;', '`').toUpperCase()
  }));
}

app.mostrarApuesta = function(unaApuesta){
  var cls = '';
  var clsFinalizado = unaApuesta.partido.finalizado()? ' finalizado' : '';
  cls = (unaApuesta.aciertoResultado())? ' class="acierto_resultado'+clsFinalizado+'"' : cls;
  cls = (unaApuesta.aciertoGoles())? ' class="acierto_goles'+clsFinalizado+'"' : cls;
  cls = (unaApuesta.noAcierto())? ' class="no_acierto'+clsFinalizado+'"' : cls;
  $('#lstapuestas').append($('#apuestas template.item').template({
        banderaLocal: unaApuesta.partido.getBanderaLocal(),
        local: unaApuesta.partido.getCodigoLocal(),
        golesLocal: unaApuesta.golesLocal,
        banderaVisitante: unaApuesta.partido.getBanderaVisitante(),
        visitante: unaApuesta.partido.getCodigoVisitante(),
        golesVisitante: unaApuesta.golesVisitante,
        puntos: unaApuesta.getPuntos(),
        clase: cls
    })
  );
}

app.mostrarPosiciones = function(partido, resultado){
  this.apuestasFiltradas = partido && resultado;
  var pos = 0;
  $( "#lstposiciones" ).html('');
  if(this.apuestasFiltradas)
    this.mostrarEncabezadoPosicionesFiltradas(partido, resultado);
  else
    this.mostrarEncabezadoPosiciones();
  var usuarios = this.torneo.getUsuariosPorPuntos();
  for(idUsuario in usuarios) {
      pos++;
      usuario = usuarios[idUsuario];
      if(!this.apuestasFiltradas || usuario.apostoPor(partido, resultado)){
          this.mostrarUsuario(pos, usuario, partido);
      }
  };
  $('#lstposiciones').trigger('create');
  $('#lstposiciones').listview().listview('refresh');
}

app.mostrarEncabezadoPosicionesFiltradas = function(partido, resultado){
  $('#lstposiciones').append($('#posiciones template.encabezado').template({
      resultado: (resultado == 'L')? 'GANA' : ((resultado == 'V')? 'PIERDE' : 'EMPATAN'),
      local: partido.getCodigoLocal(),
      banderaLocal: partido.getBanderaLocal(),
      visitante: partido.getCodigoVisitante(),
      banderaVisitante: partido.getBanderaVisitante()
  }));
}

app.mostrarEncabezadoPosiciones = function(){
  $('#lstposiciones').append($('#posiciones template.separador').html());
}

app.mostrarUsuario = function(pos, unUsuario, partido){
  var cls = '';
  cls = (unUsuario.esPrimero())? ' class="primero"' : cls;
  cls = (unUsuario.esSegundo())? ' class="segundo"' : cls;
  cls = (unUsuario.esUltimo())? ' class="ultimo"' : cls;
  $('#lstposiciones').append($('#posiciones template.item').template({
      posicion: pos,
      id: unUsuario.id,
      nombre: unUsuario.nombre,
      puntos: ((partido)? unUsuario.apuestas[partido.id].golesLocal + ' - ' + unUsuario.apuestas[partido.id].golesVisitante + ' | ' : '') + unUsuario.getPuntos(),
      clase:cls
    })
  );
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
      this.mostrarPartido(partido);
  };
  $('#lstpartidos').trigger('create');
  $('#lstpartidos').listview().listview('refresh');
  $(document).scrollTop($("#lstpartidos .finalizado").last().position().top);
}

app.mostrarSeparadorFecha = function(unaFecha){
  $('#lstpartidos').append($('#partidos template.separador').template({
      fecha: unaFecha
    })
  );
}

app.mostrarPartido = function(unPartido){
  var cls = '';
  cls = (unPartido.iniciado())? ' class="iniciado"' : cls;
  cls = (unPartido.finalizado())? ' class="finalizado"' : cls;
  $('#lstpartidos').append($('#partidos template.item').template({
      hora: unPartido.hora,
      id: unPartido.id,
      tl: unPartido.cantApuestasPor('L'),
      te: unPartido.cantApuestasPor('E'),
      tv: unPartido.cantApuestasPor('V'),
      clase: cls,
      banderaLocal: unPartido.getBanderaLocal(),
      local: unPartido.getCodigoLocal(),
      golesLocal: unPartido.getGolesLocal(),
      banderaVisitante: unPartido.getBanderaVisitante(),
      visitante: unPartido.getCodigoVisitante(),
      golesVisitante: unPartido.getGolesVisitante()
    })
  );
}

app.mostrarGrupos = function(){
  $( "#lstgrupos" ).html('');
  var grupos = this.torneo.getGrupos();
  for(idGrupo in grupos) {
      grupo = grupos[idGrupo];
      this.mostrarGrupo(grupo)
  };
  $('#lstgrupos').trigger('create');
  $('#lstgrupos').listview().listview('refresh');
}

app.mostrarGrupo = function(unGrupo){
  this.mostrarSeparadorGrupo(unGrupo.id);
  for(idEquipo in unGrupo.equipos) {
      equipo = unGrupo.equipos[idEquipo];
      this.mostrarEquipo(equipo)
  };
}

app.mostrarSeparadorGrupo = function(idGrupo){
  $('#lstgrupos').append($('#grupos template.separador').template({
      grupo: idGrupo
  }));
}

app.mostrarEquipo = function(unEquipo){
  var cls = '';
  cls = (unEquipo.clasificado())? ' class="clasificado"' : cls;
  $('#lstgrupos').append($('#grupos template.item').template({
    clase: cls,
    posicion: unEquipo.posicion,
    equipo: unEquipo.codigo,
    bandera: unEquipo.bandera,
    puntos: unEquipo.puntos,
    golesAFavor: unEquipo.golesAFavor,
    golesEnContra: unEquipo.golesEnContra,
    diferenciaDeGol: unEquipo.diferenciaDeGol
  }));
}
