const pikachu = {
    type: "electric",
    hp: 80,
    attacks: {
      thundershock: 70,
      tailwhip: 10,
      gnaw: 20
    },
    weakness: "ground",
    height: "0.39m"
  };
  
  // return object keys
  export const getObjEntries = () => {
    return Object.entries(pikachu);
  };
  
  // returns object values
  export const getObjectValues = () => {
    return Object.values(pikachu);
  };
  
  // we are going to create a new copy of pikachu and combine it with
  // another object. We want to create a deep copy and not shallow copy
  //always use Object.assign to combine 2 objects into 1
  
  // Ref: https://pokemon.fandom.com/wiki/Gym_Badges#Indigo_League
  export const objAssign = () => {
    const ash = {
      type: "Pokemon Trainer",
      badges: {
        boulder: true,
        soul: false,
        earth: true
      }
    };
    // Ash has acquired new pokemon - Pikachu
    let newObj = Object.assign({}, ash, pikachu);
    return newObj;
  };
  
  export const spreadObj = () => {
    return { ...pikachu }; //returns you a new object with pikachu
  };
  
  export const destructureObj = () => {
    // lets only return Pikachu's attacks and his height
    const { attacks, height } = pikachu;
    return { attacks, height };
  };
  