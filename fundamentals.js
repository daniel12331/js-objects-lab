const aCar = {
    owner : "Joe Bloggs",
    car:{
        make: "Toyota",
        model:"Corolla",
        cc:"1800"
    },
    interior:{},

    registration : '201WD1058'
  };
  aCar.mileage = '10000';
  
  aCar.exterior = 'Red';
  aCar.interior.texture = 'Leather';
  aCar.interior.shade = 'Black ';

  console.log(aCar.owner + ' drives a ' + aCar.car.make + ' that has a ' + aCar.exterior 
  + ' exterior colour and has a ' + aCar.interior.shade +
  aCar.interior.texture + ' interior and has ' + aCar.mileage + ' Miles ');
