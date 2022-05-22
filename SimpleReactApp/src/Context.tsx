import { createContext } from "react";
import { FakeApi } from "./FakeApiService";
import { LeaderBoardStore } from "./LeaderBoardStore";

export const rootStoreContext = createContext({
  leaderBoardStore: new LeaderBoardStore(new FakeApi())
});