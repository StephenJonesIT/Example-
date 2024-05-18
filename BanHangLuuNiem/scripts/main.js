$(document).ready(function() {
    // Lấy các slide
    const slides = $('.slide');
    // Lấy slide hiện tại
    let currentSlide = 0;
    // Hiển thị slide đầu tiên
    slides.eq(currentSlide).addClass('active');

    // Hàm chuyển đến slide tiếp theo
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
  
      slides.removeClass('active');
      slides.eq(currentSlide).addClass('active');
    }
  
    // Hàm chuyển đến slide trước
    function prevSlide() {
      currentSlide--;
  
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
  
      slides.removeClass('active');
      slides.eq(currentSlide).addClass('active');
    }
    // Tự động chuyển slide sau mỗi 4 giây
    setInterval(nextSlide, 4000);
  });