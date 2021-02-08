import { Score } from './score';
export class User {
    username: string;
    didTheInitialTest: boolean=false;
    firstTestScore: number;
    everyDayScore: Score[];
}