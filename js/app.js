app = {
  URL_PARTIDOS: 'http://api.football-data.org/v1/competitions/467/fixtures',
  URL_GRUPOS: 'http://api.football-data.org/v1/competitions/467/leagueTable',
  API_HEADER: 'X-Auth-Token',
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
  getGrupos: function (response) {
    return response.standings;
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
    return (nombre)? this.map.flag[nombre.toUpperCase()] : '';
  },
  getCodigo: function(nombre){
    return (nombre && nombre != 'TBD')? app.map.code[this.getBandera(nombre)] : '???';
  },
  default:{
    partidos:{"_links":{"self":{"href":"http://api.football-data.org/v1/competitions/467/fixtures"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"}},"count":64,"fixtures":[{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165069"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/808"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/801"}},"date":"2018-06-14T15:00:00Z","status":"TIMED","matchday":1,"homeTeamName":"Russia","awayTeamName":"Saudi Arabia","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165084"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/825"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/758"}},"date":"2018-06-15T12:00:00Z","status":"TIMED","matchday":1,"homeTeamName":"Egypt","awayTeamName":"Uruguay","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165083"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/815"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/840"}},"date":"2018-06-15T15:00:00Z","status":"TIMED","matchday":1,"homeTeamName":"Morocco","awayTeamName":"Iran","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165076"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/765"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/760"}},"date":"2018-06-15T18:00:00Z","status":"TIMED","matchday":1,"homeTeamName":"Portugal","awayTeamName":"Spain","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165072"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/773"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/779"}},"date":"2018-06-16T10:00:00Z","status":"TIMED","matchday":1,"homeTeamName":"France","awayTeamName":"Australia","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165073"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/762"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/1066"}},"date":"2018-06-16T13:00:00Z","status":"TIMED","matchday":1,"homeTeamName":"Argentina","awayTeamName":"Iceland","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165071"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/832"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/782"}},"date":"2018-06-16T16:00:00Z","status":"TIMED","matchday":1,"homeTeamName":"Peru","awayTeamName":"Denmark","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165074"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/799"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/776"}},"date":"2018-06-16T19:00:00Z","status":"TIMED","matchday":1,"homeTeamName":"Croatia","awayTeamName":"Nigeria","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165075"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/793"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/780"}},"date":"2018-06-17T12:00:00Z","status":"TIMED","matchday":1,"homeTeamName":"Costa Rica","awayTeamName":"Serbia","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165082"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/759"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/769"}},"date":"2018-06-17T15:00:00Z","status":"TIMED","matchday":1,"homeTeamName":"Germany","awayTeamName":"Mexico","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165070"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/764"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/788"}},"date":"2018-06-17T18:00:00Z","status":"TIMED","matchday":1,"homeTeamName":"Brazil","awayTeamName":"Switzerland","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165081"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/792"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/772"}},"date":"2018-06-18T12:00:00Z","status":"TIMED","matchday":1,"homeTeamName":"Sweden","awayTeamName":"Korea Republic","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165077"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/805"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/1836"}},"date":"2018-06-18T15:00:00Z","status":"TIMED","matchday":1,"homeTeamName":"Belgium","awayTeamName":"Panama","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165078"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/802"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/770"}},"date":"2018-06-18T18:00:00Z","status":"TIMED","matchday":1,"homeTeamName":"Tunisia","awayTeamName":"England","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165079"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/794"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/804"}},"date":"2018-06-19T12:00:00Z","status":"TIMED","matchday":1,"homeTeamName":"Poland","awayTeamName":"Senegal","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165080"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/818"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/766"}},"date":"2018-06-19T15:00:00Z","status":"TIMED","matchday":1,"homeTeamName":"Colombia","awayTeamName":"Japan","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165100"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/808"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/825"}},"date":"2018-06-19T18:00:00Z","status":"TIMED","matchday":2,"homeTeamName":"Russia","awayTeamName":"Egypt","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165087"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/765"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/815"}},"date":"2018-06-20T12:00:00Z","status":"TIMED","matchday":2,"homeTeamName":"Portugal","awayTeamName":"Morocco","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165086"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/758"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/801"}},"date":"2018-06-20T15:00:00Z","status":"TIMED","matchday":2,"homeTeamName":"Uruguay","awayTeamName":"Saudi Arabia","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165085"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/840"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/760"}},"date":"2018-06-20T18:00:00Z","status":"TIMED","matchday":2,"homeTeamName":"Iran","awayTeamName":"Spain","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165096"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/773"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/832"}},"date":"2018-06-21T12:00:00Z","status":"TIMED","matchday":2,"homeTeamName":"France","awayTeamName":"Peru","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165099"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/782"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/779"}},"date":"2018-06-21T15:00:00Z","status":"TIMED","matchday":2,"homeTeamName":"Denmark","awayTeamName":"Australia","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165094"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/762"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/799"}},"date":"2018-06-21T18:00:00Z","status":"TIMED","matchday":2,"homeTeamName":"Argentina","awayTeamName":"Croatia","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165092"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/764"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/793"}},"date":"2018-06-22T12:00:00Z","status":"TIMED","matchday":2,"homeTeamName":"Brazil","awayTeamName":"Costa Rica","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165098"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/776"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/1066"}},"date":"2018-06-22T15:00:00Z","status":"TIMED","matchday":2,"homeTeamName":"Nigeria","awayTeamName":"Iceland","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165091"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/780"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/788"}},"date":"2018-06-22T18:00:00Z","status":"TIMED","matchday":2,"homeTeamName":"Serbia","awayTeamName":"Switzerland","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165088"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/805"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/802"}},"date":"2018-06-23T12:00:00Z","status":"TIMED","matchday":2,"homeTeamName":"Belgium","awayTeamName":"Tunisia","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165090"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/759"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/792"}},"date":"2018-06-23T15:00:00Z","status":"TIMED","matchday":2,"homeTeamName":"Germany","awayTeamName":"Sweden","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165089"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/772"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/769"}},"date":"2018-06-23T18:00:00Z","status":"TIMED","matchday":2,"homeTeamName":"Korea Republic","awayTeamName":"Mexico","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165093"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/770"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/1836"}},"date":"2018-06-24T12:00:00Z","status":"TIMED","matchday":2,"homeTeamName":"England","awayTeamName":"Panama","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165095"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/766"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/804"}},"date":"2018-06-24T15:00:00Z","status":"TIMED","matchday":2,"homeTeamName":"Japan","awayTeamName":"Senegal","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165097"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/794"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/818"}},"date":"2018-06-24T18:00:00Z","status":"TIMED","matchday":2,"homeTeamName":"Poland","awayTeamName":"Colombia","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165111"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/801"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/825"}},"date":"2018-06-25T14:00:00Z","status":"TIMED","matchday":3,"homeTeamName":"Saudi Arabia","awayTeamName":"Egypt","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165101"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/758"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/808"}},"date":"2018-06-25T14:00:00Z","status":"TIMED","matchday":3,"homeTeamName":"Uruguay","awayTeamName":"Russia","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165112"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/840"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/765"}},"date":"2018-06-25T18:00:00Z","status":"TIMED","matchday":3,"homeTeamName":"Iran","awayTeamName":"Portugal","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165109"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/760"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/815"}},"date":"2018-06-25T18:00:00Z","status":"TIMED","matchday":3,"homeTeamName":"Spain","awayTeamName":"Morocco","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165113"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/782"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/773"}},"date":"2018-06-26T14:00:00Z","status":"TIMED","matchday":3,"homeTeamName":"Denmark","awayTeamName":"France","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165107"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/779"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/832"}},"date":"2018-06-26T14:00:00Z","status":"TIMED","matchday":3,"homeTeamName":"Australia","awayTeamName":"Peru","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165115"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/776"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/762"}},"date":"2018-06-26T18:00:00Z","status":"TIMED","matchday":3,"homeTeamName":"Nigeria","awayTeamName":"Argentina","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165114"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/1066"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/799"}},"date":"2018-06-26T18:00:00Z","status":"TIMED","matchday":3,"homeTeamName":"Iceland","awayTeamName":"Croatia","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165102"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/769"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/792"}},"date":"2018-06-27T14:00:00Z","status":"TIMED","matchday":3,"homeTeamName":"Mexico","awayTeamName":"Sweden","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165106"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/772"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/759"}},"date":"2018-06-27T14:00:00Z","status":"TIMED","matchday":3,"homeTeamName":"Korea Republic","awayTeamName":"Germany","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165116"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/780"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/764"}},"date":"2018-06-27T18:00:00Z","status":"TIMED","matchday":3,"homeTeamName":"Serbia","awayTeamName":"Brazil","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165108"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/788"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/793"}},"date":"2018-06-27T18:00:00Z","status":"TIMED","matchday":3,"homeTeamName":"Switzerland","awayTeamName":"Costa Rica","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165104"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/766"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/794"}},"date":"2018-06-28T14:00:00Z","status":"TIMED","matchday":3,"homeTeamName":"Japan","awayTeamName":"Poland","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165103"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/804"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/818"}},"date":"2018-06-28T14:00:00Z","status":"TIMED","matchday":3,"homeTeamName":"Senegal","awayTeamName":"Colombia","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165110"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/1836"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/802"}},"date":"2018-06-28T18:00:00Z","status":"TIMED","matchday":3,"homeTeamName":"Panama","awayTeamName":"Tunisia","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165105"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/770"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/805"}},"date":"2018-06-28T18:00:00Z","status":"TIMED","matchday":3,"homeTeamName":"England","awayTeamName":"Belgium","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165119"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/757"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/757"}},"date":"2018-06-30T14:00:00Z","status":"SCHEDULED","matchday":4,"homeTeamName":"","awayTeamName":"","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165123"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/757"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/757"}},"date":"2018-06-30T18:00:00Z","status":"SCHEDULED","matchday":4,"homeTeamName":"","awayTeamName":"","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165122"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/757"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/757"}},"date":"2018-07-01T14:00:00Z","status":"SCHEDULED","matchday":4,"homeTeamName":"","awayTeamName":"","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165121"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/757"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/757"}},"date":"2018-07-01T18:00:00Z","status":"SCHEDULED","matchday":4,"homeTeamName":"","awayTeamName":"","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165118"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/757"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/757"}},"date":"2018-07-02T14:00:00Z","status":"SCHEDULED","matchday":4,"homeTeamName":"","awayTeamName":"","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165120"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/757"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/757"}},"date":"2018-07-02T18:00:00Z","status":"SCHEDULED","matchday":4,"homeTeamName":"","awayTeamName":"","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165117"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/757"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/757"}},"date":"2018-07-03T14:00:00Z","status":"SCHEDULED","matchday":4,"homeTeamName":"","awayTeamName":"","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165124"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/757"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/757"}},"date":"2018-07-03T18:00:00Z","status":"SCHEDULED","matchday":4,"homeTeamName":"","awayTeamName":"","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165127"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/757"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/757"}},"date":"2018-07-06T14:00:00Z","status":"SCHEDULED","matchday":5,"homeTeamName":"","awayTeamName":"","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165126"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/757"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/757"}},"date":"2018-07-06T18:00:00Z","status":"SCHEDULED","matchday":5,"homeTeamName":"","awayTeamName":"","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165125"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/757"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/757"}},"date":"2018-07-07T14:00:00Z","status":"SCHEDULED","matchday":5,"homeTeamName":"","awayTeamName":"","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165128"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/757"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/757"}},"date":"2018-07-07T18:00:00Z","status":"SCHEDULED","matchday":5,"homeTeamName":"","awayTeamName":"","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165130"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/757"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/757"}},"date":"2018-07-10T18:00:00Z","status":"SCHEDULED","matchday":6,"homeTeamName":"","awayTeamName":"","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165129"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/757"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/757"}},"date":"2018-07-11T18:00:00Z","status":"SCHEDULED","matchday":6,"homeTeamName":"","awayTeamName":"","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165131"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/757"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/757"}},"date":"2018-07-14T14:00:00Z","status":"SCHEDULED","matchday":7,"homeTeamName":"","awayTeamName":"","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null},{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/165132"},"competition":{"href":"http://api.football-data.org/v1/competitions/467"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/757"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/757"}},"date":"2018-07-15T15:00:00Z","status":"SCHEDULED","matchday":8,"homeTeamName":"","awayTeamName":"","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null}]}
    ,
    grupos:{"leagueCaption":"World Cup 2018 Russia","matchday":1,"standings":{"A":[{"group":"A","rank":0,"team":"Russia","teamId":808,"playedGames":0,"crestURI":"https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"A","rank":0,"team":"Saudi Arabia","teamId":801,"playedGames":0,"crestURI":"","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"A","rank":0,"team":"Egypt","teamId":825,"playedGames":0,"crestURI":"","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"A","rank":0,"team":"Uruguay","teamId":758,"playedGames":0,"crestURI":"","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0}],"B":[{"group":"B","rank":0,"team":"Morocco","teamId":815,"playedGames":0,"crestURI":"","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"B","rank":0,"team":"Iran","teamId":840,"playedGames":0,"crestURI":null,"points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"B","rank":0,"team":"Portugal","teamId":765,"playedGames":0,"crestURI":"https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"B","rank":0,"team":"Spain","teamId":760,"playedGames":0,"crestURI":"https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0}],"C":[{"group":"C","rank":0,"team":"France","teamId":773,"playedGames":0,"crestURI":"https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"C","rank":0,"team":"Australia","teamId":779,"playedGames":0,"crestURI":"","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"C","rank":0,"team":"Peru","teamId":832,"playedGames":0,"crestURI":null,"points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"C","rank":0,"team":"Denmark","teamId":782,"playedGames":0,"crestURI":"","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0}],"D":[{"group":"D","rank":0,"team":"Argentina","teamId":762,"playedGames":0,"crestURI":"","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"D","rank":0,"team":"Iceland","teamId":1066,"playedGames":0,"crestURI":"https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"D","rank":0,"team":"Croatia","teamId":799,"playedGames":0,"crestURI":"https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"D","rank":0,"team":"Nigeria","teamId":776,"playedGames":0,"crestURI":"","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0}],"E":[{"group":"E","rank":0,"team":"Costa Rica","teamId":793,"playedGames":0,"crestURI":"","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"E","rank":0,"team":"Serbia","teamId":780,"playedGames":0,"crestURI":"","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"E","rank":0,"team":"Brazil","teamId":764,"playedGames":0,"crestURI":"","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"E","rank":0,"team":"Switzerland","teamId":788,"playedGames":0,"crestURI":"https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0}],"F":[{"group":"F","rank":0,"team":"Germany","teamId":759,"playedGames":0,"crestURI":"https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"F","rank":0,"team":"Mexico","teamId":769,"playedGames":0,"crestURI":"","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"F","rank":0,"team":"Sweden","teamId":792,"playedGames":0,"crestURI":"https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"F","rank":0,"team":"Korea Republic","teamId":772,"playedGames":0,"crestURI":"","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0}],"G":[{"group":"G","rank":0,"team":"Belgium","teamId":805,"playedGames":0,"crestURI":"https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"G","rank":0,"team":"Panama","teamId":1836,"playedGames":0,"crestURI":null,"points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"G","rank":0,"team":"Tunisia","teamId":802,"playedGames":0,"crestURI":"","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"G","rank":0,"team":"England","teamId":770,"playedGames":0,"crestURI":"https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0}],"H":[{"group":"H","rank":0,"team":"Poland","teamId":794,"playedGames":0,"crestURI":"https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"H","rank":0,"team":"Senegal","teamId":804,"playedGames":0,"crestURI":"","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"H","rank":0,"team":"Colombia","teamId":818,"playedGames":0,"crestURI":"","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0},{"group":"H","rank":0,"team":"Japan","teamId":766,"playedGames":0,"crestURI":"","points":0,"goals":0,"goalsAgainst":0,"goalDifference":0}]}}

  }
}

function ajax_get(url, header, callback) {
  var oReq = new XMLHttpRequest();
  oReq.onload = function (e) {
      callback(e.target.response);
  };
  oReq.open('GET', url, true);
  oReq.setRequestHeader(header.key, header.token);
  oReq.responseType = 'json';
  oReq.send();
}

app.actualizarDatos = function (){
  /*
  $.ajax({
    headers: { 'X-Auth-Token': this.API_TOKEN },
    url: this.URL_PARTIDOS,
    dataType: 'json',
    type: 'GET',
  }).done(function(response) {
      app.cargarDatosPartidos(response);
  });

  $.ajax({
    headers: { 'X-Auth-Token': this.API_TOKEN },
    url: this.URL_GRUPOS,
    dataType: 'json',
    type: 'GET',
  }).done(function(response) {
      app.cargarDatosGrupos(response);
  });
  */

  ajax_get(this.URL_PARTIDOS, {key: this.API_HEADER, token:this.API_TOKEN}, function(response) {
      app.cargarDatosPartidos(response);
  })

  ajax_get(this.URL_GRUPOS, {key: this.API_HEADER, token:this.API_TOKEN}, function(response) {
      app.cargarDatosGrupos(response);
  })

  //app.cargarDatosPartidos(app.default.partidos);
  //app.cargarDatosGrupos(app.default.grupos);
}

app.cargarDatosPartidos = function(response){
  var datosPartidos = this.getPartidos(response);
  this.torneo = new Torneo();
  this.torneo.cargarDatosPartidos(datosPartidos);
  this.mostrarPartidos();
}

app.cargarDatosGrupos = function(response){
  var datosGrupos = this.getGrupos(response);
  this.torneo = new Torneo();
  this.torneo.cargarDatosGrupos(datosGrupos);
  this.mostrarGrupos();
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

app.mostrarGrupos = function(){
  $( "#lstgrupos" ).html('');
  var grupos = this.torneo.getGrupos();
  for(idGrupo in grupos) {
      grupo = grupos[idGrupo];
      this.mostrarGrupo(grupo)
  };
  $('#lstgrupos').trigger('create');
  $('#lstgrupos').listview('refresh');
}

app.mostrarGrupo = function(unGrupo){
  this.mostrarSeparadorGrupo(unGrupo.id);
  for(idEquipo in unGrupo.equipos) {
      equipo = unGrupo.equipos[idEquipo];
      this.mostrarEquipo(equipo)
  };
}

app.mostrarSeparadorGrupo = function(idGrupo){
  $('#lstgrupos').append($('<li data-role="list-divider" >GRUPO '+idGrupo+'</li>'));
}

app.mostrarEquipo = function(unEquipo){
  var txt = '<small>'+unEquipo.posicion+'</small>&nbsp;&nbsp;';
  txt += this.equipoHTML(unEquipo);
  txt += '<span class="ui-li-count">'+unEquipo.puntos+'</span>';
  $('#lstgrupos').append($('<li><div>'+txt+'</div></li>'));
}

app.equipoHTML = function(unEquipo){
  var txt = '';
  txt += '<img src="img/blank.gif" class="flag flag-'+unEquipo.bandera+'"> ';
  txt += unEquipo.codigo;
  return txt;
}
//------------------

Torneo = function() {
  this.idPartido = 0;
  this.partidos = {};
  this.grupos = {};
}

Torneo.prototype.getPartidos = function(){
  return this.partidos;
}

Torneo.prototype.getGrupos = function(){
  return this.grupos;
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


Torneo.prototype.cargarDatosGrupos = function(datosGrupos){
  for(idGrupo in datosGrupos){
      datosGrupo = datosGrupos[idGrupo];
      var grupo = new Grupo(idGrupo, datosGrupo);
      this.grupos[grupo.id] = grupo;
  }
}

Grupo = function(id, datosGrupo){
  this.id = id;
  this.equipos = {};
  this.cargarEquipos(datosGrupo);
}

Grupo.prototype.cargarEquipos = function(datosGrupo){
  for(posEquipo in datosGrupo){
      datosEquipo = datosGrupo[posEquipo];
      var equipo = new Equipo(datosEquipo.team);
      equipo.posicion = 1 * posEquipo + 1;
      equipo.puntos = datosEquipo.points;
      this.equipos[posEquipo] = equipo;
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
