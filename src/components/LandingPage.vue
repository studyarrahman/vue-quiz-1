<template>

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="../assets/Napp.png" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
        </li>
       <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  <router-view />

  <footer class="bg-white py-4 mt-auto">
       
      <div class="container px-5">
         <div class="row align-items-center justify-content-between flex-column flex-sm-row">
            <div class="col-auto"><div class="small m-0">
              <a href="https://github.com/studyarrahman"><img src="../assets/github.png" alt="" style="width:30px;height:30px;" ></a>&nbsp;&nbsp;
              <a href="https://www.instagram.com/mr_rahman_id/"><img src="../assets/instagram.png" alt="" style="width:30px;height:30px;"></a>&nbsp;&nbsp;
              <a href="https://t.me/NOVRIRAHMAN"><img src="../assets/telegram.png" alt="" style="width:30px;height:30px;"></a>&nbsp;&nbsp;
              <a href="http://wa.me/6281270859531"><img src="../assets/whatsapp.png" alt="" style="width:30px;height:30px;"></a>
            </div></div>
            


            <div class="col-auto"><div class="small m-0">Copyright &copy; Novri Rahman 2023</div></div>
               <div class="col-auto">
                 <a class="small" href="#!">Privacy</a>
                 <span class="mx-1">&middot;</span>
                 <a class="small" href="#!">Terms</a>
              </div>
          </div>
      </div>
  </footer>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url();
  background-size: cover;
}
</style>
