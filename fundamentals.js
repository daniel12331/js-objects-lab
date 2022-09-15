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
        {name: 'Shelly Dwyer', address: 'High Street'}
    ],

    interior:{},

    registration : '201WD1058'
  };
  aCar.mileage = '10000';
  
  aCar.exterior = 'Red';
  aCar.interior.texture = 'Leather';
  aCar.interior.shade = 'Black ';

  console.log('First Owner : ' + aCar.previous_owners[0].name + ' - '
  + aCar.previous_owners[0].address);