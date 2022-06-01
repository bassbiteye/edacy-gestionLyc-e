import { Component } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {
  editMode = false
  id=null;
  prenom ="";
  nom ="";
  classe = "";
  studentName = "";
  studentLists = [
    {  id: 1,prenom: "Bassirou", nom: "Biteye" ,classe:"Terminal S1"},
    {  id: 2,prenom: "Mame Mar", nom: "NIANG",classe:"Terminal s1"},
    {  id: 3,prenom: "hachimiou", nom: "Diallo" ,classe:"Terminal S2"},
    {  id: 4,prenom: "yaya", nom: "LY", classe: "Terminal S2"},
    {  id: 5,prenom: "lena", nom: "ndiongue", classe: "Terminal S1"},

  ];

  deleteStudent(studentId: number) {
    const studentIndex = this.studentLists.findIndex((student) => student.id === studentId);
    this.studentLists.splice(studentIndex, 1);
  }

  addStudent() {
    const lastIndex = this.studentLists.length - 1;
    const id = this.studentLists[lastIndex].id + 1;
    this.studentLists.push({ id: id,  prenom:this.prenom, nom: this.nom,classe:this.classe });
 
  }
  getEtudent(student:any){
    this.id = student.id  
    this.nom = student.nom
    this.prenom = student.prenom
    this.classe =student.classe
    this.editMode = true
  }
  editStudent(){
    this.studentLists.forEach(element => {
      if (element.id == this.id) {
        element.prenom = this.prenom
        element.nom = this.nom
        element.classe = this.classe
    }
    this.editMode = false
    this.id = null 
    this.nom = ""
    this.prenom = ""
    this.classe = ""
    });

  }
  filterStudent() {
    if(this.studentName === "") {
      return this.studentLists;
    }
    return this.studentLists.filter((student) => this.studentName === student.nom);
  }
}
