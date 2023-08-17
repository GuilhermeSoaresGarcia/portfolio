export interface IProject {
    id?: number,
    name: string,
    description: string,
    html_url: string,
    language: string,
    topics: Array<string>,
}