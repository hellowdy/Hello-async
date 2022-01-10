const btnJob = document.getElementById('btn-job');
const githubForm = document.getElementById('github-form');
const githubResult = document.getElementById('github-result');

const candidat = {
    isProgrammer: false,
    isCool: true
};

btnJob.addEventListener('click', applyToJob);
githubForm.addEventListener('submit', searchGithub)

// function applyToJob() {
//     console.log('La décision est en cours...');
//     startDesicionProcess()
//     .then((result) => {
//         console.log('result', result);
//     })
//     .catch(err => {
//         console.log('err', err);
//     });
//    console.log(`Juste après startDesicionProcess`);
// }

async function applyToJob() {
    console.log('La décision est en cours...');
    try {
        const result = await startDesicionProcess();
        console.log('result', result);   
    } catch (err) {
        console.log('err', err);
    }
    
   
   console.log(`Juste après startDesicionProcess`);
}

function startDesicionProcess() {
    return new Promise((resolve, reject) => {
        console.log(`Recruteur - Pendant ce temps, je reçois d'autres candidats `);
        setTimeout(() => {

        
      if (candidat.isProgrammer && candidat.isCool) {
          console.log(`avant resolve`);
          resolve(`Recruteur - Bienvenue dans notre entreprise !`);
      } else {
          console.log(`avant reject`);
          reject(`Recruteur - Malgré tout l'intérêt de votre candidature, nous sommes au regret de bla bla`);
      }  
      }, 2000);
    });
}

console.log('Après la function applyToJob');

// function searchGithub(e) {
//     e.preventDefault();
//     const account = githubForm.elements[0].value;
//     fetch(`https://api.github.com/users/${account}`)
//         .then(data => data.json())
//         .then(jsonData => {
//             console.log('jsonData', jsonData);
//             githubResult.innerHTML = `<pre><code>${JSON.stringify(jsonData, null, 4)}</code></pre>`
//         });
    
// }

async function searchGithub(e) {
    e.preventDefault();
    const account = githubForm.elements[0].value;
    const data = await fetch(`https://api.github.com/users/${account}`);
    const jsonData = await data.json();
    githubResult.innerHTML = `<pre><code>${JSON.stringify(jsonData, null, 4)}</code></pre>`
       
    
}