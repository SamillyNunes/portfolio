import { ProjectModel } from "@/models/ProjectModel";
import fs from "fs";
import path from "path";

export async function getProjects(): Promise<any>{
    const filePath = path.join(process.cwd(), 'data', 'projects.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(jsonData);
    
    return data;
}

export function convertJsonIntoProjects(map): ProjectModel[] {
    const projects = [];

    for(var i=0; i<map.length; i++){
        
        const p = ProjectModel.fromMap(map[i]);
        projects.push(p);
    }

    return projects;
}