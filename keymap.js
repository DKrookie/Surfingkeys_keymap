api.map('<Alt-n>', 'n');
api.map('K', 'I');
api.map('N', 'E');
api.map('I', 'R');
api.map('E', 'd');
api.map('U', 'e');
api.map('e', 'j');
api.map('u', 'k');
api.map('n', 'h');
api.map('i', 'l');
api.map('H', 'D');
api.map('k', 'i');

api.mapkey('D', '#4后退', function () {
  window.history.back();
});
api.vmap('u', 'k');
api.vmap('e', 'j');
api.vmap('n', 'h');
api.vmap('i', 'l');

api.unmap(';fs');
api.unmap('C');
api.unmap('<Ctrl-i>');
api.unmap('<Ctrl-Alt-i>');
api.unmap(';m');
api.unmap('j');
api.unmap('h');
api.unmap('l');
api.unmap('%');
api.unmap('<Ctrl-6>');
api.unmap('d');
api.vunmap('j');
api.vunmap('k');
api.vunmap('h');
api.vunmap('l');
