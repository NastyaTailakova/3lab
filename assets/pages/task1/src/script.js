const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


document.querySelector('#calculate').addEventListener('click', (event) => {
    const resultArea = document.querySelector('#result-area');
    const type = document.querySelector('#type');
    const time = document.querySelector('#duration');
    const amount = document.querySelector('#money');

    if (type.selectedIndex == 0) return;

    resultArea.textContent = `\n\nВклад "${type.options[type.selectedIndex].text}" на срок "${time.options[time.selectedIndex].text}" на сумму ${amount.value} руб.\n
    В конце срока вы получите ${parseFloat(amount.value) + parseFloat(amount.value * parseFloat(time.options[time.selectedIndex].value))} руб`
});

document.querySelector('#type').addEventListener('change', (event) => {
    time = document.querySelector('#duration');
    time.innerHTML = null;
    switch (event.target.value) {
      case '1':
      time.appendChild(new Option('6 месяцев', '0.1', true));
      time.appendChild(new Option('1 год', '0.22'));
      time.appendChild(new Option('1.5 года', '0.225'));
      time.appendChild(new Option('2 года', '0.20'));
      break;
  case '2':
      time.appendChild(new Option('3 месяца', '0.05', true));
      time.appendChild(new Option('6 месяцев', '0.11'));
      time.appendChild(new Option('9 месяцев', '0.1725'));
      time.appendChild(new Option('1 год', '0.24'));
      time.appendChild(new Option('1.5 года', '0.27'));
      time.appendChild(new Option('2 года', '0.30'));
      break;
    }
});