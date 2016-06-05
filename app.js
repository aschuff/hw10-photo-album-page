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
$('li').on('click', function (event) {
       event.preventDefault();
       var clickedListItem = $(this).text();
       console.log($(this).text());

       var chosenAlbum = albums.filter(function (item, idx, arr){
         return item.title === clickedListItem;
       })
     var photosString = '';
       chosenAlbum[0].pictures.forEach(function(item, idx, arr){
         photosString += `<div class="photo">
                         <h3>${item.caption}</h3>
                         <img src="${item.photo}" alt="">
                         </div>`
     });
     $('.albumThumbnails').html(photosString);
     $('.albumThumbnails').addClass('active');
     $('.albums').hide()
     })

     $('.photo').on('click',function (event) {
       console.log(this);
       $(this).siblings().hide();
       // $(this).css('background-color','red');
 });
});

// making the picture big

// $('.photo').on('click', function(event) {
//     event.preventDefault();
//     console.log($(this).data('id'));
//
//     var chosenPhoto = albums.filter(function (item, idx, arr){
//       return
//       $(this).find('img').attr('src');
//         $('.photoZoom').attr('src',chosenPhoto);
//         $(this).siblings().hide();
//
//   $('.photoZoom').html(photosString)
//   $('.photoZoom').addClass('active');
//   $(this).siblings().hide();
//   $('.sidebar').hide();
//
// })
// })
var chosenBigPhoto =
  albums.filter(function(item, idx, arr){
    return item.photo
  })
  // chosenBigPhoto.filter(function(item, idx, arr){
  //   return
    // $('.photoZoom').html(chosenBigPhoto);
  // })
$('.albumThumbnails').on('click', '.photo', function(event) {
    event.preventDefault();
    // console.log($(this).data('id'));
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
  $('.photoZoom').addClass('active');
  $('.photo').siblings().hide();
  $('.sidebar').hide();
  $('.albums').hide();

})

// header takes you home
  $('.header').on('click', function (item, idx, arr){
    $('.albums').addClass('active');
    $('.albumThumbnails').siblings().hide();
    $('.sidebar').addClass('active')
    $('.photoZoom').addClass('hidden');
  })
