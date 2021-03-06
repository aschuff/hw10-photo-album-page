$(document).ready(function (){
// puts the albums on the page
var albumsString = '';
albums.forEach(function (item, idx, arr){
  albumsString += `<div class="album" data-id="${item.id}">
                  <img src="${item.cover}" alt="">
                  <h3>${item.title}</h3>
                  </div>`;
})
  $('.albums').html(albumsString);

// when the album is clicked, the pictures are displayed and the album is hidden
  $('.albums').on('click', '.album', function(event) {
      event.preventDefault();
      console.log($(this).data('id'));
      var albumId = $(this).data('id');
      var chosenAlbum = albums.filter(function (item, idx, arr){
        return item.id === albumId;
    })
    var photosString = '';
      chosenAlbum[0].pictures.forEach(function(item, idx, arr){
        photosString += `<div class="photo">
                        <img src="${item.photo}" alt="">
                        <h3>${item.caption}</h3>
                        </div>`
    });
    $('.albumThumbnails').html(photosString);
    $('.albumThumbnails').addClass('active');
    $('.albums').hide();
  })

// creates the list items
  var places = albums.map(function (item, idx, arr){
    return "<li>" + item.title + "</li>"
  })
// lists the list items and puts them in the sidebar as part of the html
    places.forEach(function(item){
      return $('.sidebar').html(places)
    })
//on the click of the list item, it takes you to the correct pictures in the album
$('.sidebar').on('click', 'li', function (event) {
    console.log("Hey there" );

       event.preventDefault();
       var clickedListItem = $(this).text();

       var chosenAlbum = albums.filter(function (item, idx, arr){
         return item.id === clickedListItem;
       })
     var photosString = '';
       chosenAlbum[0].pictures.forEach(function(item, idx, arr){
         photosString += `<div class="photo">
                          <img src="${item.photo}" alt="">
                          <h3>${item.caption}</h3>
                         </div>`
     });
     $('.albumThumbnails').html(photosString);
     $('.albumThumbnails').addClass('active');
     $('.albums').addClass('hidden');
   });

 //     $('.photo').on('click',function (event) {
 //       console.log(this);
 //       $(this).siblings().hide();
 // });
// });
// hides all other pages and shows a single image
var chosenBigPhoto =
  albums.filter(function(item, idx, arr){
    return item.photo
  })
$('.albumThumbnails').on('click', '.photo', function(event) {
    event.preventDefault();
    var photoId = $(this).data('id');
    var chosenPhoto = albums.filter(function (item, idx, arr){
      return item.photo === photoId;
  })
  var photosBig = '';
    chosenPhoto[0].pictures.forEach(function(item, idx, arr){
      photosBig += `<div class="largePhoto">
                      <img src="${item.photo}" alt="">
                      <h3>${item.caption}</h3>
                      </div>`

  });
  $('.photoZoom').html(photosBig);
  $('.photoZoom').addClass('hidden');
  $(this).siblings().hide();
  $('.sidebar').hide();
  $('.albums').hide();

})
});

// back to home button
$('input').on('click', function (event){
  event.preventDefault();
  console.log("hey!")
  var albumsString = '';
  albums.forEach(function (item, idx, arr){
    albumsString += `<div class="album" data-id="${item.id}">
                    <img src="${item.cover}" alt="">
                    <h3>${item.title}</h3>
                    </div>`;

  })
  console.log("album String", albumsString);
  $('.albums').html(albumsString);
  $('.albums').removeClass('hidden').show();
  $('albumThumbnails').addClass('hidden');

})

// })
