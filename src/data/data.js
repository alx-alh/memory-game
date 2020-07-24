const shuffle = (cardArray) => {
  for (let i = cardArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = cardArray[i];
    cardArray[i] = cardArray[j];
    cardArray[j] = temp;
  }
  return cardArray;
}

export default (cardCount) => {
  return new Promise( (resolve, reject) => {
    if (cardCount % 2 !== 0) reject(new Error('must request even number of cards'));
    let uniqueCards = cardCount / 2;
    let data = [...Array(uniqueCards)].map( (card, i) => {
      let shift = 0;
      let img = 0;
      if(i > 11) {
        shift = 90;
        img = i - 12;
      } else if(i > 5){
        shift = 270;
        img = i - 6;
      } else {
        img = i;
      }
      return {label: i+1, shift, img};
    })
    data = [...data, ...data];
    data = data.map( card => {
      return {...card}
    });
    data = shuffle(data);
    resolve(data);
  })
}
