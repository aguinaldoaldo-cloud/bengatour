const experiences = [
  {number:'01',title:'Huambo Express',subtitle:'A cidade onde tudo começa.',image:'huambo-city.jpg',duration:'3–4 horas',group:'10–16 pessoas',price:'35.000 Kz',category:'Cidade & cultura',route:'Expo → centro da cidade → património histórico → Museu Regional → experiência cultural → degustação → regresso',includes:'Transporte, guia, entradas aplicáveis, degustação e seguro conforme cobertura contratada.',difficulty:'Baixa'},
  {number:'02',title:'Memórias do Planalto',subtitle:'A história por trás do Huambo.',image:'huambo-lake.jpg',duration:'1 dia',group:'10–20 pessoas',price:'65.000 Kz',category:'História & natureza',route:'Huambo → Forte da Quissala → Albufeira do Cuando → almoço → experiência cultural → regresso',includes:'Transporte, guia, entradas aplicáveis, almoço e seguro.',difficulty:'Baixa'},
  {number:'03',title:'Reino do Bailundo',subtitle:'Entre na história viva de Angola.',image:'huambo-culture.jpg',duration:'1 dia',group:'10–16 pessoas',price:'75.000 Kz',category:'Cultura & tradição',route:'Huambo → Bailundo → Ombala Yo Mbalundu → Halavala → experiência cultural → gastronomia → artesanato → regresso',includes:'Transporte, guia, entradas e autorizações aplicáveis, almoço, experiência cultural e seguro.',difficulty:'Média'},
  {number:'04',title:'Mistérios de Ecunha',subtitle:'Onde a natureza encontra a lenda.',image:'huambo-rocks.jpg',duration:'1 dia',group:'8–14 pessoas',price:'70.000 Kz',category:'Natureza & lendas',route:'Huambo → Ilha dos Amores → Pedras de Candumbo → Pedras do Alemão → almoço → regresso',includes:'Transporte, guia, almoço, entradas aplicáveis e seguro.',difficulty:'Média'},
  {number:'05',title:'Serra do Moco',subtitle:'No ponto mais alto de Angola.',image:'huambo-hero.jpg',duration:'1 dia',group:'6–12 pessoas',price:'110.000 Kz',category:'Aventura & montanha',route:'Huambo → área da Serra do Moco → trekking → miradouros → almoço → regresso',includes:'Transporte, guia especializado, alimentação, equipamento básico definido pelo operador e seguro.',difficulty:'Alta'},
  {number:'06',title:'Nascente do Okavango',subtitle:'O início de uma grande história de África.',image:'huambo-water.jpg',duration:'2 dias / 1 noite',group:'6–10 pessoas',price:'180.000 Kz',category:'Ecoturismo & águas',route:'Dia 1: Huambo → Pedras de Candumbo → Chicala-Choloanga → nascente do Cuvango → alojamento. Dia 2: experiência natural → fotografia → gastronomia → regresso',includes:'Transporte, guia, alojamento, alimentação, entradas aplicáveis e seguro.',difficulty:'Média/alta'}
];
const grid = document.querySelector('#experience-grid');
const dialog = document.querySelector('.details-dialog');
const dialogContent = document.querySelector('#dialog-content');
const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

grid.innerHTML = experiences.map(item => `<article class="experience-card"><div class="card-image"><img src="images/${item.image}" alt="Imagem ilustrativa de ${esc(item.title)}" loading="lazy"><span class="category">${esc(item.category)}</span></div><div class="card-body"><span class="number">/${item.number}</span><h3>${esc(item.title)}</h3><p class="subtitle">${esc(item.subtitle)}</p><div class="meta"><span>◷ ${esc(item.duration)}</span><span>◎ ${esc(item.group)}</span></div><div class="price-row"><div><span class="price-label">Desde · valor indicativo</span><strong class="price">${esc(item.price)}<small> / pessoa</small></strong></div><button class="detail-button" type="button" aria-label="Ver percurso de ${esc(item.title)}" data-experience="${item.number}">↗</button></div></div></article>`).join('');

grid.addEventListener('click', event => {
  const button = event.target.closest('[data-experience]');
  if (!button) return;
  const item = experiences.find(experience => experience.number === button.dataset.experience);
  if (!item) return;
  dialogContent.innerHTML = `<img class="dialog-image" src="images/${item.image}" alt="Imagem ilustrativa de ${esc(item.title)}"><div class="dialog-body"><span class="dialog-eyebrow">Experiência ${item.number} · ${esc(item.category)}</span><h3>${esc(item.title)}</h3><p class="dialog-subtitle">${esc(item.subtitle)}</p><div class="dialog-meta"><div><span>Duração</span><strong>${esc(item.duration)}</strong></div><div><span>Grupo</span><strong>${esc(item.group)}</strong></div><div><span>Exigência</span><strong>${esc(item.difficulty)}</strong></div></div><section class="detail-section"><h4>Percurso proposto</h4><p>${esc(item.route)}</p></section><section class="detail-section"><h4>Inclui</h4><p>${esc(item.includes)}</p></section><p class="dialog-disclaimer">Valor indicativo: ${esc(item.price)} por pessoa. Esta experiência integra uma proposta-piloto e ainda não está disponível para reserva; requer validação operacional em campo.</p></div>`;
  dialog.showModal();
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
menuButton.addEventListener('click', () => {
  const opening = mobileNav.hidden;
  mobileNav.hidden = !opening;
  menuButton.setAttribute('aria-expanded', String(opening));
  menuButton.setAttribute('aria-label', opening ? 'Fechar menu' : 'Abrir menu');
});
mobileNav.addEventListener('click', event => { if (event.target.closest('a')) { mobileNav.hidden = true; menuButton.setAttribute('aria-expanded','false'); menuButton.setAttribute('aria-label','Abrir menu'); } });
