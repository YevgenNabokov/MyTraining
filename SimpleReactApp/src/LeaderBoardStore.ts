import { LeaderBoardRecord } from "./DataModel/LeaderBoardRecord";
import { ILeaderBoardApi, LeaderBoardMember } from "./FakeApiService";
import { makeObservable, observable, computed } from "mobx";
import { AvatarConfig, genConfig } from "react-nice-avatar";


export class LeaderBoardStore {
    constructor(leaderBoardApi: ILeaderBoardApi) {
        this.leaderBoardApi = leaderBoardApi;

        makeObservable(this, {
            leaderBoardMembers: observable
        });

        this.loadLeaderBoard(30);
    }

    private leaderBoardApi: ILeaderBoardApi;

    public leaderBoardMembers: LeaderBoardRecord[] = [];

    public loadLeaderBoard(topN: number){
        var response = this.leaderBoardApi.getTopN(topN);

        let responseNames: { [name: string]: LeaderBoardMember } = {};
        response.forEach(m => responseNames[m.name ?? ''] = m);

        let currentNames: { [name: string]: LeaderBoardRecord } = {};
        this.leaderBoardMembers.forEach(m => currentNames[m.name ?? ''] = m);

        let old = this.leaderBoardMembers.filter(m => !((m.name ?? '') in responseNames));
        old.forEach(m => this.leaderBoardMembers.splice(this.leaderBoardMembers.indexOf(m), 1));

        let itemsToUpdate = response.filter(m => (m.name ?? '') in currentNames);
        itemsToUpdate.forEach(m => this.updateRecord(currentNames[m.name ?? ''], m));

        let newItems = response.filter(m => !((m.name ?? '') in currentNames));
        newItems.forEach(m => this.leaderBoardMembers.push(this.mapRecord(m)));

        this.leaderBoardMembers.sort((a, b) => (b.successRatio ?? 0) - (a.successRatio ?? 0));
    }

    private updateRecord(target: LeaderBoardRecord, source: LeaderBoardMember) {
        target.rank = source.rank;
        target.successRatio = source.successRatio;
    }

    private mapRecord(member: LeaderBoardMember): LeaderBoardRecord {
        let result = new LeaderBoardRecord();
        result.name = member.name;
        result.rank = member.rank;
        result.successRatio = member.successRatio;
        result.avatarConfig = genConfig();

        return result;
    }
}