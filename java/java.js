var images = [
     '../image/photo_2023-12-28_19-33-41.jpg',
     '../image/photo_2023-12-28_19-34-00.jpg',
     '../image/photo_2023-12-28_19-34-05.jpg',
     '../image/photo_2023-12-28_19-34-10.jpg',
     // Добавьте пути к другим изображениям по мере необходимости
 ];

 var currentImageIndex = 0;

 function updateImage() {
     var image = document.getElementById('myImage');
     var imageInfo = document.getElementById('imageInfo');
     image.src = images[currentImageIndex];
     imageInfo.textContent = 'Картинка ' + (currentImageIndex + 1) + ' из ' + images.length;
 }

  function changeImage() {
     currentImageIndex = (currentImageIndex + 1) % images.length;
     updateImage();
 }

 function reversChangeImage() {
     currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
     updateImage();
 }
 