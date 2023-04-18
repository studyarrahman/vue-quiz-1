<template>
    <div class="gallery mt-5" >
      <div class="jumbotron bg-light" style="background: linear-gradient(135deg, #3D8BD6, #6B3FA0);
">
        <h1 class="display-4">Portfolio</h1>
        <p class="lead">Check out some of our latest work.</p>
        <hr class="my-4">
      </div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-4">
              <img class="card-img-top" src="https://th.bing.com/th/id/OIP.x2YKY7V_eC7hfDRJdcVp3gHaFj?w=231&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Gallery Image">
              <div class="card-body">
                <h5 class="card-title">Project 1</h5>
                <p class="card-text">this</p>
                <a href="#" class="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <img class="card-img-top" src="https://th.bing.com/th/id/OIP.xqBN4IGwV7ITcRYr6-h76wHaF1?w=226&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Gallery Image">
              <div class="card-body">
                <h5 class="card-title">Project 2</h5>
                <p class="card-text">this</p>
                <a href="#" class="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <img class="card-img-top" src="https://th.bing.com/th/id/OIP.hA4Y-l8d_9lExWz_z296NwHaHx?w=145&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Gallery Image">
              <div class="card-body">
                <h5 class="card-title">Project 3</h5>
                <p class="card-text">this</p>
                <a href="#" class="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Portfolio"
  };
  </script>
  
  <style scoped>
  .jumbotron {
    padding: 4rem 2rem;
    margin-bottom: 2rem;
    border-radius: 0.3rem;
  }
  
  .card {
    border: none;
    border-radius: 0.3rem;
    transition: all 0.2s ease-in-out;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  
  .card-img-top {
    border-radius: 0.3rem;
    height: 200px;
    object-fit: cover;
  }
  </style>
  