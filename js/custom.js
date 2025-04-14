(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

	


	var sitePlusMinus = function() {

		var value,
    		quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
	      var increase = quantityContainer.getElementsByClassName('increase')[0];
	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
	    }

	    function init() {
	        for (var i = 0; i < quantity.length; i++ ) {
						createBindings(quantity[i]);
	        }
	    };

	    function increaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        console.log(quantityAmount, quantityAmount.value);

	        value = isNaN(value) ? 0 : value;
	        value++;
	        quantityAmount.value = value;
	    }

	    function decreaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        value = isNaN(value) ? 0 : value;
	        if (value > 0) value--;

	        quantityAmount.value = value;
	    }
	    
	    init();
		
	};
	sitePlusMinus();


})()
// Preloader
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const product = JSON.parse(button.dataset.product);
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.name} added to cart!`);
    });
  });

// Cart functionality
// ... inside DOMContentLoaded
if (window.location.pathname.includes("cart.html")) {
	const cartContainer = document.getElementById("cart-container");
	const cartTotal = document.getElementById("cart-total");
	const checkoutBtn = document.getElementById("checkout-btn");
  
	if (cartContainer && cart.length > 0) {
	  let total = 0;
  
	  cart.forEach((item, index) => {
		total += item.price;
  
		const div = document.createElement("div");
		div.classList.add("col-12", "mb-3");
		div.innerHTML = `
		  <div class="card p-3 d-flex flex-row justify-content-between align-items-center">
			<div class="d-flex align-items-center">
			  <img src="${item.image}" width="80" class="me-3">
			  <div>
				<h5>${item.name}</h5>
				<p>$${item.price}</p>
			  </div>
			</div>
			<button class="btn btn-sm btn-danger remove-btn" data-index="${index}">Remove</button>
		  </div>
		`;
		cartContainer.appendChild(div);
	  });
  
	  cartTotal.textContent = total.toFixed(2);
  
	  // Handle remove buttons
	  document.querySelectorAll(".remove-btn").forEach(btn => {
		btn.addEventListener("click", () => {
		  const index = parseInt(btn.dataset.index);
		  cart.splice(index, 1);
		  updateCartStorage();
		  location.reload(); // refresh the page to reflect changes
		});
	  });
  
	  // Checkout button behavior
	  checkoutBtn.addEventListener("click", () => {
		alert("Proceeding to checkout... (you can hook this to Stripe/Backend)");
	  });
  
	} else if (cartContainer) {
	  cartContainer.innerHTML = "<p>Your cart is empty.</p>";
	  cartTotal.textContent = "0.00";
	  checkoutBtn.style.display = "none";
	}
  }
  // Handle remove buttons
document.querySelectorAll(".remove-btn").forEach(btn => {
	btn.addEventListener("click", () => {
	  const index = parseInt(btn.dataset.index);
	  
	  // Remove item from cart array
	  cart.splice(index, 1);
	  
	  // Save updated cart
	  localStorage.setItem("cart", JSON.stringify(cart));
	  
	  // Refresh the cart display
	  location.reload(); // or dynamically update the DOM if you prefer
	});
  });
  

