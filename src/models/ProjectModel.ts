export class ProjectModel{
    #title: string;
    #description: string;
    #link: string;;
    #photos: string[];
    #isHighlight: boolean;
    #language: string;
    #framework?: string;
    #featuresDescription?: string[];

    constructor(title: string, description: string, link:string, isHighlight: boolean, photos: string[], language:string, framework:string, featuresDescription: string[]){
        this.#title=title;
        this.#description=description;
        this.#link=link;
        this.#isHighlight = isHighlight;
        this.#photos=photos;
        this.#language=language;
        this.#framework=framework;
        this.#featuresDescription = featuresDescription;
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

    get language(){
        return this.#language;
    }

    get framework(){
        return this.#framework;
    }

    get featuresDescription(){
        return this.#featuresDescription;
    }

    static fromMap(json: any){
        return new ProjectModel(
            json['title'],
            json['description'],
            json['link'],
            json['isHighlight'],
            json['photos'] as [],
            json['language'],
            json['framework'],
            json['features'],
        );
    }

    static empty(){
        return new ProjectModel('','','',false,[],'', '',[]);
    }
}