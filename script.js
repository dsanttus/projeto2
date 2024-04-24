// Capturando os elementos do DOM
var titulo = document.getElementById('titulo');
var listaNaoOrdenada = document.querySelector('ul');
var link = document.getElementById('link');
var listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando conteúdo aos elementos usando .innerText e .innerHTML
titulo.innerText = 'Título da Página';
link.innerText = 'Link para Proz Educação';
listaNaoOrdenada.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li>';
listaOrdenada.innerHTML = '<li><a href="https://google.com">Acesse o Google</a></li><li><a href="https://facebook.com">Acesse o Facebook</a></li><li><a href="https://instagram.com">Acesse o Instagram</a></li>';
