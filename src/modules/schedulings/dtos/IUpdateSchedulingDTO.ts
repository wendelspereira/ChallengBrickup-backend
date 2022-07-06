
interface IUpdateSchedulingDTO {
    title?: string;
    slug?: string;
    description?: string;
    status?: "pendding" | "progress" | "done";
    imageNames?: string[];
}

export { IUpdateSchedulingDTO }