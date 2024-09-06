document.getElementById('btn-search').addEventListener('click', () => {
   const userId = document.getElementById('input-search').value
   let button = document.getElementById('btn-search');
        button.setAttribute('disabled' , 'disabled');
   getUserProfile(userId)
});

async function user(userName) {
    const response = await fetch(`https://dummyjson.com/users/${userName}`)
    return await response.json()
}

function getUserProfile(userName){
    user(userName).then(userData  => {
        console.log(userData)

        let userInfo = `<img src="${userData.image}" />
                        <div>
                            <h3> ${userData.firstName} ${userData.lastName}</h3>
                            <p>👤 Idade: ${userData.age} anos</p>
                            <p>📩 ${userData.email}</p>
                            <p>📞 ${userData.phone}</p>
                            <p>✉️ ${userData.address.address}</p>
                        </div>`

     document.querySelector('.profile-data').innerHTML = userInfo                   
    })
}


//age
//email
//firstName
//address
//image
//phone


/*function listaDeUsuarios() {
    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(data => {

        let button = document.getElementById('btn');
        button.setAttribute('disabled' , 'disabled');

        const listaUl = document.getElementById('usuariosNaLista')
        data.users.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.firstName;
        listaUl.appendChild(li);
        })
        
            console.log(data)

            
        })
        .catch(error => {
            console.error('Erro ao fazer fetch:', error);
        })

        
};


function filtrarUsuarios() {
    const listaUl = document.getElementById('usuariosNaLista');
    const filtro = document.getElementById('filtro-nome').value.toLowerCase();
    const usuarios = listaUl.getElementsByTagName('li');
    for (let index = 0; index < usuarios.length; index++) {
        const nomeUsuario = usuarios[index].textContent.toLowerCase();
        if (nomeUsuario.includes(filtro)) {
            usuarios[index].style.display = 'block';
        } else {
            usuarios[index].style.display = 'none';
        
        }
    }
};







/* Passos: 

1. pegar a lista no html;
2. pegar o imput, com o valor "texto";
3. criar uma variável "usuarios", para ser exibido na lista "li";
4. criar um laço para percorrer a lista de usuário;
5. criar uma variável "nomeUsuario", que vai receber a variável "usuarios" texto do imput depois de passar no laço e comparado com a lista de usuário;
6. criar uma condição if para se o nome do texto do imput for igual algum da lista de usuário;
else se não o nome não ira aparecer "display :none";

*/

