export default function homeHelper(cards) {
  const totalCards = cards.length;

  const averageWinRate =
    cards.length > 0
      ? (
          cards.reduce((sum, card) => {
            return sum + Number(card.winRate);
          }, 0) / cards.length
        ).toFixed(1)
      : 0;

  const averageUseRate =
    cards.length > 0
      ? (
          cards.reduce((sum, card) => {
            return sum + Number(card.useRate);
          }, 0) / cards.length
        ).toFixed(1)
      : 0;

  const evolutionCards = cards.filter((card) => {
    return card.hasEvolution === true;
  }).length;

  const mostUsedCards = [...cards]
    .sort((a, b) => b.useRate - a.useRate)
    .slice(0, 5);

  const highestWinRateCards = [...cards]
    .sort((a, b) => b.winRate - a.winRate)
    .slice(0, 5);

  return {
    totalCards,
    averageWinRate,
    averageUseRate,
    evolutionCards,
    mostUsedCards,
    highestWinRateCards,
  };
}