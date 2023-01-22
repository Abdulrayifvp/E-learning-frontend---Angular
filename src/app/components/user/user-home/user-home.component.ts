import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  courses = [
    {
      "title": "Introduction to Machine Learning",
      "description": "Learn the basics of machine learning and how to apply it to real-world problems.",
      "thumbnail": "https://i.ytimg.com/vi/nLw1RNvfElg/hqdefault.jpg",
      "url": "https://www.youtube.com/watch?v=nLw1RNvfElg"
    },
    {
      "title": "Advanced Python Programming",
      "description": "Take your Python skills to the next level with this advanced course.",
      "thumbnail": "https://i.ytimg.com/vi/BJ-VvGyQxho/hqdefault.jpg",
      "url": "https://www.youtube.com/watch?v=BJ-VvGyQxho"
    },
    {
      "title": "Web Development with React",
      "description": "Learn how to build modern web applications using the popular React library.",
      "thumbnail": "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
      "url": "https://www.youtube.com/watch?v=Ke90Tje7VS0"
    },
    {
      "title": "Introduction to Machine Learning",
      "description": "Learn the basics of machine learning and how to apply it to real-world problems.",
      "thumbnail": "https://i.ytimg.com/vi/nLw1RNvfElg/hqdefault.jpg",
      "url": "https://www.youtube.com/watch?v=nLw1RNvfElg"
    },
    {
      "title": "Advanced Python Programming",
      "description": "Take your Python skills to the next level with this advanced course.",
      "thumbnail": "https://i.ytimg.com/vi/BJ-VvGyQxho/hqdefault.jpg",
      "url": "https://www.youtube.com/watch?v=BJ-VvGyQxho"
    },
    {
      "title": "Web Development with React",
      "description": "Learn how to build modern web applications using the popular React library.",
      "thumbnail": "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
      "url": "https://www.youtube.com/watch?v=Ke90Tje7VS0"
    },
    {
      "title": "Introduction to Machine Learning",
      "description": "Learn the basics of machine learning and how to apply it to real-world problems.",
      "thumbnail": "https://i.ytimg.com/vi/nLw1RNvfElg/hqdefault.jpg",
      "url": "https://www.youtube.com/watch?v=nLw1RNvfElg"
    },
    {
      "title": "Advanced Python Programming",
      "description": "Take your Python skills to the next level with this advanced course.",
      "thumbnail": "https://i.ytimg.com/vi/BJ-VvGyQxho/hqdefault.jpg",
      "url": "https://www.youtube.com/watch?v=BJ-VvGyQxho"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
