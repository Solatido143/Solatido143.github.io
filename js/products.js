// Selecting elements
let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');
let products = document.querySelectorAll('.products-container .product');
let activePage = 0; // Variable to store the index of the active page

// Adding event listeners to tab buttons
document.querySelectorAll('input[name="product-tab"]').forEach(tab => {
  tab.addEventListener('change', function() {
    filterProducts(this.id);
  });
});

// Function to filter products based on tab selection
function filterProducts(category) {
  // Filter products based on the category
  const filteredProducts = Array.from(products).filter(product => {
    const isHardware = product.classList.contains('hardware');
    const isSoftware = product.classList.contains('software');
    
    return (
      category === 'tab-all' || 
      (category === 'tab-web' && isHardware) || 
      (category === 'tab-uiux' && isSoftware)
    );
  });

  // Paginate the filtered products
  const pageSize = 3;
  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const currentPage = 0;

  // Display the products for the current page
  showPage(filteredProducts, currentPage, pageSize);
}

// Function to show products for the current page
function showPage(productsArray, pageNum, pageSize) {
  const start = pageNum * pageSize;
  const end = start + pageSize;
  const currentPageProducts = productsArray.slice(start, end);

  // Hide all products
  products.forEach(product => {
    product.style.display = 'none';
  });

  // Show products for the current page
  currentPageProducts.forEach(product => {
    product.style.display = 'block';
  });

  // Update pagination numbering
  updatePagination(productsArray, pageNum, pageSize);

  // Update active page
  activePage = pageNum;
}

// Function to update pagination numbering
function updatePagination(productsArray, pageNum, pageSize) {
  const totalPages = Math.ceil(productsArray.length / pageSize);
  const pagination = document.querySelector('.pagination');
  pagination.textContent = '';

  for (let i = 0; i < totalPages; i++) {
    const pageNumber = i + 1;
    const pageButton = document.createElement('button');
    pageButton.textContent = pageNumber;
    pageButton.onclick = () => {
      showPage(productsArray, i, pageSize);
    };

    // Add active class to the current page button
    if (i === pageNum) {
      pageButton.classList.add('active');
    }

    pagination.appendChild(pageButton);
  }
}

// Adding click event to product cards to show previews
document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    previewContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

// Adding click event to close buttons in previews
previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    previewContainer.style.display = 'none';
  };
});

// Initial setup
filterProducts('tab-all');
