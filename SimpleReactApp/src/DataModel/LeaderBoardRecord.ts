import { makeObservable, observable, computed } from "mobx";
import AvatarConfig, { AvatarFullConfig } from 'react-nice-avatar';

export class LeaderBoardRecord {
    constructor() {
        makeObservable(this, {
            name: observable,
            avatarConfig: observable,
            rank: observable,
            successRatio: observable
        })
    }

    public name: string | null = null;

    public avatarConfig: AvatarFullConfig | null = null;

    public rank: number | null = null;

    public successRatio: number | null = null;
}