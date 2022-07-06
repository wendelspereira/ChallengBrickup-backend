
interface ICreateSchedulingDTO {
    id?: string;
    title: string;
    slug: string;
    description?: string;
    status: "pendding" | "progress" | "done";
    imageName?: string;
}


export { ICreateSchedulingDTO  }