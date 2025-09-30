export type Suit = 'Diamonds' | 'Hearts' | 'Spades' | 'Clubs' | 'Joker';
export type Animal = 'Lion' | 'Fox' | 'Parrot' | 'Seal' | 'Snake';
export type Fruit = 'Apple' | 'Bananas' | 'Mango' | 'Watermelon' | 'Papaya';

function findOccurances(array: string[], char: string) {
  return array
    .map((element, index) => (element === char ? index : -1))
    .filter((index) => index !== -1);
}

function weight(indices: number[]) {
  // to be implemented
}

export function predictProbability(card: string, animal: string, fruit: string): number {
  let percentage = 0;
  // get csv file from public dir
  fetch( './prediction.csv' )
    // get response as text
    .then( response => response.text() )
    .then( responseText => {
      // check the nb of rows based on line breaks
      const lines = responseText.trim().split("\n");

      // columns for each type
      const first: string[] = [];
      const second: string[] = [];
      const third: string[] = [];
      const fourth: string[] = [];

      // combine each column's value into an array
      for (let i = 1; i < lines.length; i++) {
        const parts = lines[i].split(",").map(s => s.trim());
        if (parts.length >= 4) {
          first.push(parts[0]);
          second.push(parts[1]);
          third.push(parts[2]);
          fourth.push(parts[3]);
        }
      }

      // get percentage for each
      const firstPercentage = first.filter(val => val === card).length / 100;
      const secondPercentage = second.filter(val => val === animal).length / 100;
      const thirdPercentage = third.filter(val => val === fruit).length / 100;

      const totalPercentage = firstPercentage * secondPercentage * thirdPercentage
      console.log("firstPercentage: ", firstPercentage)
      console.log("secondPercentage: ", secondPercentage)
      console.log("thirdPercentage: ", thirdPercentage)
      console.log("totalPercentage: ", totalPercentage)

      percentage = totalPercentage;
    }
  )
  return percentage
};

