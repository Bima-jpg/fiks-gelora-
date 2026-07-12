function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6SrSSbPbXQp":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementByld("bgSongku");
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0,5;
}

