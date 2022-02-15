/* formas de validar si existe un service worker
if ("serviceWorker" in navigator) {
  console.log("si existe");
}*/
/*
if (navigator.serviceWorker) {
  console.log("si existe");
}*/
//con la siguiente instruccion se registra el service worker
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("./sw.js");
}
