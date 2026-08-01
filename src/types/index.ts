// types 
// project
export interface TypeProject {
    id: string;
    title: string;
    description: string;
    tags: string[]
    link?: string;
    repo?: string;
}
// experience 
export interface TypeExperience {
    id: string;
    role: string;
    company: string;
    startDate: string;
    endDate: string;
    summary: string;
    skills: string[];
    highlights?: {keyword: string, text: string}[]
}

// skills
export interface TypeSkills {
    category: string,
    items: string[],
}

//contact
export interface TypeContact {
    label: string,
    href: string,
}