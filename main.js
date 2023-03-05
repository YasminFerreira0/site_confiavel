function showDiv2() {
    // exibe a tela de carregamento
    document.getElementById("loader").style.display = "block";
    // oculta a div1
    document.getElementById("div1").style.display = "none";
    // aguarda 5 segundos e então exibe a div2 e oculta a tela de carregamento
    setTimeout(function() {
      document.getElementById("div2").style.display = "block";
      document.getElementById("loader").style.display = "none";
    }, 5000);
  }
  
  function showDiv1() {
    // exibe a tela de carregamento
    document.getElementById("loader").style.display = "block";
    // oculta a div2
    document.getElementById("div2").style.display = "none";
    // aguarda 5 segundos e então exibe a div1 e oculta a tela de carregamento
    setTimeout(function() {
      document.getElementById("div1").style.display = "block";
      document.getElementById("loader").style.display = "none";
    }, 5000);
  }
  