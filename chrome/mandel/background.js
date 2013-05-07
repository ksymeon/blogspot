chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    'width': 480,
    'height': 480
  });
  load(null, 360, 360);
});
