import { uniqueNamesGenerator, Config, adjectives, colors, animals, names } from 'unique-names-generator';

export class LeaderBoardMember {
    public name: string | null = null;

    public rank: number | null = null;

    public successRatio: number | null = null;
}

export interface ILeaderBoardApi {
    getTopN(n: number): LeaderBoardMember[];
}

export class FakeApi implements ILeaderBoardApi {
    private nameConfig: Config = {
        dictionaries: [adjectives, colors, animals],
        separator: '_'
      }      
    
    private generatedData: LeaderBoardMember[] | null = null;

    public getTopN(n: number): LeaderBoardMember[] {
        let result = [];

        this.generatedData = this.generatedData ?? [];

        if (this.generatedData.length < n) {
            for (let i = this.generatedData.length; i < n; i++){
                var member = new LeaderBoardMember();
                member.name = uniqueNamesGenerator(this.nameConfig);
                member.successRatio = this.getRandomRatio();
                this.generatedData.push(member);
            }
        }

        this.generatedData.sort((a,b) => (b.successRatio ?? 0) - (a.successRatio ?? 0));

        this.generatedData = this.generatedData.map((m, idx) => {
            m.rank = idx + 1;
            return m;
        });

        result = this.generatedData.slice(0, n - 1);

        return result;
    }

    private getRandomRatio(min = 0.2, max = 1.0) {
        return Math.round((Math.random() * (max - min) + min) * 100) / 100;
      }
}