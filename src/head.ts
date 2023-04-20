export function loggerMe(): void {

  console.log('loading...')

  interface Product {
    name: string;
    price: number;
    status: string;
    modify: boolean;
  }

const req = new Promise<Product>(function(resolve, reject){

  setTimeout(()=>{
    console.log('Preparing data...');
    const product: Product = {
      name: 'TV',
      price: 2000,
      status: '',
      modify: false,
    }
    resolve(product);

  }, 2000)

});

req.then((data: Product)=>{
  return new Promise<Product>((res, rej) => {
    setTimeout(()=> {
      data.status = 'order';
      res(data);
    }, 2000)
  });
  
}).then((data: Product) => {
    data.modify = true;
    return data;
  }).then((data:Product)=>{
    
    console.log(data);
})





















}
