import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId : module.id,
    selector: 'user',
    templateUrl: 'user.component.template.html',

    providers: [PostsService]

})
export class UserComponent {
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;

    posts: Post[];


    constructor(private postsService: PostsService){
        this.name = 'ben the mighty';
        this.email = 'benblck@gmail.com';
        this.address = {
            street: 'rbstr 23',
            city: 'bln',
            zip: '10999',
        };
        this.hobbies = ['music', 'movies'];
        this.showHobbies = true;

        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }



    toggleHobbies(){
        this.showHobbies = !this.showHobbies;
    }

    addHobby(hobby: string){
        this.hobbies.push(hobby);
    }

    deleteHobby(i: number){
        this.hobbies.splice(i, 1);
    }

}

interface address {
    street: string;
    city: string;
    zip: string;
}

interface Post{
    id: number;
    title: string;
    body: string;
}