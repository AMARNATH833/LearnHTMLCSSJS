
//Encapsulation in JavaScript......


 class EmployeeDetails{
    setEmployeeDetails(myName ,id, salary){

        this.myName=myName;
        this.id=id;
        this.salary=salary;
     }

     getMyName(){
        return this.myName;
     }
     getId(){
        return this.id;
     }
     getSalary(){
        return this.salary;
     }
 }

const details=new EmployeeDetails();
details.setEmployeeDetails('amar',10437,11111);
console.log(details.getMyName());
console.log(details.getId());
console.log(details.getSalary());