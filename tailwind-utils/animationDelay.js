function animationDelay({ matchUtilities, theme }) {
  matchUtilities(
    {
      "animation-delay": value => {
        return { "animation-delay": `${value}` };
      },
    },
    {
      values: theme("animationDelay"),
    },
  );
}

module.exports = animationDelay;
