

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
console.dir(document.body);

var first_p_tag = document.querySelector('p');
first_p_tag.innerText = "I have changed the text!";

var all_p_tags = document.querySelectorAll('p');
for(var i=0; i < all_p_tags.length; i++) {
    all_p_tags[i]['style']['color'] = "pink"
}

var page_title = document.getElementById('page_title');
page_title['innerText'] = 'Injected Title';
page_title['style']['fontFamily'] = 'sans-serif';

var page_body = page_title.parentNode;
var sub_title = document.createElement('h3');

page_body.appendChild(sub_title);
sub_title['innerText'] = "This is a subtitle";

var orange_tags = document.getElementsByClassName('orange');
for(var i=0; i<orange_tags.length; i++) {
    orange_tags[i]['style']['background'] ="orange";
};

// maybe don't do this!
// page_body.remove();

var container = document.getElementById('container');
container.innerHTML = "<h2>Will I be an h2 tag?</h2>";
container['style']['transition'] = "all 1s ease-in-out";
container['style']['height'] = '100px';

var images = document.querySelector('img')
images.setAttribute('https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80');