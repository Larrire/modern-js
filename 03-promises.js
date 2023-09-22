

const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Sucesso');
    reject('Erro!');
  }, 2000);
});

// console.log(apiCall);

// apiCall
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
//   .finally(finish => console.log(finish))

const test = async () => {
  console.log('test');
  try {
    const resposta = await apiCall
    console.log(resposta)
  } catch (error) {
    console.log(error)
  }
}

test()