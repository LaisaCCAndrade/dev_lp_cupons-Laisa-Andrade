function criandoCards(objeto) {
  let areaAdega = document.createElement("div");
  areaAdega.classList.add("areaAdega");

  let adega = document.createElement("div");
  adega.classList.add("adega");

  let img = document.createElement("img");

  let dadosCp = document.createElement("div");
  dadosCp.classList.add("dadosCp");

  let dados = document.createElement("h4");
  dados.classList.add("dados");

  let desconto = document.createElement("p");
  desconto.classList.add("desconto");

  let cupomValor = document.createElement("div");
  cupomValor.classList.add("cupomValor");

  let campoCupomAdega = document.createElement("input");
  campoCupomAdega.classList.add("campoCupomAdega");
  campoCupomAdega.id = "cupons";

  let btnCopiar = document.createElement("button");
  btnCopiar.classList.add("btnCopiar");
  btnCopiar.id = "btnCopiar";

  let cupomApp = document.createElement("div");
  cupomApp.classList.add("cupomApp");

  let span = document.createElement("span");

  let strong = document.createElement("strong");

  let btnsCupons = document.createElement("div");
  btnsCupons.classList.add("btnsCupons");

  let zap = document.createElement("a");
  zap.id = zap;

  let btnCompartilhar = document.createElement("button");
  btnCompartilhar.classList.add("btnCompartilhar");

  let site = document.createElement("a");

  let acessarCategoria = document.createElement("button");
  acessarCategoria.classList.add("acessarCategoria");

  img.src = objeto.img;
  dados.innerText = objeto.descricao;
  desconto.innerText = objeto.cupom;
  campoCupomAdega.placeholder = objeto.valorCupom;
  btnCopiar.innerText = objeto.botao;
  span.innerText = objeto.cupomApp;
  strong.innerText = objeto.appCupom;
  zap.href = objeto.zap;
  site.href = objeto.acessar;
  acessarCategoria.innerText = "Acessar categoria"

  adega.append(img);
  cupomValor.append(campoCupomAdega, btnCopiar);
  span.append(strong);
  cupomApp.append(span);
  dadosCp.append(dados, desconto, cupomValor, cupomApp, btnsCupons);
  zap.append(btnCompartilhar);
  site.append(acessarCategoria);
  btnsCupons.append(zap, site);
  areaAdega.append(adega, dadosCp);

  return areaAdega;
}

function inserindoBanners(banner) {
  let banners = document.querySelector(".todosCupons");

  for (let i = 0; i < banner.length; i++) {
    banners.append(criandoCards(banner[i]));
  }
}
inserindoBanners(cuponBanner);

function criandoProdutos(objeto) {
  let cuponsDesc = document.createElement("div");
  cuponsDesc.classList.add("cuponsDesc");

  let cupomOrganizadores = document.createElement("div");
  cupomOrganizadores.classList.add("cupomOrganizadores");

  let img = document.createElement("img");

  let dadosCp = document.createElement("div");
  dadosCp.classList.add("dadosCp");

  let dados = document.createElement("h4");
  dados.classList.add("dados");

  let desconto = document.createElement("p");
  desconto.classList.add("desconto");

  let cupomValor = document.createElement("div");
  cupomValor.classList.add("cupomValor");

  let campoCupom = document.createElement("input");
  campoCupom.classList.add("campoCupom");

  let btnCopiar = document.createElement("button");
  btnCopiar.classList.add("btnCopiar");

  let cupomApp = document.createElement("div");
  cupomApp.classList.add("cupomApp");

  let span = document.createElement("span");

  let strong = document.createElement("strong");

  let btnsCupons = document.createElement("div");
  btnsCupons.classList.add("btnsCupons");

  let zap = document.createElement("a");
  zap.id = zap;

  let btnCompartilhar = document.createElement("button");
  btnCompartilhar.classList.add("btnCompartilhar");

  let site = document.createElement("a");

  let acessarCategoria = document.createElement("button");
  acessarCategoria.classList.add("acessarCategoria");

  img.src = objeto.img;
  dados.innerText = objeto.descricao;
  desconto.innerText = objeto.cupom;
  campoCupom.placeholder = objeto.valorCupom;
  btnCopiar.innerText = objeto.botao;
  span.innerText = objeto.cupomApp;
  strong.innerText = objeto.appCupom;
  zap.href = objeto.zap;
  site.href = objeto.acessar;
  acessarCategoria.innerText = "Acessar categoria"

  cupomOrganizadores.append(img);
  cupomValor.append(campoCupom, btnCopiar);
  span.append(strong);
  cupomApp.append(span);
  dadosCp.append(dados, desconto, cupomValor, cupomApp, btnsCupons);
  zap.append(btnCompartilhar);
  site.append(acessarCategoria);
  btnsCupons.append(zap, site);
  cuponsDesc.append(cupomOrganizadores, dadosCp);

  return cuponsDesc;
}

function inserindoCupons(banner) {
  let cupons = document.querySelector(".todosCupons");

  for (let i = 0; i < banner.length; i++) {
    cupons.append(criandoProdutos(banner[i]));
  }
}
inserindoCupons(cupons);

function criandoFooter(objeto) {
  let areaAdega = document.createElement("div");
  areaAdega.classList.add("areaAdega");

  let adega = document.createElement("div");
  adega.classList.add("adega");

  let img = document.createElement("img");

  let dadosCp = document.createElement("div");
  dadosCp.classList.add("dadosCp");

  let dados = document.createElement("h4");
  dados.classList.add("dados");

  let desconto = document.createElement("p");
  desconto.classList.add("desconto");

  let cupomValor = document.createElement("div");
  cupomValor.classList.add("cupomValor");

  let campoCupomAdega = document.createElement("input");
  campoCupomAdega.classList.add("campoCupomAdega");
  //   campoCupomAdega.id = "cupons";

  let btnCopiar = document.createElement("button");
  btnCopiar.classList.add("btnCopiar");
  //   btnCopiar.id = "btnCopiar";

  let cupomApp = document.createElement("div");
  cupomApp.classList.add("cupomApp");

  let span = document.createElement("span");

  let strong = document.createElement("strong");

  let btnsCupons = document.createElement("div");
  btnsCupons.classList.add("btnsCupons");

  let zap = document.createElement("a");
  zap.id = zap;

  let btnCompartilhar = document.createElement("button");
  btnCompartilhar.classList.add("btnCompartilhar");

  let site = document.createElement("a");

  let acessarCategoria = document.createElement("button");
  acessarCategoria.classList.add("acessarCategoria");

  img.src = objeto.img;
  dados.innerText = objeto.descricao;
  desconto.innerText = objeto.cupom;
  campoCupomAdega.placeholder = objeto.valorCupom;
  btnCopiar.innerText = objeto.botao;
  span.innerText = objeto.cupomApp;
  strong.innerText = objeto.appCupom;
  zap.href = objeto.zap;
  site.href = objeto.acessar;
  acessarCategoria.innerText = "Acessar categoria"

  adega.append(img);
  cupomValor.append(campoCupomAdega, btnCopiar);
  span.append(strong);
  cupomApp.append(span);
  dadosCp.append(dados, desconto, cupomValor, cupomApp, btnsCupons);
  zap.append(btnCompartilhar);
  site.append(acessarCategoria);
  btnsCupons.append(zap, site);
  areaAdega.append(adega, dadosCp);

  return areaAdega;
}

function inserindoFooter(banner) {
  let cupons = document.querySelector(".todosCupons");

  for (let i = 0; i < banner.length; i++) {
    cupons.append(criandoFooter(banner[i]));
  }
}
inserindoFooter(footer);

var btnCopiar = document.getElementsByClassName("btnCopiar")[0];
var modal = document.getElementById("modal");
var btnOK = document.getElementById("btnOK");

btnCopiar.onclick = function () {
  var cupom = this.parentNode.querySelector(".campoCupomAdega").value;
  navigator.clipboard.writeText(cupom);

  modal.style.display = "block";
};

btnOK.onclick = function () {
  var checkIcon = document.querySelector("#modalContent .check-icon");
  checkIcon.classList.add("check-icon-animation");

  setTimeout(function () {
    modal.style.display = "none";
    checkIcon.classList.remove("check-icon-animation");
  }, 1000);
};
