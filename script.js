// ! Task 1

const month = prompt('Zəhmət olmasa hər hansısa bir ayı qeyd edin');

console.log(month);

switch(month){
    case 'Yanvar':
    //   console.log('Seçdiyiniz ay qış fəslinə daxildir');
      alert('Seçdiyiniz ay qış fəslinə daxildir')
    break;
    case 'Fevral':
    //   console.log('Seçdiyiniz ay qış fəslinə daxildir');
      alert('Seçdiyiniz ay qış fəslinə daxildir')
    break;
    case 'Mart':
    //   console.log('Seçdiyiniz ay yaz fəslinə daxildir');
      alert('Seçdiyiniz ay yaz fəslinə daxildir')
    break;
    case 'Aprel':
    //   console.log('Seçdiyiniz ay yaz fəslinə daxildir');
      alert('Seçdiyiniz ay yaz fəslinə daxildir')
    break;
    case 'May':
    //   console.log('Seçdiyiniz ay yaz fəslinə daxildir');
      alert('Seçdiyiniz ay yaz fəslinə daxildir')
    break;
    case 'İyun':
    //   console.log('Seçdiyiniz ay yay fəslinə daxildir');
      alert('Seçdiyiniz ay yay fəslinə daxildir')
    break;
    case 'İyul':
    //   console.log('Seçdiyiniz ay yay fəslinə daxildir');
      alert('Seçdiyiniz ay yay fəslinə daxildir')
    break;
    case 'Avqust':
    //   console.log('Seçdiyiniz ay yay fəslinə daxildir');
      alert('Seçdiyiniz ay yay fəslinə daxildir')
    break;
    case 'Sentyabr':
    //   console.log('Seçdiyiniz ay payız fəslinə daxildir');
      alert('Seçdiyiniz ay payız fəslinə daxildir')
    break;
    case 'Oktyabr':
    //   console.log('Seçdiyiniz ay payız fəslinə daxildir');
      alert('Seçdiyiniz ay payız fəslinə daxildir')
    break;
    case 'Noyabr':
    //   console.log('Seçdiyiniz ay payız fəslinə daxildir');
      alert('Seçdiyiniz ay payız fəslinə daxildir')
    break;
    case 'Dekabr':
    //   console.log('Seçdiyiniz ay qış fəslinə daxildir');
      alert('Seçdiyiniz ay qış fəslinə daxildir')
    break;
    default:
      alert('daxil etdiyiniz ay movcud deyil')
}



// ! Task 2

class Car{
    constructor(model,year,color,tank){
        this.model = model,
        this.year = year,
        this.color = color,
        this.tank = tank
    }
}
 
const bmw = new Car('Bmw',2023,'blue',35);
const mercedes = new Car('Mercedes',2020,'red',30);
const chevrolet = new Car('Chevrolet',2021,'green',25);

console.log(bmw);
console.log(mercedes);

const carInfo = prompt('Zehmet olmasa bir masin qeyd edin');

switch(carInfo){
    case 'BMW':
      console.log(bmw);
      break;
    case 'Mercecdes':
      console.log(mercedes);
      break;
    case 'Chevrolet':
      console.log(chevrolet);
      break;
    default:
      console.log('Daxil etdiyiniz avtomobil tapilmadi')  
}


// ! the past task


function carInfo(marka,model,year){
    return marka + ' ' + model + ' ' + year;
}

function carDistance(distance){
    let volume = 5;
    return distance * volume;
}

function checkData(){
    // let reslut =` Masinin adi: ${carInfo('Hyundai','Elantra',2013)}  ---  Mesafe: ${carDistance(50)}km `
    // console.log(reslut);
    console.log(` Masinin adi: ${carInfo('Hyundai','Elantra',2013)}  ---  Mesafe: ${carDistance(50)}km `);
}

checkData();

