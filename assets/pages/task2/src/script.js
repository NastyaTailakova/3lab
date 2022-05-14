const requests = require('axios').default
const api = 'https://api.hh.ru/vacancies'

document.querySelector('#search').addEventListener('click', event => {
    const value = document.querySelector('#vac-search').value;
    const req = (value == null ? requests.get(api) : requests.get(api, {
        params: {
            text: value
    }}))
    req.then(response => {
        var vacancies = []
        response.data.items.forEach(element => {
            vacancies.push(`${element.name} - ${element.employer.name} </br> ЗП: ${element.salary != null ? (element.salary.from == null ? `до ${element.salary.to}` : `от ${element.salary.from}`) + ' ' + element.salary.currency : 'Не указана'} </br>`);
        });
        
        resultArea = document.querySelector('.q-result')
        header = document.createElement('h1')
        header.innerHTML = 'Результат запроса'
        resultArea.appendChild(header)
        response.data.items.forEach(element => {
            elem = document.createElement('div')
            elem.classList.add('q-unit')

            elem.innerHTML = `
            <h2>${element.name}</h2>
            <div class="q-company">${element.employer.name}</div>
            <div class="q-salary">${element.salary != null ? (element.salary.from == null ? `до ${element.salary.to}` : `от ${element.salary.from}`) + ' ' + element.salary.currency : 'Не указана'}</div>
            `

            resultArea.appendChild(elem)
        })
    })
    .catch(error => {
        alert(error.message);
    });
})