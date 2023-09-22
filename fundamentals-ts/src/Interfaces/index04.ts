

interface TechProps {
  id: string;
  name: string;
  description?: string;
}

interface NamesTech {
  names: TechProps[];
}

let tech: NamesTech = {
  names: [
    {
      id: '123',
      name: 'ReactJS'
    },
    {
      id: '123',
      name: 'NodeJS',
      description: 'Runtime of run JavaScript, the better'
    }
    
  ]
}

console.log(tech.names)