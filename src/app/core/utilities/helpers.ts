export function transliterate(word) {
  let answer = '';
  const a = {};
  /* tslint:disable:no-string-literal */
  a['Ё'] = 'YO';
  a['Й'] = 'I';
  a['Ц'] = 'TS';
  a['У'] = 'U';
  a['К'] = 'K';
  a['Е'] = 'E';
  a['Н'] = 'N';
  a['Г'] = 'G';
  a['Ш'] = 'SH';
  a['Щ'] = 'SCH';
  a['З'] = 'Z';
  a['Х'] = 'H';
  // tslint:disable-next-line:quotemark
  a['Ъ'] = "'";
  a['ё'] = 'yo';
  a['й'] = 'i';
  a['ц'] = 'ts';
  a['у'] = 'u';
  a['к'] = 'k';
  a['е'] = 'e';
  a['н'] = 'n';
  a['г'] = 'g';
  a['ш'] = 'sh';
  a['щ'] = 'sch';
  a['з'] = 'z';
  a['х'] = 'h';
  // tslint:disable-next-line:quotemark
  a['ъ'] = "'";
  a['Ф'] = 'F';
  a['Ы'] = 'I';
  a['В'] = 'V';
  a['А'] = 'a';
  a['П'] = 'P';
  a['Р'] = 'R';
  a['О'] = 'O';
  a['Л'] = 'L';
  a['Д'] = 'D';
  a['Ж'] = 'ZH';
  a['Э'] = 'E';
  a['ф'] = 'f';
  a['ы'] = 'i';
  a['в'] = 'v';
  a['а'] = 'a';
  a['п'] = 'p';
  a['р'] = 'r';
  a['о'] = 'o';
  a['л'] = 'l';
  a['д'] = 'd';
  a['ж'] = 'zh';
  a['э'] = 'e';
  a['Я'] = 'Ya';
  a['Ч'] = 'CH';
  a['С'] = 'S';
  a['М'] = 'M';
  a['И'] = 'I';
  a['Т'] = 'T';
  // tslint:disable-next-line:quotemark
  a['Ь'] = "'";
  a['Б'] = 'B';
  a['Ю'] = 'YU';
  a['я'] = 'ya';
  a['ч'] = 'ch';
  a['с'] = 's';
  a['м'] = 'm';
  a['и'] = 'i';
  a['т'] = 't';
  // tslint:disable-next-line:quotemark
  a['ь'] = "'";
  a['б'] = 'b';
  a['ю'] = 'yu';

  for (const i in word) {
    if (word.hasOwnProperty(i)) {
      if (a[word[i]] === undefined) {
        answer += word[i];
      } else {
        answer += a[word[i]];
      }
    }
  }
  return answer;
}

export function transformToSlug(str: string, separator = '-') {
  str = str.toLocaleLowerCase();
  const strArr = str.split(' ');
  const newStrArr = [];
  for (let word of strArr) {
    if (word) {
      word = transliterate(word).toLocaleLowerCase();
      newStrArr.push(word.replace(/[^a-zA-Z0-9]/g, separator));
    }
  }
  return newStrArr.join(separator);
}
