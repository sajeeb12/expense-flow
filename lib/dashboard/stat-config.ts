import { StatId } from "@/types/dashboard";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  PiggyBank,
} from "lucide-react";

export const STAT_CONFIG: Record<
  StatId,
  {
    icon: typeof Wallet;
  }
> = {
  balance: {
    icon: Wallet,
  },

  income: {
    icon: TrendingUp,
  },

  expenses: {
    icon: TrendingDown,
  },

  savings: {
    icon: PiggyBank,
  },
};