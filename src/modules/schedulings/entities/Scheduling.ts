import { v4 as uuidv4 } from "uuid";

class Scheduling {
    id?: string;
    title!: string;
    description!: string;
    imageName!: string;
    status!: "pending" | "progress" | "done"; 
    created_at?: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Scheduling };

