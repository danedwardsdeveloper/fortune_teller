function tellFortune() {
  const fortuneStarts = [
    "A change awaits you ",
    "Beware of false promises ",
    "Seek wisdom in unexpected places ",
    "A journey is before you ",
    "Trust in your inner voice ",
  ];
  const fortuneMiddles = [
    "and an unexpected path will open, ",
    "for they conceal hidden intentions, ",
    "where answers lie obscured, ",
    " but the road may twist and turn, ",
    "and let it guide you towards truth, ",
  ];
  const fortuneEnds = [
    "leading to unforeseen possibilities.",
    "and may lead you astray.",
    "and insights will illuminate your path.",
    "testing your strength and resolve.",
    "for clarity awaits within.",
  ];
  const randomStart =
    fortuneStarts[Math.floor(Math.random() * fortuneStarts.length)];
  const randomMiddle =
    fortuneMiddles[Math.floor(Math.random() * fortuneMiddles.length)];
  const randomEnd = fortuneEnds[Math.floor(Math.random() * fortuneEnds.length)];
  return randomStart + randomMiddle + randomEnd;
}

console.log(tellFortune());
