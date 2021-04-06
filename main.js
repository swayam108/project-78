var images=[
    "https://s.clipartkey.com/mpngs/s/281-2815655_janice-templeton-boss-baby.png",
  "https://i.pinimg.com/236x/a2/06/aa/a206aa2a6e2dcef2b6a2ba990c486d4c.jpg",
  "https://www.clipartmax.com/png/middle/174-1740337_anime-girl-full-body.png",
  "https://toppng.com/uploads/preview/tim-templeton-boss-baby-tim-in-boss-baby-11562874000jqr9bkds5x.png",
  "https://images-na.ssl-images-amazon.com/images/I/515BniafrYL._SX258_BO1,204,203,200_.jpg"
   ]
  
  var i =0;
  function change_image(){
      if (i > 5) {
          i=0
      }
    document.getElementById("img1").src=images[i];
    i++
  }
