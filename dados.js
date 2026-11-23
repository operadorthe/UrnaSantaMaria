/* ===== DADOS DE SANTA MARIA: edite só este arquivo (a urna dos voluntários, a dos liderados e o painel leem daqui) ===== */

// Voluntários votados na urna dos voluntários. n = número de 2 dígitos, deps = departamentos.
const P=[{"n":"01","nome":"Voluntário Exemplo A","deps":["Louvor"]},{"n":"02","nome":"Voluntário Exemplo B","deps":["Louvor","Comunicação"]},{"n":"03","nome":"Voluntário Exemplo C","deps":["Comunicação"]},{"n":"04","nome":"Voluntário Exemplo D","deps":["Recepção"]},{"n":"05","nome":"Voluntário Exemplo E","deps":["Recepção","Crianças"]},{"n":"06","nome":"Voluntário Exemplo F","deps":["Crianças"]}];

// Líderes que votam na urna dos voluntários: [texto na lista, nome igual ao de P (ou null se o líder não é voluntário)].
const LID=[["Líder Exemplo 1 (Louvor)","Voluntário Exemplo A"],["Líder Exemplo 2 (Recepção)",null]];

// Líderes votados na urna dos liderados: [nome (para dupla use " e "), departamento]. A numeração é pela ordem: 01, 02, 03...
// Fotos na urna dos liderados: 01.jpg, 02.jpg... (dupla: 02a.jpg e 02b.jpg). Fotos na urna dos voluntários: NN.jpg pelo número do voluntário.
const L=[["Líder Exemplo 1","Louvor"],["Líder Exemplo 2 e Líder Exemplo 3","Recepção"],["Líder Exemplo 4","Crianças"]];

// Departamentos que o liderado escolhe ao se identificar.
const DEPS_LID=[...new Set(L.map(x=>x[1]).filter(Boolean))].concat(["Não participo de nenhum departamento"]);
