export interface IUser {
    name: string;
    full_name: string;
    description: string;
    owner: IOwner;
    stargazers_count: number;
    open_issues_count: number;
    pushed_at: Date;
}
export interface IOwner {
    avatar_url: string
}