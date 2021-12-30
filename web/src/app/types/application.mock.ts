import { Application } from './application';
import { AvailabilityMock } from './availability.mock';
import { QuestionMock } from './question.mock';

export const ApplicationMock: Application = {
    id: 1,
    applied: new Date(),
    name: 'Johnny Test',
    position: 'Lead Scientist',
    questions: [
        QuestionMock
    ],
    experience: 3,
    availability: AvailabilityMock,
    // application layer properties
    isFavorited: false,
    isBookmarked: false,
    isMarkedForLater: false
};
