/*
var alunosPresentes = ["Pedrao", "Luiz", "Giovanni", "Arthur", "Joao", "Vanderlei", "Maria", "Joao", "Cecilia"]
var idade = [26, 16, 17, 17, 16, 16, 18]
*/

var cursoEnfermagem = {
    nome: "Enfermagem",
    descricao: "Para você que gostaria de ingressar na area da saúde",
    topicos: ["Biosegurança", "Primeiros socorros", "Ministracao de Medicamentos"],
    imagem: "https://th.bing.com/th/id/R.87a9532c010abbaf138baad02f7086d8?rik=c8wqN1%2bA%2b8AvmA&riu=http%3a%2f%2fwww.iesfasc.com.br%2fwp-content%2fuploads%2f2020%2f09%2fpostblog-ies-enfermagem_blog-1200x675.jpg&ehk=gmh9AXzlzSePjJrCUGTTCVzV%2f3L44jwQDsa7oQYZMpo%3d&risl=&pid=ImgRaw&r=0"
};

var cursoProgramacao = { 
    nome: "Programação", 
    descricao: "Curso 1", 
    topicos: ["Tecnologia", "Design UI", "Web"],
    imagem: "https://idocode.com.br/wp-content/uploads/2021/07/code-1839406_1920-1.jpg"
};

var cursoAdministracao = { 
    nome: "Administração", 
    descricao: "Direcionado para quem queira trabalhar no setor administrativo e com finanças.", 
    topicos: ["Marketing", "Finanças", "Finanças e Contabilidade"],
    imagem: "https://www.uemg.br/images/cursos/administracao.jpg" 
};

var cursos = [cursoAdministracao, cursoProgramacao, cursoEnfermagem];

/*
var titulo = document.getElementById("titulo");
titulo.innerHTML = "<h1>Elemento</h1>"
*/



var topicos = document.getElementById("topicos");
console.log(topicos)

var liTopico = document.createElement("li");
liTopico.innerText = "Front-end";
console.log(liTopico)

topicos.appendChild(liTopico)










//  const cursos = [
//      { curso: "Programação", descricao: "Curso a", topicos: ["Tecnologia", "Design UI", "Web"] },
//       { curso: "Adm", descricao: "Curso 2", topicos: ["Marketing", "Finanças"] },
//      { curso: "Enfermagem", descricao: "Curso 3", topicos: ["Primeiros socorros", "Biosegurança"] }];

// const titulo = document.getElementById("titulo");
// titulo.innerText = "Mudei no js"

async function buscaCursos() {
  /*  const cursos = await fetch("https://api-aula-senac.onrender.com/cursos");
    return await cursos.json();  */
}
/*
const ul = document.getElementById('cursos-lista');

buscaCursos().then(cursos => cursos.forEach(curso => {
    let topicos = "";
    curso.topicos.forEach(topico => {
        return topicos += `<li>${topico}</li>`;
    });
    const li = document.createElement('li');
    li.classList = "curso-item";
    li.innerHTML = `<a href="#"><img src=${curso.imagem} alt="" class="curso-imagem"></a>
                    <div class="curso-item-detalhes">
                    <span></span>
                    <h2>${curso.curso}</h2>
                    <p>${curso.descricao}</p>
                    <ul>
                        ${topicos}
                    </ul>
                    <a href="#">Saiba mais</a>
                    </div>`;
    ul.appendChild(li);
}))

*/




