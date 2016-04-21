/* eslint-disable */
(function() {
  if (!document.getElementById('container')) {
    var body = document.getElementsByTagName('body')[0];
    var container = document.createElement('div');
    container.id = 'container';
    body.insertBefore(container, body.firstChild);
  }
})();
