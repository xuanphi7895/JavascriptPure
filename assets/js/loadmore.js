$(function() {
    const itemShow = 4;
    $('#loadMore').on('click', function() {
        console.log("a");
        $('.product-grid').append(html);
        let sumItem = $('.product-grid .product-item').length;
        if (sumItem > itemShow) {
            $('#showLess').css("display", "block");
        }
    });

    $('#showLess').on('click', function() {

    });

    const html = `
    <div class="row mt-5">
              <div class="col-lg-3 col-md-3 col-xl-3 product-item samsung" data-id="1" style="/* position: absolute; */ /* left: 0px; */ /* top: 0px; */">
                <div class="product discount product_filter">
                  <div class="product_image">
                    <img src="images/samsung-galaxy-z-fold-3-silver-1-600x600.jpg" alt="">
                  </div>
                  <div class="favorite favorite_left"></div>
                  <div class="product_bubble product_bubble_right product_bubble_green d-flex flex-column justify-content-center align-items-center">
                    <span>-$ 20</span>
                        </div>
                        <div class="product_info">
                            <h6 class="product_name">
                                <a href="javascript:;">Samsung</a>
                            </h6>
                            <div class="product_price">$ 200</div>
                        </div>
                    </div>
                    <div class="red_button add_to_cart_button">
                        <a class="addToCard" data-id="1" href="javascript:;">Add to card</a>
                </div>
              </div>

              <div class="col-lg-3 col-md-3 col-xl-3 product-item samsung" data-id="2" style="/* position: absolute; */ /* left: 285px; */ /* top: 0px; */">
                <div class="product discount product_filter">
                  <div class="product_image">
                    <img src="images/samsung-galaxy-z-fold-3-silver-1-600x600.jpg" alt="">
                  </div>
                  <div class="favorite favorite_left"></div>
                  <div class="product_bubble product_bubble_right product_bubble_green d-flex flex-column justify-content-center align-items-center">
                    <span>-$ 20</span>
                  </div>
                  <div class="product_info">
                    <h6 class="product_name">
                      <a href="javascript:;">Samsung</a>
                        </h6>
                        <div class="product_price">$ 200</div>
                    </div>
                </div>
                <div class="red_button add_to_cart_button">
                    <a class="addToCard" data-id="2" href="javascript:;">Add to card</a>
                </div>
              </div>

              <div class="col-lg-3 col-md-3 col-xl-3 product-item samsung" data-id="3" style="/* position: absolute; */ /* left: 570px; */ /* top: 0px; */">
                <div class="product discount product_filter">
                  <div class="product_image">
                    <img src="images/samsung-galaxy-z-fold-3-silver-1-600x600.jpg" alt="">
                  </div>
                  <div class="favorite favorite_left"></div>
                  <div class="product_bubble product_bubble_right product_bubble_green d-flex flex-column justify-content-center align-items-center">
                    <span>-$ 20</span>
                  </div>
                  <div class="product_info">
                    <h6 class="product_name">
                      <a href="javascript:;">Samsung</a>
                    </h6>
                    <div class="product_price">$ 200</div>
                </div>
            </div>
            <div class="red_button add_to_cart_button">
                <a class="addToCard" data-id="3" href="javascript:;">Add to card</a>
                </div>
              </div>

              <div class="col-lg-3 col-md-3 col-xl-3 product-item samsung" data-id="4" style="/* position: absolute; */ /* left: 0px; */ /* top: 337px; */">
                <div class="product discount product_filter">
                  <div class="product_image">
                    <img src="images/samsung-galaxy-z-fold-3-silver-1-600x600.jpg" alt="">
                  </div>
                  <div class="favorite favorite_left"></div>
                  <div class="product_bubble product_bubble_right product_bubble_green d-flex flex-column justify-content-center align-items-center">
                    <span>-$ 20</span>
                  </div>
                  <div class="product_info">
                    <h6 class="product_name">
                      <a href="javascript:;">Samsung</a>
                </h6>
                <div class="product_price">$ 200</div>
            </div>
    </div>
    <div class="red_button add_to_cart_button">
        <a class="addToCard" data-id="4" href="javascript:;">Add to card</a>
                </div>
              </div>

            </div>`;
});