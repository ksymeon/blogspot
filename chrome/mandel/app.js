function aboutHide ()
{
  var divAbout = document.getElementById("about");
  divAbout.style.display = "none";
}

function aboutShow ()
{
  var divAbout = document.getElementById("about");
  if (divAbout.style.display == "block")
  {
    aboutHide();
  }
  else
  {
    divAbout.style.display = "block";
  }
}

function resetPresetStyles ()
{
  for (var i = 0; i < 8; i++)
  {
    document.getElementById("preset_" + i).className = "";
  }
}

function load ( element, w, h )
{
  // initLogger();
  if (element)
  {
    resetPresetStyles();
    element.className = "selected";
  }
  initMandel("canvas", w, h);
  // resetMandel(w, h);
  computeMandel();
}

// Chrome apps: use the JavaScript onload mechanism (body onload doesn't work)
window.onload = function() {
  load(null, 240, 240);
};
