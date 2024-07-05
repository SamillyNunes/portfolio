export class ProjectModel{
    #title: string;
    #description: string;
    #link: string;;
    #photos: string[];

    constructor(title: string, description: string, link:string, photos: string[]){
        this.#title=title;
        this.#description=description;
        this.#link=link;
        this.#photos=photos;
    }

    get title(){
        return this.#title;
    }

    get description(){
        return this.#description;
    }

    get link(){
        return this.#link;
    }

    get photos(){
        return this.#photos;
    }

    static fromMap(json: any){
        console.log('mapping...');
        console.log(json);
        console.log(json['title']);
        return new ProjectModel(
            json['title'],
            json['description'],
            json['link'],
            json['photos'] as [],
        );
    }
}