import { LeaderBoardRecord } from "./DataModel/LeaderBoardRecord";
import { ILeaderBoardApi } from "./FakeApiService";
export declare class LeaderBoardStore {
    constructor(leaderBoardApi: ILeaderBoardApi);
    private leaderBoardApi;
    leaderBoardMembers: LeaderBoardRecord[];
    loadLeaderBoard(topN: number): void;
    private updateRecord;
    private mapRecord;
}
