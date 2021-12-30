import { Availability } from './availability';
import { Question  } from './question';

export class Application {
    id: number;
    applied: Date;
    name: string;
    position: string;
    questions: Question[];
    experience: number;
    availability: Availability;
    // application layer properties
    isFavorited: boolean;
    isBookmarked: boolean;
    isMarkedForLater: boolean;
}
