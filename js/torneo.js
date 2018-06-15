Torneo = function() {
  this.idPartido = 0;
  this.partidos = {};
  this.equipos = {};
  this.grupos = {};
  this.usuarios = {};
}

Torneo.prototype.getUsuariosPorPuntos = function(){
  return this.getUsuarios().slice().sort(function(a, b){
    var dif = b.getPuntos() - a.getPuntos();
    if(dif == 0){
      if(a.nombre < b.nombre) return -1;
      if(a.nombre > b.nombre) return 1;
    }
    return dif;
  });
}

Torneo.prototype.getUsuarios = function(){
  return Object.values(this.usuarios);
}

Torneo.prototype.getUsuario = function(idUsuario){
  return this.usuarios[idUsuario];
}

Torneo.prototype.getPartidos = function(){
  return this.partidos;
}

Torneo.prototype.getPartido = function(idPartido){
  return this.partidos[idPartido];
}

Torneo.prototype.getGrupos = function(){
  return this.grupos;
}

Torneo.prototype.cargarDatosPartidos = function(datosPartidos){
  var tot = datosPartidos.length;
  for(var i=0; i < tot; i++){
      datosPartido = datosPartidos[i];
      var partido = new Partido(i, datosPartido, this);
      this.partidos[partido.id] = partido;
  }
}

Torneo.prototype.cargarDatosGrupos = function(datosGrupos){
  for(idGrupo in datosGrupos){
      datosGrupo = datosGrupos[idGrupo];
      var grupo = new Grupo(idGrupo, datosGrupo, this);
      this.grupos[grupo.id] = grupo;
  }
}

Torneo.prototype.setEquipo = function(unEquipo){
  this.equipos[unEquipo.codigo] = unEquipo;
}

Torneo.prototype.getEquipo = function(nombreEquipo){
  return this.equipos[app.getCodigo(nombreEquipo)];
}

Torneo.prototype.cargarDatosUsuarios = function(datosUsuarios){
  for(idUsuario in datosUsuarios){
      datosUsuario = datosUsuarios[idUsuario];
      var usuario = new Usuario(idUsuario, datosUsuario, this);
      this.usuarios[usuario.id] = usuario;
  }
}

Torneo.prototype.cantApuestasPor = function(unPartido, unResultado){
  return this.apuestasPor(unPartido, unResultado).length;
}

Torneo.prototype.apuestasPor = function(unPartido, unResultado){
  return this.getUsuarios().filter(function (usuario) {
    return usuario.apostoPor(unPartido, unResultado);
  })
}

Usuario = function(id, datosUsuario, torneo){
  this.id = id;
  this.nombre = datosUsuario.nombre;
  this.torneo = torneo;
  this.apuestas = {};
  this.cargarDatosApuestas(datosUsuario.apuestas);
}

Usuario.prototype.cargarDatosApuestas = function(datosApuestas){
  for(idApuesta in datosApuestas){
      var datosApuesta = datosApuestas[idApuesta];
      var idPartido = app.getIdPartido(datosApuesta);
      var partido = this.torneo.partidos[idPartido];
      var apuesta = new Apuesta(partido, datosApuesta);
      this.apuestas[idPartido] = apuesta;
  }
}

Usuario.prototype.getApuestas = function(){
  return Object.values(this.apuestas);
}

Usuario.prototype.getPuntos = function(){
  return this.puntosPorApuestas().reduce(function(acum, val){
    return acum + val;
  });
}

Usuario.prototype.apostoPor = function(unPartido, unResultado){
  return unPartido.id in this.apuestas && this.apuestas[unPartido.id].resultado == unResultado;
}

Usuario.prototype.puntosPorApuestas = function(){
  return this.getApuestas().map(function(apuesta) {
    return apuesta.getPuntos();
  });
}

Apuesta = function(partido, datosApuesta){
  this.partido = partido;
  this.resultado = datosApuesta.resultado;
  this.golesLocal = datosApuesta.goles_local;
  this.golesVisitante = datosApuesta.goles_visitante;
}

Apuesta.prototype.getPuntos = function(){
  return this.puntosPorResultado() + this.puntosPorGoles();
}

Apuesta.prototype.puntosPorResultado = function(){
  return (this.resultado == this.partido.resultado())? app.PUNTOS_POR_RESULTADO : 0;
}

Apuesta.prototype.puntosPorGoles = function(){
  return (this.aciertoGoles())? app.PUNTOS_POR_GOLES : 0;
}

Apuesta.prototype.aciertoGoles = function(){
  return this.golesLocal == this.partido.golesLocal && this.golesVisitante == this.partido.golesVisitante;
}

Grupo = function(id, datosGrupo, torneo){
  this.id = id;
  this.torneo = torneo;
  this.equipos = {};
  this.cargarEquipos(datosGrupo);
}

Grupo.prototype.cargarEquipos = function(datosGrupo){
  for(posEquipo in datosGrupo){
      datosEquipo = datosGrupo[posEquipo];
      var equipo = new Equipo(datosEquipo);
      equipo.posicion = 1 * posEquipo + 1;
      this.equipos[posEquipo] = equipo;
      this.torneo.setEquipo(equipo);
  }
}

Partido = function(id, datosPartido, torneo){
  this.id = id;
  this.torneo = torneo;
  this.dia = app.getDia(datosPartido);
  this.hora = app.getHora(datosPartido);
  this.local = this.torneo.getEquipo(app.getLocal(datosPartido));
  this.visitante = this.torneo.getEquipo(app.getVisitante(datosPartido));
  this.golesLocal = app.getGolesLocal(datosPartido);
  this.golesVisitante = app.getGolesVisitante(datosPartido);
}

Partido.prototype.resultado = function(){
  return (this.golesLocal == '-' || this.golesVisitante == '-') ? '-' : (
    (this.golesLocal > this.golesVisitante)? 'L' : ((this.golesVisitante > this.golesLocal)? 'V' : 'E')
  );
}

Partido.prototype.cantApuestasPor = function(unResultado){
  return this.torneo.cantApuestasPor(this, unResultado);
}

Partido.prototype.getBanderaLocal = function(){
  return (this.local)? this.local.bandera : '';
}

Partido.prototype.getBanderaVisitante= function(){
  return (this.visitante)? this.visitante.bandera : '';
}

Partido.prototype.getCodigoLocal = function(){
  return (this.local)? this.local.codigo : '???';
}

Partido.prototype.getCodigoVisitante = function(){
  return (this.visitante)? this.visitante.codigo : '???';
}

Partido.prototype.getGolesLocal = function(){
  return (this.local)? this.golesLocal : '-';
}

Partido.prototype.getGolesVisitante = function(){
  return (this.visitante)? this.golesVisitante : '-';
}

function Equipo(datosEquipo){
  this.nombre = datosEquipo.team;
  this.codigo = app.getCodigo(this.nombre)
  this.bandera = app.getBandera(this.nombre);
  this.puntos = datosEquipo.points;
  this.partidosJugados = datosEquipo.playedGames;
  this.golesAFavor = datosEquipo.goals;
  this.golesEnContra = datosEquipo.goalsAgainst;
  this.diferenciaDeGol = datosEquipo.goalDifference;
}
