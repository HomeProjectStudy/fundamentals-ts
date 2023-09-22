

interface GameProps {
  readonly id: string;
  name: string;
  platoform: string[]
}


const redDevil: GameProps = {
  id: '1',
  name: 'Red Devil',
  platoform: ['PS5', 'PC']
}

// console.log(redDevil)

interface DLC extends GameProps {
  newContent: string[]
}

const PES2016: DLC = {
  id: '2',
  name: 'PES2016',
  platoform: ['PS5', 'PC', 'XBOX'],
  newContent: ['new players', 'new stadium', 'new club']
}

console.log(PES2016)
