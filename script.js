let titulo = document.getElementById('titulo');
let listaNaoOrdenada = document.querySelector('ul');
let link = document.getElementById('link');
let listaOrdenada = document.getElementById('lista-ordenada');

titulo.innerText = 'Título da Página';
link.innerText = 'Link para Proz Educação';
listaNaoOrdenada.innerHTML = '<li>Proz</li><li>Educação</li><li>JOY</li>';
listaOrdenada.innerHTML = '<li><a href="https://google.com">Acesse o Google</a></li><li><a href="https://facebook.com">Acesse o Facebook</a></li><li><a href="https://instagram.com">Acesse o Instagram</a></li>';
