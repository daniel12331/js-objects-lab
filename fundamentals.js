const aCar = {
    owner : "Joe Bloggs",
    address : '3 Walker Lane',
    car:{
        make: "Toyota",
        model:"Corolla",
        cc:"1800"
    },
    previous_owners:[
        {name : 'Pat Smith', address : 'Main Street'},
        {name: 'Shelly Dwyer', address: 'High Street'},
        {name: 'John Murphy', address: 'Low Street'}
    ],
    interior:{},
    registration : '201WD1058',

    features : ['Parking Assist','Alarm','Tow-Bar'],
  };
  aCar.mileage = '10000';
  
  aCar.exterior = 'Red';
  aCar.interior.texture = 'Leather';
  aCar.interior.shade = 'Black ';

  for (let i = 0 ; i < aCar.previous_owners.length ; i += 1) {
    console.log(aCar.previous_owners[i].name) ;
};
for (let p in aCar.car)  {
    console.log(p.toUpperCase() + ' = ' + aCar.car[p] ) ;
};