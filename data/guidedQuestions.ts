// data/guidedQuestions.ts
export type GuidedStep = {
  id: number;
  prompt: string;
  hint?: string;
  correctAnswer: string | number;
  explanation: string;
  choices?: string[];
};

export type GuidedModule = {
  id: string;
  title: string;
  description: string;
  steps: GuidedStep[];
};

export const guidedModules: GuidedModule[] = [
  {
    id: "buy-or-wait",
    title: "Buy or Wait? Reading the Trend",
    description:
      "Decide whether to enter a trade based on trend, support/resistance, and risk-reward.",
    steps: [
      {
        id: 1,
        prompt:
          "A stock has been making higher highs and higher lows over the last 2 weeks. Price just bounced off the 50-day moving average. Is the trend bullish or bearish?",
        choices: ["Bullish", "Bearish", "Sideways"],
        correctAnswer: "Bullish",
        hint:
          "Higher highs + higher lows = uptrend. A bounce at the 50-day MA often acts as support in an uptrend.",
        explanation:
          "An uptrend is defined by higher highs and higher lows. When price respects the 50-day MA as support, that confirms bullish structure for many trend traders.",
      },
      {
        id: 2,
        prompt:
          "You plan to buy at $100. Your stop-loss is $94. Your target is $115. What is the risk-reward ratio?",
        correctAnswer: 2.5,
        hint:
          "Risk = entry − stop. Reward = target − entry. Ratio = reward / risk.",
        explanation:
          "Risk = 100 − 94 = $6. Reward = 115 − 100 = $15. Ratio = 15 / 6 = 2.5. Many traders require at least 1:2 or 1:2.5 to take a trade.",
      },
      {
        id: 3,
        prompt:
          "Given the uptrend and a 1:2.5 risk-reward, which action fits a disciplined plan?",
        choices: [
          "Buy now with a stop at $94 and scale out near $115",
          "Buy now with no stop-loss, just ‘feel’ when to sell",
          "Short the stock because it already went up a lot",
        ],
        correctAnswer:
          "Buy now with a stop at $94 and scale out near $115",
        hint:
          "Discipline = predefined entry, stop, target, and an exit plan (e.g., sell part at target).",
        explanation:
          "The correct plan uses the trend, respects risk management (stop at $94), and locks in gains by scaling out near the target. The other options ignore risk or fight the trend without a reason.",
      },
    ],
  },
];
