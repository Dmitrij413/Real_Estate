const inputMinValue = document.getElementById('min'); // Ищем input с меньшим значнием
const inputMaxValue = document.getElementById('max'); // Ищем input с большим значнием
const priceRange = document.getElementById('price-range');

const rangeSliderInit = () => { // создаем функцию инициализации слайдера
  const range = document.getElementById('range'); // Ищем слайдер
  const inputMin = document.getElementById('min'); // Ищем input с меньшим значнием
  const inputMax = document.getElementById('max'); // Ищем input с большим значнием

  if (!range || !inputMin || !inputMax) return // если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок

  const inputs = [inputMin, inputMax]; // создаем массив из меньшего и большего значения

  noUiSlider.create(range, { // инициализируем слайдер
      start: [200, 350], // устанавливаем начальные значения
      connect: true, // указываем что нужно показывать выбранный диапазон
      range: { // устанавливаем минимальное и максимальное значения
        'min': 200,
        'max': 3000
      },
      step: 50, // шаг изменения значений
    }
  )

  range.noUiSlider.on('update', function (values, handle) { // при изменений положения элементов управления слайдера изменяем соответствующие значения
    inputs[handle].value = parseInt(values[handle]);
    priceRange.textContent = `$ ${inputMin.value} - $ ${inputMax.value}`;
  });

  inputMin.addEventListener('change', function () { // при изменении меньшего значения в input - меняем положение соответствующего элемента управления
    range.noUiSlider.set([this.value, null]);
    priceRange.textContent = `$ ${inputMin.value} - $ ${inputMax.value}`;
  });

  inputMax.addEventListener('change', function () { // при изменении большего значения в input - меняем положение соответствующего элемента управления
    range.noUiSlider.set([null, this.value]);
    priceRange.textContent = `$ ${inputMin.value} - $ ${inputMax.value}`;
  })

}

const init = () => {
  rangeSliderInit() // запускаем функцию инициализации слайдера
}

window.addEventListener('DOMContentLoaded', init) 