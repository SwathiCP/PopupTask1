import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/srvice/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  BlogsArray:any
  constructor(private blogsApi: BlogsService){

  }

  ngOnInit(): void {

    this.blogsApi.getBlogs().subscribe((response:any)=>{
      console.log("api called:",response);
      this.BlogsArray = response
    })
    
  }

}
