const superHeros = [
  { name: 'Dynaguy', powers: ['desintegration ray', 'fly'] },
  { name: 'Apogee', powers: ['gravity control', 'fly'] },
  { name: 'Blazestone', powers: ['control of fire', 'pyrotechnic discharges'] },
  { name: 'Frozone', powers: ['freeze water'] },
  { name: 'Jack-Jack', powers: ['shapeshifting', 'fly'] },
]

function getFlyingSuperHeros() {
  return superHeros.filter(hero => {
    return hero.powers.includes('fly');
  });
};

export { getFlyingSuperHeros }