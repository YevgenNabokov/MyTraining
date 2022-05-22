export declare class LeaderBoardMember {
    name: string | null;
    rank: number | null;
    successRatio: number | null;
}
export interface ILeaderBoardApi {
    getTopN(n: number): LeaderBoardMember[];
}
export declare class FakeApi implements ILeaderBoardApi {
    private nameConfig;
    private generatedData;
    getTopN(n: number): LeaderBoardMember[];
    private getRandomRatio;
}
