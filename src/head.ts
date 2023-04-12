export function loggerMe(): void {



  const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50},
  ]

  const budget = [5000, 15000, 25000];

  const map = new Map();

  shops.forEach((item: any, i) => {
    map.set(item, budget[i])
  })


map.forEach((value, key, map) => {
  console.log(value, key)
})


}
