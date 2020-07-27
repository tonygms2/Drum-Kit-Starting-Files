function Student(name,age,cgpa){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.showInfo = ()=>{
        console.log("Student name : "+this.name+" age: "+this.age+ " cgpa: "+this.cgpa);
    }
}

const tony = new Student("Nicholas Tony Gomes",23,3.20);
const rahul = new Student("Rahul Roy",24,3.90);

tony.showInfo();
rahul.showInfo();
