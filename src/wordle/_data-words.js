/* eslint-disable camelcase */
const data_words = `aaaaa
sssss
ddddd
fffff
ggggg
hhhhh
jjjjj
kkkkk`;

async function getWords() {
  const words = await fetch('https://raw.githubusercontent.com/tabatkins/wordle-list/main/words')
    .then((res) => res.text())
    .then((t) => console.log(t) || t)
    .catch((e) => console.log(e));

  return words;
}

// FIX WITH - https://stackoverflow.com/questions/67713204/eslint-disable-default-export
export { data_words, getWords };
