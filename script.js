const student = "Строев Максим Александрович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
// ...

const users = [{
    name: "Пономарев Андрей Алексеевич",
    birthdate: "1980.12.11",
    gender: "male"},
    {
    name: "Рыбакова Алина Семёновна",
    birthdate: "1974.04.16", 
    gender: "female"},
    {
    name: "Молчанов Даниил Ильич",
    birthdate: "1984.03.21",
    gender: "male" },
    {
    name: "Смирнова София Львовна",
    birthdate: "1987.01.02",
    gender: "female"  
    },
    {
    name: "Владимиров Артём Григорьевич",
    birthdate: "1990.12.07",
    gender: "male"
    },
    {
    name: "Маслова Елизавета Егоровна",
    birthdate: "1997.10.10", 
    gender: "female"
    },
    {
    name: "Назарова Вера Романовна",
    birthdate: "1983.05.01",
    gender: "female" 
    },
    {
    name: "Иванов Иван Фёдорович",
    birthdate: "1999.05.05",
    gender: "male"     
    },
    {
    name: "Дмитриев Алексей Григорьевич",
    birthdate: "1998.11.12",
    gender: "male" 
    },
    {
    name: "Овчинников Платон Александрович",
    birthdate: "1999.05.26", 
    gender: "male"
    },
    {
    name: "Мартынова Софья Тимуровна",
    birthdate: "1995.06.07",
    gender: "female" 
    },
    {
    name: "Соколов Михаил Адамович",
    birthdate: "1979.03.11",
    gender: "male" 
    }
];
let names = [];
let countOfMale = 0;
let countOfFemale = 0;
let gender;
for(let i = 0; i < users.length; i++) {
    let letter = []; 
    let b = 0;
    if (users[i].gender == 'male') {
        countOfMale++;
        gender = 'М';
    } else {
        countOfFemale++;
        gender = 'Ж';
    };
    for (let n = 1; n < users[i].name.length; n++) {
        if (users[i].name[n] == users[i].name[n].toUpperCase()) {
            letter[b++] = users[i].name[n];
        };
    };
    names[i] = users[i].name.split(" ").splice(0, 1).join(" ") + ' ' + letter[1] + '.' + letter[3] + '.' + ',' + ' ' + gender  + ', ' + 'Возраст: ' + Math.floor((new Date().getTime() - new Date(users[i].birthdate)) / (24 * 3600 * 365.25 * 1000));
};
console.log(`Всего гостей: ${users.length}`);
console.log(`Мужчин: ${countOfMale}`);
console.log(`Женщин: ${countOfFemale}`);
console.log('Список гостей:');
for(let j = 0; j < names.length; j++) {
    console.log(names[j]);
};