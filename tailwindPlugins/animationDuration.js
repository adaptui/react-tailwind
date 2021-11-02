function animationDuration({ matchUtilities, theme }) {
  matchUtilities(
    {
      "animation-duration": value => {
        return { "animation-duration": `${value}` };
      },
    },
    {
      values: theme("animationDelay"),
    },
  );
}

module.exports = animationDuration;
