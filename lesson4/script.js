'use strict'

let money, time;

function start() {
	money = +prompt("ваш бюджет на месяц?");
	time = prompt("Введите дату в формате YYYY-MM-DD");

	while(isNaN(money) || money == "" || money == null) {
	money = +prompt("ваш бюджет на месяц?");
	}
}

start();


var appData = {
	budjet: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	chooseExpenses: function() {
		for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');

			if ( (typeof(a)) === 'string' && (typeof(a)) != null  && (typeof(b)) != null
			&& a != '' && b != '' && a.length < 50) {
			appData.expenses[a] = b;	
			}
		}
	},
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budjet/30).toFixed();
		alert("Ежедневный бюджет:" + appData.moneyPerDay);
	},
	detectLevel: function() {
		if (appData.moneyPerDay < 100) {
		console.log("минимальный уровень достатка");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("средний уровень достатка");
		} else if (appData.moneyPerDay > 2000) {
			console.log("высокий уровень достатка");
		} else {
			console.log("Произошла ошибка!");
		}
	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма ваших накоплений?"),
				percent = +prompt("Каков процент?");

			appData.monthIncome = save/100/12*percent;

			alert("Доход в месяц с депозита: " + appData.monthIncome);
		}
	},
	chooseOptExpenses: function() {
		for (let j = 0; j <= 3; j++) {
		let questionOptExpenses = prompt("Введите необязательную статью расходов в этом месяце", '');
			appData.optionalExpenses[j] = questionOptExpenses;
			console.log(appData.optionalExpenses);
		} 
	},
	chooseIncome: function() {
		let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
		if (typeof(items) != 'string' || items == '' || typeof(items) == null) {
			console.log("Проверьте правильность введенных данных");
		}else{
			appData.income = items.split(', ');
			appData.income.push(prompt('может что-то еще?'));
			appData.income.sort();
		}

		appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });

    }

};

for (let key in appData) {
	console.log('Наша программа включает в себя данные:' + key + ' ' + appData[key]);
}


// let i = 0
// while (i < 2) {
// 	i++;
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');

// 	if ( (typeof(a)) === 'string' && (typeof(a)) != null  && (typeof(b)) != null
// 		&& a != '' && b != '' && a.length < 50) {
// 		appData.expenses[a] = b;	
// 	}
// };

// let i = 0
// do {
// 	i++;
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');

// 	if ( (typeof(a)) === 'string' && (typeof(a)) != null  && (typeof(b)) != null
// 		&& a != '' && b != '' && a.length < 50) {
// 		appData.expenses[a] = b;	
// 	}
// } while (i < 2);
