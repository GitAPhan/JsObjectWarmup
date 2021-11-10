

function non_coastal(array) {
    for (var i = 0; i < array.length; i++) {
        if (!array[i]['is_coastal']) {
            console.log(`Name: ${array[i]['city_name']} is NOT a coastal city`);
        }
    };
}

function coastal_check(obj) {
    if (obj['is_coastal']) {
        return false;
    } else {
        return true;
    }
};

var city_name = 'Calgary';
var population = 1102353;
var is_coastal = true;

// this is the same as is_coastal === true
if (is_coastal) {
    console.log(`${city_name} is a coastal city with approximately ${population} citizens`)
}


var city = {
    city_name: 'Calgary',
    population: 1102353,
    is_coastal: true,
};



if (city['is_coastal'] === true) {
    console.log(`${city['city_name']} is a coastal city with approximately ${city['population']} citizens`);
};

var cities = [
    {
        city_name: 'Vancouver',
        population: 4102353,
        is_coastal: true,
    }, {
        city_name: 'Calgary',
        population: 1102353,
        is_coastal: false,
    }, {
        city_name: 'Airdrie',
        population: 502353,
        is_coastal: false,
    }, {
        city_name: 'Surrey',
        population: 1502353,
        is_coastal: true,
    }, {
        city_name: 'Golden',
        population: 502353,
        is_coastal: false,
    },
];

for (i = 0; i < cities.length; i++) {
    if (cities[i]['is_coastal'] === true && cities[i]['population'] > 1000000) {
        console.log(`${cities[i]['city_name']} is a coastal city with approximately ${cities[i]['population']} citizens`);
    }
};

i = 0;
while (i < cities.length) {
    if (cities[i]['is_coastal'] === true && cities[i]['population'] > 1000000) {
        console.log(`${cities[i]['city_name']} is a coastal city with ${cities[i]['population']} citizens`);
    }
    i++;
}

non_coastal(cities);

var non_coastal_cities = cities.filter(coastal_check);

for (i = 0; i < non_coastal_cities.length; i++) {
    console.log(`${non_coastal_cities[i]['city_name']} is NOT a coastal city with approximately ${non_coastal_cities[i]['population']} citizens`);
};