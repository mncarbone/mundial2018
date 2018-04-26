app = {
  URL_PARTIDOS: 'http://api.football-data.org/v1/competitions/467/fixtures',
  API_TOKEN: '593cdb411dfd49cf8e3f48337f1606a3'
}

app.actualizarDatos = function (){
  $.ajax({
    headers: { 'X-Auth-Token': this.API_TOKEN },
    url: this.URL_PARTIDOS,
    dataType: 'json',
    type: 'GET',
  }).done(function(response) {
      console.log('Datos cargados de ' + response.count + ' partidos');
  });
}
