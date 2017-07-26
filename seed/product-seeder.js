const Product = require('../models/product');

const mongoose = require('mongoose');
mongoose.connect('localhost:27017/shop');

const products = [
  new Product({
    imagePath: 'http://www.billboard.com/files/styles/article_main_image/public/media/19-beyonce-lemonade-screenshot-2016-billboard-650.jpg',
    title: 'LEMONADE VISUAL ALBUM',
    description: 'Groundbreaking visual album by Beyonce that sees her gve an insight into her personal life and embrace her Southern Black culture!',
    price: 18
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/3/32/Rihanna_-_Anti.png',
    title: 'ANTI',
    description: 'Rihanna steps out of her comfort zone and puts out her most artistic album to date',
    price: 15
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Blonde_-_Frank_Ocean.jpeg/220px-Blonde_-_Frank_Ocean.jpeg',
    title: 'BLONDE',
    description: 'channel Orange was a stepping stone to better projects.Vocal excellence and artistic growth!',
    price: 14
  }),
  new Product({
    imagePath: 'https://artistxite.com/imgcache/album/005/785/005785009_500.jpg',
    title: 'A SEAT AT THE TABLE',
    description: 'Solanges first album to go mainstream. She still shows her talent and genius in production and songwriting',
    price: 16
  }),
  new Product({
    imagePath: 'http://www.huhmagazine.co.uk/images/uploaded/kanye_tlop_cover_01.jpg',
    title: 'LIFE OF PABLO',
    description: 'Great production and rap!',
    price: 15
  }),
  new Product({
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ4feIWuyKV03wkJrCRSkNKNSHx7_DmceUiAXRngQic2knangO',
    title: 'EMOTIONS SIDE B',
    description: 'Carly Rae Jepsen shows us why she deserves to be among the top pop stars in the most MJ record of the recent past',
    price: 15
  })
];

var done = 0;

for (var i = 0; i < products.length; i++) {
  products[i].save(function (err, result) {
    done++;
    if (done === products.length){
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}
