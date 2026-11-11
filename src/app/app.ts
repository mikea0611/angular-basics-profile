import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Francine Kimea A. Sto. Domingo';
  location = 'San Fernando City, Pampanga';
  email = 'francinekimea@gmail.com';
  phone = '0969 025 1232';

  profile = 'I am currently a 3rd year IT with specialization in web development student who is still learning and improving my skills in creating websites and applications. Through our school activities and projects, I have gained some experience in using HTML, CSS, JavaScript, and other web development tools. I enjoy working on the design and layout of websites, but I also want to improve my understanding of how the backend works. There are still many things I need to learn, especially when it comes to coding and solving errors. My goal is to become more confident in my skills and eventually use what I have learned in real-world projects.';

  skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Vue.js',
    'Node.js and Express.js',
    'MongoDB',
    'Responsive Web Design',
    'Git and GitHub'
  ];

technicalProficiencies = [
  {
    category: 'Frontend Development',
    technologies: 'HTML5, CSS3, JavaScript, TypeScript, Angular, Vue.js'
  },
  {
    category: 'Backend Development',
    technologies: 'Node.js, Express.js'
  },
  {
    category: 'Database & Development Tools',
    technologies: 'MongoDB, Git, GitHub'
  }
];


  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
