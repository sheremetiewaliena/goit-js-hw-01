Skip to main content
Критерії приймання
Вітання, ти на фінішній прямій модуля 1!

Вже зараз ти знаєш, як оголошувати змінні, розрізняєш основні типи даних та вмієш виконувати прості арифметичні обчислення, пам’ятаєш синтаксис шаблонних рядків, вмієш використовувати оператори порівняння та знаєш як працюють функції.

Час прокачати практичні навички з цих тем, розв’язуючи задачі домашнього завдання!

Домашнє завдання №1
Створи репозиторій goit-js-hw-01
Створи окремий файл із розширенням .js для кожної із задач 1-3
Структура репозиторія
Прочитай кожне завдання і виконай його у відповідному файлі
Переконайся, що код відформатований за допомогою Prettier, а в консолі відсутні помилки і попередження під час відкриття живої сторінки завдання.
Здай домашнє завдання на ментору на платформі LMS.
Формат здачі: Домашня робота містить два посилання: на вихідні файли (посилання на репозиторій з кодом) і живу сторінку на GitHub Pages.

Задача 1. Замовлення дроїдів
Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.

Оголоси функцію makeTransaction, яка очікує два параметри, значення яких будуть задаватися під час її виклику:

quantity— перший параметр, число, що містить кількість замовлених дроїдів
pricePerDroid — другий параметр, число, що містить вартість одного дроїда
Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів: "You ordered <quantity> droids worth <totalPrice> credits!", де:

<quantity> — це кількість замовлених дроїдів
<totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"


Залиш цей код для перевірки ментором.

На що буде звертати увагу ментор при перевірці:
Оголошена функція makeTransaction(quantity, pricePerDroid)
Виклик makeTransaction(5, 3000) повертає "You ordered 5 droids worth 15000 credits!"
Виклик makeTransaction(3, 1000) повертає "You ordered 3 droids worth 3000 credits!"
Виклик makeTransaction(10, 500) повертає "You ordered 10 droids worth 5000 credits!"
В консоль виведині всі результаті викликів
Виклик makeTransaction з будь якими-валідними аргументами повертає правильне значення
Задача 2. Доставка товару
Оголоси функцію getShippingMessage, яка очікує три параметри, значення яких будуть задаватися під час її виклику:

country — перший параметр, рядок, що містить країну доставки
price — другий параметр, число, що містить загальну вартість товару
deliveryFee — третій параметр, число, що містить вартість доставки товару
Доповни код функції так, щоб вона повертала рядок з повідомленням про доставку товару в країну користувача: "Shipping to <country> will cost <totalPrice> credits", де:

<country> — це країни доставки
<totalPrice> — це загальна вартість замовлення, що включає вартість товару і його доставки
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"


Залиш цей код для перевірки ментором.

На що буде звертати увагу ментор при перевірці:
Оголошена функція getShippingMessage(country, price, deliveryFee)
Виклик getShippingMessage("Australia", 120, 50) повертає "Shipping to Australia will cost 170 credits"
Виклик getShippingMessage("Germany", 80, 20) повертає "Shipping to Germany will cost 100 credits"
Виклик getShippingMessage("Sweden", 100, 20) повертає "Shipping to Sweden will cost 120 credits"
Виклик getShippingMessage з будь якими-валідними аргументами повертає правильне значення
Задача 3. Ширина елемента
Оголоси функцію getElementWidth, яка очікує три параметри, значення яких будуть задаватися під час її виклику:

content— перший параметр, ширина контенту
padding — другий параметр, значення горизонтального падінгу для кожної зі сторін
border — третій параметр, значення товщини бордера для кожної зі сторін Значення всіх параметрів будуть рядками формату Npx де N — це довільне число, ціле або дробове.
Доповни код функції так, щоб вона повертала число —загальну ширину елемента. При розрахунку загальної ширини орієнтуйся на те, що значення box-sizing дорівнює border-box.

Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

Залиш цей код для перевірки ментором.

На що буде звертати увагу ментор при перевірці:
Оголошена функція getElementWidth(content, padding, border)
Виклик getElementWidth("50px", "8px", "4px") повертає число 74
Виклик getElementWidth("60px", "12px", "8.5px") повертає число 101
Виклик getElementWidth("200px", "0px", "0px") повертає число 200
Виклик getElementWidth з будь якими-валідними аргументами повертає правильне значення