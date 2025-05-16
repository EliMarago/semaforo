const sequenza = [
  { id: "rosso", durata: 3000 },
  { id: "giallo", durata: 1000 },
  { id: "verde", durata: 2000 },
];
let indice = 0;

function cambiaLuce() {
  //spegni le luci
  document
    .querySelectorAll(".luce")
    .forEach((luce) => luce.classList.remove("acceso"));

  const luceCorrente = sequenza[indice];
  document.getElementById(luceCorrente.id).classList.add("acceso");

  setTimeout(() => {
    indice = (indice + 1) % sequenza.length;
    cambiaLuce();
  }, luceCorrente.durata);
}
cambiaLuce();
