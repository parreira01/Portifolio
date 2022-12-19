
/*O que é o consumo da API: é uma requisição http de get para JSON que está no main do github*/
async function fetchProfileData() {
    const url = 'https://api.github.com/'
    const fetching = fetch(url)
    return await fetching.jason()
}