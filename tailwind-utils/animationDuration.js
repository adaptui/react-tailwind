function animationDuration({ matchUtilities, theme }) {
  matchUtilities(
    {
      "animation-duration": value => {
        return { "animation-duration": `${value}` };
      },
    },
    {
      values: theme("animationDuration"),
    },
  );
}

module.exports = animationDuration;
