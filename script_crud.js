const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const formAdicionarTarefa = document.querySelector('.app__form-add-task')
const textArea = document.querySelector('.app__form-textarea')
const ulTarefas = document.querySelector('.app__section-task-list')

// se o JSON.parse não encontrar nada no armazenamento interno do navegador, ele retorna um array vazio
const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

function criarElementoTarefa(tarefa) {
    const li = document.createElement('li')
    li.classList.add('app__section-task-list-item')

    const svg = document.createElement('svg')
    svg.innerHTML =  `
    <svg>
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
        <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    </svg>
    `

    const p = document.createElement('p')
    p.classList.add('app__section-task-list-item-description')
    p.textContent = tarefa.descricao

    const botao = document.createElement('button')
    botao.classList.add('app_button-edit')

    const imagemBotao = document.createElement('img')
    imagemBotao.src = './imagens/edit.png'
    botao.append(imagemBotao)

    li.append(svg, p, botao)

    return li

}

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden')
})

formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault();  // faz o "refresh" automático da página ficar desativado
    const tarefa = {
        descricao: textArea.value
    }
    tarefas.push(tarefa)
   
    // guardando as tarefas no armazenamento interno do navegador; transforma o array de objetos (tarefas) em uma string
    localStorage.setItem('tarefas', JSON.stringify(tarefas))  
})

tarefas.forEach(tarefa => {
    const elementoTarefa = criarElementoTarefa(tarefa)
    ulTarefas.append(elementoTarefa)
});