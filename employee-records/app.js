var employees = []

function Employee(name, jobTitle, salary){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full time"
    this.printEmployeeForm = function(){
        console.log('Employee: '+name+', Job Title: '+jobTitle+', Salary: '+salary+'/min, Status: '+this.status);
    }
}

let firstEmpl = new Employee ("Steve", "Singer", 50)
firstEmpl.status = "Part Time"
firstEmpl.printEmployeeForm()

let secEmpl = new Employee("Jim", "Fisherman", 25)
secEmpl.status = "Contract"
secEmpl.printEmployeeForm()

let thirdEmpl = new Employee("Kate", "Nurse", 200)
thirdEmpl.printEmployeeForm()

employees.push(firstEmpl, secEmpl, thirdEmpl)
