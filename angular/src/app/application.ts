import { Availability } from "./availability";
import { Question  } from "./question";

export class Application {
    id: number;
    candidateName: string;
    questions: Question[];
    availability: Availability;
    isFavorited: boolean;
}
