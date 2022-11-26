export default function () {
  const nature = new Audio("./sounds/Floresta.wav");
  const rain = new Audio("./sounds/Chuva.wav");
  const coffeShop = new Audio("./sounds/Cafeteria.wav");
  const fireSound = new Audio("./sounds/Lareira.wav");

  return {
    nature,
    rain,
    coffeShop,
    fireSound,
  };
}
