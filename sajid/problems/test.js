var johnSmith = {
    firstName: "John",
    lastName: "Smith",
    address: { //Composition
    street: "123 Duncannon Street",
    city: "London",
    country: "United Kingdom"
    }
   };
   
   var nickSmith = {
    firstName: "Nick",
    lastName: "Smith",
    address: { //Composition
    street: "321 Oxford Street",
    city: "London",
    country: "United Kingdom"
    }
   };
   
   johnSmith.parent = nickSmith; //Association
   
   var company = {
    name: "ACME Inc.",
    employees: []
   };
   
   //Aggregation
   company.employees.push(johnSmith);
   company.employees.push(nickSmith);

   console.log(company)