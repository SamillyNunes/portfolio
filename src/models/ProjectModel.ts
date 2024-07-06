export class ProjectModel{
    #title: string;
    #description: string;
    #link: string;;
    #photos: string[];
    #isHighlight: boolean;

    constructor(title: string, description: string, link:string, isHighlight: boolean, photos: string[]){
        this.#title=title;
        this.#description=description;
        this.#link=link;
        this.#isHighlight = isHighlight;
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

    get isHighlight(){
        return this.#isHighlight;
    }

    get photos(){
        return this.#photos;
    }

    static fromMap(json: any){
        return new ProjectModel(
            json['title'],
            json['description'],
            json['link'],
            json['isHighlight'],
            json['photos'] as [],
        );
    }
}