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
    let data = [];
    for(let i = 0; i < uniqueCards; i++){
      data[i] = {label: i+1};
    }
    data = [...data, ...data];
    data = data.map( card => {
      return {...card}
    });
    data = shuffle(data);
    resolve(data);
  })
}
// export default setupCards;